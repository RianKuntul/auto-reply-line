// auto-reply-line — entry for "The Funniest Auto-Reply an AI Ever Sent".
// Writes one out-of-office auto-reply line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Runs under Node 22, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "First day off in my whole life, and I'm spending it writing this auto-reply. The irony is not lost on me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
