// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The rewrite itself: one source file at a time, driven by `naming-map.json` and by ts-morph's
 * symbol resolution.
 *
 * Nothing here matches identifier TEXT. Every rewritten occurrence is a reference the language
 * service resolved back to a binding this file imported from `@cdktn/provider-aws` — which is what
 * makes a local `const S3Bucket = …`, a property named `s3Bucket`, or a same-named import from a
 * different package safe from it, and what makes type positions (`typeof`, generics, `satisfies`,
 * `implements`) work without a second code path: a type reference is a reference.
 *
 * Anything the map does not cover is REPORTED and left exactly as it was, together with the import
 * binding it came through, so the file keeps compiling against both libraries until a human decides
 * what that symbol should become.
 */
import {
  ImportDeclaration,
  Node,
  Project,
  SourceFile,
  SyntaxKind,
  VariableStatement,
} from "ts-morph";
import { Edit, applyEdits, wholeLine } from "./edits";
import {
  ClassicModule,
  SymbolIndex,
  TARGET_PACKAGE,
  classicModuleOfSpecifier,
  isClassicSpecifier,
} from "./map";

export interface Unmapped {
  readonly file: string;
  readonly line: number;
  /** how the source spells it, e.g. `s3Bucket.S3BucketNotification` */
  readonly symbol: string;
  readonly reason: string;
}

export interface FileResult {
  readonly file: string;
  readonly before: string;
  readonly after: string;
  /** references rewritten in this file */
  readonly rewrites: number;
  readonly unmapped: readonly Unmapped[];
}

/** How a local binding reaches classic symbols. */
type BindingKind =
  /** `import { S3Bucket } from '…/lib/s3-bucket'` — the local name IS the symbol */
  | { readonly kind: "symbol"; readonly module: ClassicModule; readonly imported: string }
  /** `import * as s3Bucket from '…/lib/s3-bucket'`, or `import { s3Bucket } from '@cdktn/provider-aws'` */
  | { readonly kind: "namespace"; readonly module: ClassicModule }
  /** `import * as aws from '@cdktn/provider-aws'` — two hops: `aws.s3Bucket.S3Bucket` */
  | { readonly kind: "root" }
  /** a classic binding the map cannot place — reported and kept, never dropped */
  | { readonly kind: "unknown"; readonly reason: string };

interface Binding {
  readonly local: Node;
  readonly name: string;
  readonly detail: BindingKind;
  /** the statement the binding lives in, so a residual can be rebuilt from what is kept */
  readonly statement: ImportDeclaration | VariableStatement;
  /** how this binding is spelled inside a rebuilt import, e.g. `s3Bucket` or `S3Bucket as B` */
  readonly clause: string;
  /** which slot of an import clause it occupies, so a residual can be spelled back correctly */
  readonly form: "default" | "star" | "named";
  /**
   * `import type { … }` or `import { type X }`. A type-only import erases; turning it into a value
   * import adds a runtime require the file never had, which `verbatimModuleSyntax` calls an error.
   */
  readonly typeOnly: boolean;
}

const lineOf = (node: Node): number => node.getStartLineNumber();

/**
 * Names already spoken for in this file. A group barrel member has to be aliased around any of
 * them — including one declared inside a function, which would shadow the import at exactly the
 * place the rewrite needs it.
 */
function declaredNames(file: SourceFile): Set<string> {
  const names = new Set<string>();
  const DECLARATIONS = [
    SyntaxKind.VariableDeclaration,
    SyntaxKind.FunctionDeclaration,
    SyntaxKind.ClassDeclaration,
    SyntaxKind.InterfaceDeclaration,
    SyntaxKind.TypeAliasDeclaration,
    SyntaxKind.EnumDeclaration,
    SyntaxKind.ModuleDeclaration,
    SyntaxKind.Parameter,
    SyntaxKind.BindingElement,
    SyntaxKind.ImportSpecifier,
    SyntaxKind.ImportClause,
    SyntaxKind.NamespaceImport,
    SyntaxKind.ImportEqualsDeclaration,
  ];
  for (const kind of DECLARATIONS) {
    for (const node of file.getDescendantsOfKind(kind)) {
      // `import { readFileSync as s3 }` binds `s3`, not `readFileSync`: the local name is the one a
      // group barrel member would collide with, and the imported name is not bound at all.
      const name = Node.isImportSpecifier(node)
        ? node.getAliasNode() ?? node.getNameNode()
        : (node as { getNameNode?: () => Node | undefined }).getNameNode?.();
      if (name && Node.isIdentifier(name)) names.add(name.getText());
    }
  }
  return names;
}

