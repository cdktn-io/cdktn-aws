#!/usr/bin/env python3
# Copyright (c) cdktn-io
# SPDX-License-Identifier: MPL-2.0
"""M2 metric (b): Python import cost, one FRESH interpreter per sample.

Usage:
    python scripts/bench-py-import.py <module> [--touch submodule[,submodule...]] [--all] [--runs 5]

Prints one JSON line: median/min/max wall ms and the number of loaded sys.modules.
`--touch` additionally resolves the named submodules through the package's lazy ``__getattr__``,
which is the realistic case (a top-level import alone proves only that the kernel started).
`--all` walks every submodule — the "what an eager (unlazified) package would cost" upper bound.
"""
import json
import subprocess
import sys

PROBE = r'''
import time, sys, importlib, json
mod = {mod!r}
touch = {touch!r}
walk_all = {walk_all!r}
t0 = time.perf_counter()
m = importlib.import_module(mod)
if walk_all:
    # `publication.publish()` strips private names from a jsii module, so the generated
    # `_SUBMODULES` set is not reachable at runtime — walk the package directory instead.
    import pkgutil
    for _f, name, _p in sorted(pkgutil.iter_modules(m.__path__)):
        if not name.startswith("_"):
            getattr(m, name)
else:
    for name in touch:
        getattr(m, name)
ms = (time.perf_counter() - t0) * 1000
print(json.dumps({{"ms": ms, "modules": len(sys.modules)}}))
'''


def main() -> int:
    args = sys.argv[1:]
    mod = args[0]
    touch = []
    if "--touch" in args:
        touch = args[args.index("--touch") + 1].split(",")
    walk_all = "--all" in args
    runs = int(args[args.index("--runs") + 1]) if "--runs" in args else 5

    code = PROBE.format(mod=mod, touch=touch, walk_all=walk_all)
    samples = []
    for i in range(runs + 1):
        r = subprocess.run([sys.executable, "-c", code], capture_output=True, text=True)
        if r.returncode != 0:
            print(json.dumps({"module": mod, "error": r.stderr[-400:]}))
            return 1
        if i:  # discard the warm-up
            samples.append(json.loads(r.stdout.strip().splitlines()[-1]))

    ms = sorted(s["ms"] for s in samples)
    print(
        json.dumps(
            {
                "module": mod,
                "touch": touch,
                "all": walk_all,
                "runs": len(ms),
                "medianMs": round(ms[len(ms) // 2], 1),
                "minMs": round(ms[0], 1),
                "maxMs": round(ms[-1], 1),
                "sysModules": samples[0]["modules"],
            }
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
