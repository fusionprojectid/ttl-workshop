import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceFile = path.join(root, "assets", "css", "style.css");
const outputFile = path.join(root, "assets", "css", "style.min.css");

const tinycss = (css) => css
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{}:;,>~+])\s*/g, "$1")
  .replace(/;}/g, "}")
  .replace(/\s*(\(|\))\s*/g, "$1")
  .replace(/,\s+/g, ",")
  .trim();

const source = await readFile(sourceFile, "utf8");
const minified = tinycss(source);
await writeFile(outputFile, `${minified}\n`, "utf8");

const before = (await stat(sourceFile)).size;
const after = (await stat(outputFile)).size;
const saving = before > 0 ? Math.round((1 - after / before) * 100) : 0;

console.log(`tinycss: ${path.relative(root, sourceFile)} -> ${path.relative(root, outputFile)} (${before} B -> ${after} B, hemat ${saving}%)`);
