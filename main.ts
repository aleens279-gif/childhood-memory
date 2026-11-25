// Make the AI Judge Feel Nostalgic — one line to /output/entry.txt
// 182 chars of a 280 max; single line, no trailing newline. (rev 2)
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Summer smelled like the corner",
  "store's freezer — we'd press our",
  "foreheads to the glass, count our",
  "coins twice, and walk home licking",
  "a popsicle that melted faster than",
  "the afternoon.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