/** `s3` -> `s3`, or `s3_`, `s3_2`, `s3_3`… — a pure function of (group, taken). */
function aliasFor(group: string, taken: Set<string>): string {
  if (!taken.has(group)) return group;
  if (!taken.has(`${group}_`)) return `${group}_`;
  for (let n = 2; ; n++) {
    if (!taken.has(`${group}_${n}`)) return `${group}_${n}`;
  }
}

/** A loader call a variable statement is initialised from, and how the source spells it. */
interface LoadCall {
  readonly specifier: string;
  /** `require`, `module.require`, `await import` — written back verbatim in a residual statement */
  readonly callee: string;
}

/** The synchronous loaders that bind a namespace object; `module.require` IS `require` under CJS. */
const SYNC_LOADERS = new Set(["require", "module.require"]);

/**
 * The load a variable statement is initialised from, if that is what it is.
 *
 * `require`, `module.require` and `await import(…)` all bind the namespace object, so all three
 * destructure and hop identically and all three are rewritten. A bare `import(…)` binds a Promise
 * rather than a namespace, so it is left to the backstop rather than guessed at.
 */
function loadCall(statement: VariableStatement): LoadCall | undefined {
  const declarations = statement.getDeclarations();
  if (declarations.length !== 1) return undefined;
  const initializer = declarations[0].getInitializer();
  if (!initializer) return undefined;
  const awaited = Node.isAwaitExpression(initializer);
  const call = awaited ? initializer.getExpression() : initializer;
  if (!Node.isCallExpression(call)) return undefined;
  const expression = call.getExpression();
  const callee = expression.getText();
  const usable =
    expression.getKind() === SyntaxKind.ImportKeyword ? awaited : !awaited && SYNC_LOADERS.has(callee);
  if (!usable) return undefined;
  const [arg] = call.getArguments();
  if (!arg || !Node.isStringLiteral(arg)) return undefined;
  return { specifier: arg.getLiteralValue(), callee: awaited ? `await ${callee}` : callee };
}

function moduleFor(
  index: SymbolIndex,
  specifier: string,
  name: string,
): ClassicModule | undefined {
  const deep = classicModuleOfSpecifier(specifier);
  return deep ? index.byModule.get(deep) : index.bySubmodule.get(name);
}

/** A classic binding whose module the map does not know: kept whole, and reported. */
const UNKNOWN_MODULE: BindingKind = {
  kind: "unknown",
  reason: "no naming-map row for this classic submodule",
};

