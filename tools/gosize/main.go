// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0

// Command gosize reproduces, for every module directory named on the command line, the exact size
// check `go get` / `go mod download` performs through golang.org/x/mod/zip — the code path vendored
// into cmd/go that produces
//
//	module source tree too large (max size is 524288000 bytes)
//
// This is the M3 size gate. It is the check, not an estimate of it: the cap applies per MODULE, to
// the files zip.CheckDir calls valid, and CheckDir is the same function the toolchain runs. In
// particular it excludes nested go.mod subtrees, vendor/, and files it deems invalid — which is why
// a naive `du` over the repo answers a different question.
//
// Each argument must be a module root (a directory containing go.mod). Output is one JSON object
// per line, plus a final summary object; exit status is 1 if any module is over the cap.
package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	modzip "golang.org/x/mod/zip"
)

// MaxZipFile is x/mod/zip's cap on a module's source tree: 500 MiB.
const MaxZipFile = 500 << 20 // 524288000

type record struct {
	Dir       string `json:"dir"`
	Module    string `json:"module"`
	Valid     int    `json:"validFileCount"`
	Omitted   int    `json:"omittedCount"`
	Invalid   int    `json:"invalidCount"`
	Bytes     int64  `json:"totalValidBytes"`
	PctOfCap  string `json:"pctOfCap"`
	SizeError string `json:"sizeError,omitempty"`
	CheckErr  string `json:"checkDirError,omitempty"`
	Pass      bool   `json:"pass"`
}

func main() {
	if len(os.Args) < 2 {
		fmt.Fprintln(os.Stderr, "usage: gosize <module-dir> [module-dir ...]")
		os.Exit(2)
	}
	enc := json.NewEncoder(os.Stdout)
	var total int64
	var totalFiles int
	failures := 0

	for _, dir := range os.Args[1:] {
		r := record{Dir: dir}
		cf, err := modzip.CheckDir(dir)
		if err != nil {
			r.CheckErr = err.Error()
		}
		for _, p := range cf.Valid {
			info, serr := os.Lstat(p)
			if serr != nil {
				continue
			}
			r.Bytes += info.Size()
		}
		r.Valid, r.Omitted, r.Invalid = len(cf.Valid), len(cf.Omitted), len(cf.Invalid)
		if cf.SizeError != nil {
			r.SizeError = cf.SizeError.Error()
		}
		r.Module = moduleName(dir)
		r.PctOfCap = fmt.Sprintf("%.4f", float64(r.Bytes)*100/float64(MaxZipFile))
		// The gate is the cap and CheckDir's own size verdict. A CheckDir error that is not a size
		// error (an unreadable file, say) is reported but does not by itself fail the size gate —
		// it fails the build long before this.
		r.Pass = r.Bytes <= MaxZipFile && cf.SizeError == nil
		if !r.Pass {
			failures++
		}
		total += r.Bytes
		totalFiles += r.Valid
		if err := enc.Encode(r); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(2)
		}
	}

	_ = enc.Encode(map[string]any{
		"summary":         true,
		"modules":         len(os.Args) - 1,
		"totalValidBytes": total,
		"validFileCount":  totalFiles,
		"limitBytes":      MaxZipFile,
		"overCap":         failures,
	})
	if failures > 0 {
		os.Exit(1)
	}
}

// moduleName reads the `module` line of the directory's go.mod, which is its first non-blank
// directive by definition.
func moduleName(dir string) string {
	b, err := os.ReadFile(filepath.Join(dir, "go.mod"))
	if err != nil {
		return ""
	}
	var name string
	_, _ = fmt.Sscanf(string(b), "module %s", &name)
	return name
}
