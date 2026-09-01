// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Read a gzipped tar's entry names and its unpacked byte total, in-process.
 *
 * Why not `tar`: every way of asking the system `tar` for this is a subprocess, and the version of
 * this that shipped in the first draft of `scripts/check-js-tarball.mjs` built the argument with
 * `/bin/sh -c "tar -tzf " + JSON.stringify(tgz)`. JSON quoting is not shell quoting — `"` survives
 * command substitution — so a tarball whose path contained `$(...)` or backticks executed it, in a
 * script that runs in the release pipeline. `spawnSync("tar", [...])` fixes the injection but not
 * the second half: counting unpacked bytes needed `tar -xzO | wc -c`, i.e. a shell pipeline, and
 * buffering 550 MB of extracted content through a pipe to count it is absurd anyway.
 *
 * So: one streaming gunzip, one pass over the 512-byte headers, both answers, no child process and
 * no filename ever interpreted by anything. The header walk is the POSIX ustar layout plus the two
 * long-name extensions any real tar emits (GNU `L`, pax `x`); the checksum is verified, so a file
 * that is not a tar fails loudly instead of yielding a plausible-looking empty listing.
 *
 * `bytes` counts regular-file content only — exactly what `tar -xzO | wc -c` used to report.
 */
import { createReadStream } from "node:fs";
import { createGunzip } from "node:zlib";

const BLOCK = 512;

/** A NUL-terminated field. */
function cstr(buf) {
  const end = buf.indexOf(0);
  return (end === -1 ? buf : buf.subarray(0, end)).toString("utf8");
}

/** A tar numeric field: octal ASCII, or base-256 when the high bit of the first byte is set. */
function numeric(buf) {
  if (buf.length > 0 && (buf[0] & 0x80) !== 0) {
    let n = buf[0] & 0x7f;
    for (let i = 1; i < buf.length; i++) n = n * 256 + buf[i];
    return n;
  }
  const text = cstr(buf).trim();
  if (text === "") return 0;
  const n = Number.parseInt(text, 8);
  if (!Number.isFinite(n) || n < 0) throw new Error(`corrupt tar: bad numeric field ${JSON.stringify(text)}`);
  return n;
}

/** The stored checksum, computed with the checksum field itself read as eight spaces. */
function checksumOk(header) {
  const stored = numeric(header.subarray(148, 156));
  let signed = 0;
  let unsigned = 0;
  for (let i = 0; i < BLOCK; i++) {
    const b = i >= 148 && i < 156 ? 0x20 : header[i];
    unsigned += b;
    signed += b > 127 ? b - 256 : b;
  }
  return stored === unsigned || stored === signed;
}

/** pax extended header records: `<len> <key>=<value>\n`. Only `path` matters here. */
function paxPath(buf) {
  let at = 0;
  while (at < buf.length) {
    const sp = buf.indexOf(0x20, at);
    if (sp === -1) break;
    const len = Number.parseInt(buf.subarray(at, sp).toString("latin1"), 10);
    if (!Number.isFinite(len) || len <= 0 || at + len > buf.length) break;
    const record = buf.subarray(sp + 1, at + len).toString("utf8").replace(/\n$/, "");
    const eq = record.indexOf("=");
    if (eq > 0 && record.slice(0, eq) === "path") return record.slice(eq + 1);
    at += len;
  }
  return undefined;
}

/**
 * @param {string} tgz path to a .tar.gz
 * @returns {Promise<{ entries: string[], bytes: number }>} entry names (directories keep their
 *   trailing `/`, as `tar -tzf` prints them) and the total size of the regular files
 */
export async function listTarball(tgz) {
  /** @type {string[]} */
  const entries = [];
  let bytes = 0;

  let pending = Buffer.alloc(0);
  let inData = false;
  let dataLeft = 0;
  let padLeft = 0;
  /** @type {Buffer[] | null} — set only for the two metadata entry types, whose data we keep. */
  let sink = null;
  let current = null;
  /** Long names arrive as their own entry, immediately before the entry they rename. */
  let gnuLongName;
  let paxName;

  function finishEntry() {
    const type = current.type;
    if (type === "L") {
      gnuLongName = cstr(Buffer.concat(sink));
    } else if (type === "x") {
      paxName = paxPath(Buffer.concat(sink));
    } else if (type !== "g") {
      const name = paxName ?? gnuLongName ?? current.name;
      gnuLongName = undefined;
      paxName = undefined;
      if (type === "5") {
        entries.push(name.endsWith("/") ? name : `${name}/`);
      } else {
        entries.push(name);
        // '0' and '\0' are a regular file; '7' is the contiguous-file variant. Everything else
        // (link, symlink, device, fifo) has no content to unpack.
        if (type === "0" || type === "\0" || type === "7") bytes += current.size;
      }
    }
    sink = null;
    current = null;
  }

  function feed(chunk) {
    pending = pending.length === 0 ? chunk : Buffer.concat([pending, chunk]);
    for (;;) {
      if (inData) {
        if (dataLeft > 0) {
          if (pending.length === 0) return;
          const take = Math.min(dataLeft, pending.length);
          if (sink) sink.push(Buffer.from(pending.subarray(0, take)));
          pending = pending.subarray(take);
          dataLeft -= take;
          continue;
        }
        if (padLeft > 0) {
          if (pending.length === 0) return;
          const take = Math.min(padLeft, pending.length);
          pending = pending.subarray(take);
          padLeft -= take;
          continue;
        }
        inData = false;
        finishEntry();
        continue;
      }
      if (pending.length < BLOCK) return;
      const header = pending.subarray(0, BLOCK);
      pending = pending.subarray(BLOCK);
      // Two of these end the archive; trailing garbage after them is not our problem.
      if (header.every((b) => b === 0)) continue;
      if (!checksumOk(header)) throw new Error("corrupt tar: header checksum mismatch (is this really a tarball?)");
      const name = cstr(header.subarray(0, 100));
      const prefix = header.subarray(257, 262).toString("latin1") === "ustar" ? cstr(header.subarray(345, 500)) : "";
      const type = String.fromCharCode(header[156]);
      const size = numeric(header.subarray(124, 136));
      current = { name: prefix ? `${prefix}/${name}` : name, type, size };
      dataLeft = size;
      padLeft = (BLOCK - (size % BLOCK)) % BLOCK;
      sink = type === "L" || type === "x" || type === "g" ? [] : null;
      inData = true;
    }
  }

  await new Promise((resolve, reject) => {
    const gunzip = createGunzip();
    const source = createReadStream(tgz);
    source.on("error", reject);
    gunzip.on("error", reject);
    gunzip.on("data", (chunk) => {
      try {
        feed(chunk);
      } catch (err) {
        gunzip.destroy();
        reject(err);
      }
    });
    gunzip.on("end", resolve);
    source.pipe(gunzip);
  });

  return { entries, bytes };
}
