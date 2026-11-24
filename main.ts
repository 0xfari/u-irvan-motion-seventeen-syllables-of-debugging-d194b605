// Debugging haiku, seventeen syllables: a print statement that shipped.
// Three lines, five seven five, carried by a tiny program to the output file.
// The log line outlived its debug session and now waves at strangers.
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const verse = [
  "One print statement left,",
  "shipped to production last night,",
  "hello, says the log.",
];

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}
for (const name of readdirSync(targetDir)) {
  rmSync(resolve(targetDir, name), { recursive: true, force: true });
}

// Seventeen syllables, one stray print, and production says good morning.
writeFileSync(resolve(targetDir, "entry.txt"), verse.join("\n") + "\n", "utf8");