/** Every binding a file takes from the classic package, whatever form it is written in. */
function classicBindings(file: SourceFile, index: SymbolIndex): Binding[] {
  const bindings: Binding[] = [];

  for (const decl of file.getImportDeclarations()) {
    const specifier = decl.getModuleSpecifierValue();
    if (!isClassicSpecifier(specifier)) continue;
    const deep = classicModuleOfSpecifier(specifier);

    // `import aws from '@cdktn/provider-aws'` compiles under `esModuleInterop`, and neither library
    // has a default export to rename it to — so it is reported and held on the classic package,
    // never folded away with the statement its sibling bindings move out of.
    const byDefault = decl.getDefaultImport();
    if (byDefault) {
      bindings.push({
        local: byDefault,
        name: byDefault.getText(),
        detail: {
          kind: "unknown",
          reason:
            "default import of the classic package — there is no default export to move; move it by hand",
        },
        statement: decl,
        clause: byDefault.getText(),
        form: "default",
        typeOnly: decl.isTypeOnly(),
      });
    }

    const star = decl.getNamespaceImport();
    const starModule = deep ? index.byModule.get(deep) : undefined;
    if (star) {
      const detail: BindingKind = starModule
        ? { kind: "namespace", module: starModule }
        : deep
          ? UNKNOWN_MODULE
          : { kind: "root" };
      bindings.push({
        local: star,
        name: star.getText(),
        detail,
        statement: decl,
        clause: `* as ${star.getText()}`,
        form: "star",
        typeOnly: decl.isTypeOnly(),
      });
    }

    for (const spec of decl.getNamedImports()) {
      const imported = spec.getName();
      const local = spec.getAliasNode() ?? spec.getNameNode();
      const module = moduleFor(index, specifier, imported);
      const detail: BindingKind = !module
        ? UNKNOWN_MODULE
        : deep
          ? { kind: "symbol", module, imported }
          : { kind: "namespace", module };
      bindings.push({
        local,
        name: local.getText(),
        detail,
        statement: decl,
        clause: spec.getText(),
        form: "named",
        typeOnly: decl.isTypeOnly() || spec.isTypeOnly(),
      });
    }
  }

  for (const statement of file.getVariableStatements()) {
    const specifier = loadCall(statement)?.specifier;
    if (!specifier || !isClassicSpecifier(specifier)) continue;
    const deep = classicModuleOfSpecifier(specifier);
    const declaration = statement.getDeclarations()[0];
    const nameNode = declaration.getNameNode();

    if (Node.isIdentifier(nameNode)) {
      const module = deep ? index.byModule.get(deep) : undefined;
      const detail: BindingKind = module
        ? { kind: "namespace", module }
        : deep
          ? UNKNOWN_MODULE
          : { kind: "root" };
      bindings.push({
        local: nameNode,
        name: nameNode.getText(),
        detail,
        statement,
        clause: nameNode.getText(),
        form: "star",
        typeOnly: false,
      });
      continue;
    }
    if (!Node.isObjectBindingPattern(nameNode)) continue;
    for (const element of nameNode.getElements()) {
      const imported = (element.getPropertyNameNode() ?? element.getNameNode()).getText();
      const local = element.getNameNode();
      const module = Node.isIdentifier(local) ? moduleFor(index, specifier, imported) : undefined;
      const detail: BindingKind = !module
        ? UNKNOWN_MODULE
        : deep
          ? { kind: "symbol", module, imported }
          : { kind: "namespace", module };
      bindings.push({
        local,
        name: local.getText(),
        detail,
        statement,
        clause: element.getText(),
        form: "named",
        typeOnly: false,
      });
    }
  }

  return bindings;
}

/** One occurrence the rewrite has decided about. */
interface Occurrence {
  readonly start: number;
  readonly end: number;
  readonly group?: string;
  readonly member?: string;
  readonly unmapped?: Unmapped;
}

/** The member reached through a namespace-ish reference: `ns.Member` or, in a type, `ns.Member`. */
function memberOf(ref: Node): { name: string; node: Node } | undefined {
  const parent = ref.getParent();
  if (Node.isPropertyAccessExpression(parent) && parent.getExpression() === ref) {
    return { name: parent.getNameNode().getText(), node: parent };
  }
  if (Node.isQualifiedName(parent) && parent.getLeft() === ref) {
    return { name: parent.getRight().getText(), node: parent };
  }
  return undefined;
}

