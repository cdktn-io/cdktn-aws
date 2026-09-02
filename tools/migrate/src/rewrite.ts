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

/** The `require('…')` call a variable statement is initialised from, if that is what it is. */
function requiredSpecifier(statement: VariableStatement): string | undefined {
  const declarations = statement.getDeclarations();
  if (declarations.length !== 1) return undefined;
  const initializer = declarations[0].getInitializer();
  if (!initializer || !Node.isCallExpression(initializer)) return undefined;
  if (initializer.getExpression().getText() !== "require") return undefined;
  const [arg] = initializer.getArguments();
  return arg && Node.isStringLiteral(arg) ? arg.getLiteralValue() : undefined;
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
      });
    }
  }

  for (const statement of file.getVariableStatements()) {
    const specifier = requiredSpecifier(statement);
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
    // Two positions where the identifier also NAMES something: a qualified `s3.TfBucket` does not
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
    return `import ${clauses.join(", ")} from '${specifier}';`;
  }
  const specifier = requiredSpecifier(statement)!;
  const declaration = statement.getDeclarations()[0];
  const nameNode = declaration.getNameNode();
  const binding = Node.isIdentifier(nameNode)
    ? nameNode.getText()
    : `{ ${kept.map((b) => b.clause).join(", ")} }`;
  return `${statement.getDeclarationKind()} ${binding} = require('${specifier}');`;
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

/**
 * The backstop: every classic specifier this run did not decide about — an import form the tool
 * does not model (`export … from`, `import x = require(…)`, `import('…')`) or a subpath it cannot
 * resolve. Reporting them is not a nicety: `package.json` drops the classic dependency, so a form
 * that is passed over silently leaves the project importing a package it no longer depends on.
 */
function unhandledClassicImports(file: SourceFile, handled: ReadonlySet<Node>, relative: string): Unmapped[] {
  const findings: Unmapped[] = [];
  for (const literal of file.getDescendantsOfKind(SyntaxKind.StringLiteral)) {
    if (!isClassicSpecifier(literal.getLiteralValue()) || !isModuleSpecifier(literal)) continue;
    let owner: Node | undefined = literal;
    while (owner && !handled.has(owner)) owner = owner.getParent();
    if (owner) continue;
    findings.push({
      file: relative,
      line: lineOf(literal),
      symbol: literal.getLiteralValue(),
      reason: "classic import form the tool does not rewrite — move it by hand",
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

  const keep = (binding: Binding, finding: Unmapped) => {
    unmapped.push(finding);
    const kept = keptByStatement.get(binding.statement) ?? [];
    kept.push(binding);
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
  let rewrites = 0;

  const taken = declaredNames(file);
  // A binding this run removes frees its name for a group barrel member; a `* as aws` binding is
  // kept (only its package moves), so its name stays spoken for.
  for (const binding of bindings) if (binding.detail.kind !== "root") taken.delete(binding.name);
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
      if (o.group) groupsUsed.add(o.group);
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
      // package moves, because `aws.s3.TfBucket` is a perfectly good call site on the new library.
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
    edits.push({ start: insertAt, end: insertAt, text: `import { ${members} } from '${TARGET_PACKAGE}';\n` });
  }

  unmapped.push(...unhandledClassicImports(file, statements, relative));
  return { file: relative, before, after: applyEdits(before, edits), rewrites, unmapped };
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
