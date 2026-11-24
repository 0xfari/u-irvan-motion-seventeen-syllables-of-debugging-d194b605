// Seventeen Syllables of Debugging — a haiku, 5-7-5, about debugging.
// One leftover print statement rides the deploy to production and says hello.
// The program writes the haiku to /output/entry.txt and nothing else.
// The print statement stayed past its shift and now greets strangers in production.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const HAIKU =
  "One print statement left,\nshipped to production last night,\nhello, says the log.\n";

// Five beats, seven beats, five: the leftover log line keeps the rhythm of the mistake.
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