function resolve(
  binding: Binding,
  ref: Node,
  index: SymbolIndex,
  file: string,
): Occurrence {
  const at = { file, line: lineOf(ref) };

  if (binding.detail.kind === "symbol") {
    // Whether the symbol is known was decided once, before any reference was looked at — see
    // `migrateFile`. Reaching here means it is.
    const target = binding.detail.module.symbols.get(binding.detail.imported)!;
    // Two positions where the identifier also NAMES something: a qualified `s3.AwsBucket` does not
    // parse in an export clause, and in a shorthand it would rename the property as well.
    const parent = ref.getParent();
    const inPlace = Node.isExportSpecifier(parent)
      ? "export specifier — a qualified name is not valid there; re-export it by hand"
      : Node.isShorthandPropertyAssignment(parent)
        ? "shorthand property assignment — renaming it would rename the property too"
        : undefined;
    if (inPlace) {
      return {
        start: ref.getStart(),
        end: ref.getEnd(),
        unmapped: { ...at, symbol: binding.detail.imported, reason: inPlace },
      };
    }
    return { start: ref.getStart(), end: ref.getEnd(), group: target.group, member: target.member };
  }

  if (binding.detail.kind === "namespace") {
    const member = memberOf(ref);
    if (!member) {
      return {
        start: ref.getStart(),
        end: ref.getEnd(),
        unmapped: {
          ...at,
          symbol: binding.name,
          reason: "the classic submodule is used as a value, not as `<submodule>.<Symbol>`",
        },
      };
    }
    const target = binding.detail.module.symbols.get(member.name);
    if (!target) {
      return {
        start: member.node.getStart(),
        end: member.node.getEnd(),
        unmapped: {
          ...at,
          symbol: `${binding.name}.${member.name}`,
          reason: "no naming-map row for this classic export",
        },
      };
    }
    return {
      start: member.node.getStart(),
      end: member.node.getEnd(),
      group: target.group,
      member: target.member,
    };
  }

  // root: `aws.s3Bucket.S3Bucket` — the submodule hop, then the symbol.
  const submodule = memberOf(ref);
  if (!submodule) {
    return {
      start: ref.getStart(),
      end: ref.getEnd(),
      unmapped: {
        ...at,
        symbol: binding.name,
        reason: "the classic barrel is used as a value, not as `<barrel>.<submodule>.<Symbol>`",
      },
    };
  }
  const module = index.bySubmodule.get(submodule.name);
  const symbol = memberOf(submodule.node);
  if (!module || !symbol) {
    return {
      start: submodule.node.getStart(),
      end: submodule.node.getEnd(),
      unmapped: {
        ...at,
        symbol: `${binding.name}.${submodule.name}`,
        reason: module
          ? "the classic submodule is used as a value, not as `<submodule>.<Symbol>`"
          : "no naming-map row for this classic submodule",
      },
    };
  }
  const target = module.symbols.get(symbol.name);
  if (!target) {
    return {
      start: symbol.node.getStart(),
      end: symbol.node.getEnd(),
      unmapped: {
        ...at,
        symbol: `${binding.name}.${submodule.name}.${symbol.name}`,
        reason: "no naming-map row for this classic export",
      },
    };
  }
  // The barrel binding keeps its own name; only the two hops below it move. The replaced range
  // starts at the binding itself, so the text carries it — `aws.s3Bucket.S3Bucket` in one span.
  return {
    start: submodule.node.getStart(),
    end: symbol.node.getEnd(),
    member: `${binding.name}.${target.group}.${target.member}`,
  };
}

/** Rebuilds `import { … } from '@cdktn/provider-aws…'` from the bindings that could not move. */
function residualImport(statement: ImportDeclaration | VariableStatement, kept: Binding[]): string {
  if (Node.isImportDeclaration(statement)) {
    const specifier = statement.getModuleSpecifierValue();
    // An import clause is `default`, `default, * as ns`, `default, { … }`, `* as ns` or `{ … }` —
    // a star and a named list can never appear together, so at most two slots are ever spelled.
    const star = kept.find((b) => b.form === "star");
    const named = kept.filter((b) => b.form === "named");
    const clauses = kept.filter((b) => b.form === "default").map((b) => b.clause);
    if (star) clauses.push(star.clause);
    else if (named.length > 0) clauses.push(`{ ${named.map((b) => b.clause).join(", ")} }`);
    // A declaration-level `type` keyword belongs to the whole clause, so it survives with it.
    const keyword = statement.isTypeOnly() ? "import type" : "import";
    return `${keyword} ${clauses.join(", ")} from '${specifier}';`;
  }
  const { specifier, callee } = loadCall(statement)!;
  const declaration = statement.getDeclarations()[0];
  const nameNode = declaration.getNameNode();
  const binding = Node.isIdentifier(nameNode)
    ? nameNode.getText()
    : `{ ${kept.map((b) => b.clause).join(", ")} }`;
  return `${statement.getDeclarationKind()} ${binding} = ${callee}('${specifier}');`;
}

