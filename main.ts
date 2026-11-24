// Seventeen Syllables of Debugging — one haiku, 5-7-5, about debugging.
// The program writes the haiku to /output/entry.txt and nothing else.
// Three lines, one small betrayal: the tool built to watch the bug becomes the bug's hello.
// The stray print survives the deploy: what was meant for one tired eye now waves at every user.
// A debug print left in the code ships to production and greets the world.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU =
  "One print statement left,\nshipped to production last night,\nhello, says the log.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