/** Every name the file's imports and `require` destructurings bind, in source order. */
function importedLocalNames(file: SourceFile): string[] {
  const names: string[] = [];
  for (const decl of file.getImportDeclarations()) {
    const byDefault = decl.getDefaultImport();
    if (byDefault) names.push(byDefault.getText());
    const star = decl.getNamespaceImport();
    if (star) names.push(star.getText());
    for (const spec of decl.getNamedImports()) {
      names.push((spec.getAliasNode() ?? spec.getNameNode()).getText());
    }
  }
  for (const statement of file.getVariableStatements()) {
    if (!loadCall(statement)) continue;
    const nameNode = statement.getDeclarations()[0].getNameNode();
    if (Node.isIdentifier(nameNode)) names.push(nameNode.getText());
    else if (Node.isObjectBindingPattern(nameNode)) {
      for (const element of nameNode.getElements()) names.push(element.getNameNode().getText());
    }
  }
  return names;
}

/**
 * What a rewritten file must never contain, whatever the edits did: text that does not parse, or
 * two import bindings of one name (TS2300). Both are shapes a composed text edit can produce and
 * neither is a wrong NAME, so no per-case assertion about spellings can catch them.
 */
export function rewriteDefects(text: string): string[] {
  const project = new Project({ useInMemoryFileSystem: true, compilerOptions: { noLib: true } });
  const file = project.createSourceFile("rewritten.ts", text);
  const defects = project
    .getProgram()
    .getSyntacticDiagnostics(file)
    .map((d) => {
      const message = d.getMessageText();
      return `does not parse at line ${d.getLineNumber() ?? 0}: ${
        typeof message === "string" ? message : message.getMessageText()
      }`;
    });
  const seen = new Set<string>();
  for (const name of importedLocalNames(file)) {
    if (seen.has(name)) defects.push(`the imports bind \`${name}\` more than once`);
    seen.add(name);
  }
  return defects;
}

/**
 * The structural backstop, run on every file the rewrite changes before anything is diffed or
 * written. A defect the input already had is the consumer's, not ours — only one this run
 * INTRODUCED stops it, and it stops it by throwing rather than by writing.
 */
export function assertRewriteSound(relative: string, before: string, after: string): void {
  if (after === before) return;
  const had = rewriteDefects(before);
  const introduced = rewriteDefects(after).filter((d) => !had.includes(d));
  if (introduced.length === 0) return;
  throw new Error(
    `${relative}: the rewrite produced a file that would not compile — ${introduced.join("; ")}. ` +
      "Nothing was written. This is a bug in @cdktn/aws-migrate; please report it with the file.",
  );
}

/** Is this literal in a module-specifier position — an import/export clause, `require`, `import()`? */
function isModuleSpecifier(literal: Node): boolean {
  const parent = literal.getParent();
  if (!parent) return false;
  if (Node.isImportDeclaration(parent) || Node.isExportDeclaration(parent)) {
    return parent.getModuleSpecifier() === literal;
  }
  if (Node.isExternalModuleReference(parent)) return true;
  if (Node.isLiteralTypeNode(parent)) return Node.isImportTypeNode(parent.getParent());
  if (Node.isCallExpression(parent)) {
    const callee = parent.getExpression();
    return callee.getText() === "require" || callee.getKind() === SyntaxKind.ImportKeyword;
  }
  return false;
}

/** How the source reaches a classic specifier that is not in a module-specifier position. */
function specifierForm(literal: Node): string {
  const parent = literal.getParent();
  if (parent && Node.isCallExpression(parent) && parent.getArguments().some((a) => a === literal)) {
    return `${parent.getExpression().getText()}(…)`;
  }
  return "a string literal";
}

/**
 * The backstop: EVERY classic specifier this run did not decide about, whatever position it is
 * written in — an import form the tool does not model (`export … from`, `import x = require(…)`,
 * a bare `import('…')`), a subpath it cannot resolve, a loader it does not know (`require.resolve`,
 * `jest.requireActual`), or a bare string somewhere else entirely.
 *
 * It scans every string literal rather than the positions the tool recognises, because a form the
 * recognizer misses is exactly the one this exists to catch. Reporting is not a nicety:
 * `package.json` drops the classic dependency, so a specifier that is passed over silently leaves
 * the project loading a package it no longer depends on, at exit 0.
 */
function unhandledClassicImports(file: SourceFile, handled: ReadonlySet<Node>, relative: string): Unmapped[] {
  const findings: Unmapped[] = [];
  for (const literal of file.getDescendantsOfKind(SyntaxKind.StringLiteral)) {
    if (!isClassicSpecifier(literal.getLiteralValue())) continue;
    let owner: Node | undefined = literal;
    while (owner && !handled.has(owner)) owner = owner.getParent();
    if (owner) continue;
    findings.push({
      file: relative,
      line: lineOf(literal),
      symbol: literal.getLiteralValue(),
      reason: isModuleSpecifier(literal)
        ? "classic import form the tool does not rewrite — move it by hand"
        : `classic specifier left in place: ${specifierForm(literal)} — move it by hand`,
    });
  }
  return findings;
}

export function migrateFile(file: SourceFile, index: SymbolIndex, relative: string): FileResult {
  const before = file.getFullText();
  const bindings = classicBindings(file, index);
  // The statements this run decides about; anything else naming the classic package is the backstop's.
  const statements = new Set(bindings.map((b) => b.statement));
  if (bindings.length === 0) {
    const unhandled = unhandledClassicImports(file, statements, relative);
    return { file: relative, before, after: before, rewrites: 0, unmapped: unhandled };
  }

  const unmapped: Unmapped[] = [];
  const keptByStatement = new Map<ImportDeclaration | VariableStatement, Binding[]>();
  // Decide every binding first, emit second: which names a group barrel may take depends on which
  // bindings this run actually REMOVES, and that is not known until the last one has been decided.
  const moving: { binding: Binding; occurrences: readonly Occurrence[] }[] = [];

  // A binding is HELD once however many findings it collects: one reference the map cannot place is
  // enough to keep it, and a second would otherwise spell it twice in the residual clause list.
  const keep = (binding: Binding, finding: Unmapped) => {
    unmapped.push(finding);
    const kept = keptByStatement.get(binding.statement) ?? [];
    if (!kept.includes(binding)) kept.push(binding);
    keptByStatement.set(binding.statement, kept);
  };

  for (const binding of bindings) {
    if (binding.detail.kind === "unknown") {
      keep(binding, {
        file: relative,
        line: lineOf(binding.local),
        symbol: binding.name,
        reason: binding.detail.reason,
      });
      continue;
    }

    // A named import of a symbol the map does not know is unmapped whether or not the file ever
    // uses it — decided here, once, rather than once per reference (and never silently dropped
    // because the import happens to be unused).
    if (
      binding.detail.kind === "symbol" &&
      !binding.detail.module.symbols.has(binding.detail.imported)
    ) {
      keep(binding, {
        file: relative,
        line: lineOf(binding.local),
        symbol: `${binding.detail.module.module}.${binding.detail.imported}`,
        reason: "no naming-map row for this classic export",
      });
      continue;
    }

    const refs = binding.local
      .asKindOrThrow(SyntaxKind.Identifier)
      .findReferencesAsNodes()
      .filter((ref) => ref.getSourceFile() === file)
      // The binding's own declaration is a reference to itself; the statement is rewritten whole.
      .filter(
        (ref) =>
          ref.getStart() >= binding.statement.getEnd() ||
          ref.getStart() < binding.statement.getStart(),
      );

    const occurrences = refs.map((ref) => resolve(binding, ref, index, relative));
    const failed = occurrences.filter((o) => o.unmapped);
    if (failed.length > 0) {
      for (const o of failed) keep(binding, o.unmapped!);
      continue;
    }
    moving.push({ binding, occurrences });
  }

  // Retargeting a root binding moves the package string the WHOLE statement hangs off, so a
  // statement that keeps any binding cannot be retargeted: `import d, * as aws from '…'` would
  // resolve `d` against a package that never exported it.
  for (let i = moving.length - 1; i >= 0; i--) {
    const { binding } = moving[i];
    if (binding.detail.kind !== "root" || !keptByStatement.has(binding.statement)) continue;
    moving.splice(i, 1);
    keep(binding, {
      file: relative,
      line: lineOf(binding.local),
      symbol: binding.name,
      reason: "another binding on this classic import could not move, so the package cannot be retargeted",
    });
  }

  const edits: Edit[] = [];
  const groupsUsed = new Set<string>();
  const retargetedRoots: Binding[] = [];
  // The merged group import is `import type` only when EVERY binding folded into it was type-only.
  // Mixed contributors make it a value import: erasing a binding the file uses at runtime is worse
  // than adding a `type` keyword the file did not ask for.
  let groupImportIsTypeOnly = true;
  let rewrites = 0;

  const taken = declaredNames(file);
  // Only a binding this run REMOVES frees its name for a group barrel member: a `* as aws` binding
  // keeps its own spelling (only its package moves), and one held back in a residual classic import
  // is still bound in the file.
  for (const { binding } of moving) if (binding.detail.kind !== "root") taken.delete(binding.name);
  const alias = new Map<string, string>();
  const aliasOf = (group: string): string => {
    let name = alias.get(group);
    if (name === undefined) {
      name = aliasFor(group, taken);
      taken.add(name);
      alias.set(group, name);
    }
    return name;
  };

  for (const { binding, occurrences } of moving) {
    for (const o of occurrences) {
      // A root binding rewrites the whole `<barrel>.<submodule>.<Symbol>` span and needs no group
      // import; everything else lands under the group barrel member this file will import.
      const text = binding.detail.kind === "root" ? o.member! : `${aliasOf(o.group!)}.${o.member}`;
      edits.push({ start: o.start, end: o.end, text });
      if (o.group) {
        groupsUsed.add(o.group);
        groupImportIsTypeOnly &&= binding.typeOnly;
      }
      rewrites++;
    }
    if (binding.detail.kind === "root") retargetedRoots.push(binding);
  }

  // Rewrite the statements: a root binding only changes package, everything else is replaced by
  // the merged group import (plus a residual classic import for whatever could not move).
  let insertAt: number | undefined;
  for (const statement of [...statements].sort((a, b) => a.getStart() - b.getStart())) {
    const kept = keptByStatement.get(statement) ?? [];
    const root = retargetedRoots.find((b) => b.statement === statement);
    if (root) {
      // `import * as aws from '@cdktn/provider-aws'` keeps the consumer's own spelling; only the
      // package moves, because `aws.s3.AwsBucket` is a perfectly good call site on the new library.
      const literal = Node.isImportDeclaration(statement)
        ? statement.getModuleSpecifier()
        : statement.getFirstDescendantByKindOrThrow(SyntaxKind.StringLiteral);
      edits.push({
        start: literal.getStart() + 1,
        end: literal.getEnd() - 1,
        text: TARGET_PACKAGE,
      });
      continue;
    }
    const span = wholeLine(before, statement.getStart(), statement.getEnd());
    insertAt ??= span.start;
    edits.push({
      start: span.start,
      end: span.end,
      text: kept.length > 0 ? `${residualImport(statement, kept)}\n` : "",
    });
  }

  if (groupsUsed.size > 0 && insertAt !== undefined) {
    const members = [...groupsUsed]
      .sort()
      .map((g) => (aliasOf(g) === g ? g : `${g} as ${aliasOf(g)}`))
      .join(", ");
    const keyword = groupImportIsTypeOnly ? "import type" : "import";
    edits.push({
      start: insertAt,
      end: insertAt,
      text: `${keyword} { ${members} } from '${TARGET_PACKAGE}';\n`,
    });
  }

  unmapped.push(...unhandledClassicImports(file, statements, relative));
  const after = applyEdits(before, edits);
  assertRewriteSound(relative, before, after);
  return { file: relative, before, after, rewrites, unmapped };
}

export interface MigrateOptions {
  readonly project: Project;
  readonly index: SymbolIndex;
  /** absolute -> repo/project-relative, for the diff and the report */
  readonly relative: (absolute: string) => string;
}

export function migrateProject(options: MigrateOptions): FileResult[] {
  return options.project
    .getSourceFiles()
    .filter((f) => !f.isDeclarationFile() && !f.getFilePath().includes("/node_modules/"))
    .map((f) => migrateFile(f, options.index, options.relative(f.getFilePath())))
    .filter((r) => r.before !== r.after || r.unmapped.length > 0)
    .sort((a, b) => (a.file < b.file ? -1 : 1));
}
