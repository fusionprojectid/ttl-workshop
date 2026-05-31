import { readdirSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const run = (command, args) => {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: false
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
};

const findPhp = () => {
  const candidates = [process.env.PHP_BINARY, "php", "php.exe"].filter(Boolean);
  const configuredPhpRoot = process.env.PHP_ROOT || process.env.LARAGON_PHP_ROOT;

  if (configuredPhpRoot && existsSync(configuredPhpRoot)) {
    const configuredCandidates = readdirSync(configuredPhpRoot)
      .filter((name) => name.startsWith("php-"))
      .sort()
      .reverse()
      .map((name) => path.join(configuredPhpRoot, name, "php.exe"));
    candidates.unshift(...configuredCandidates);
  }

  for (const candidate of candidates) {
    const check = spawnSync(candidate, ["-r", "echo function_exists('imagewebp') ? 'ok' : 'no';"], {
      cwd: root,
      encoding: "utf8",
      shell: false
    });
    if (check.status === 0 && check.stdout.trim() === "ok") {
      return candidate;
    }
  }

  throw new Error("PHP dengan GD WebP tidak ditemukan. Atur PHP_BINARY atau LARAGON_PHP_ROOT jika PHP belum ada di PATH.");
};

const mode = process.argv[2] || "--all";

if (mode !== "--images-only") {
  run(process.execPath, ["tools/tinycss.mjs"]);
}

if (mode !== "--css-only") {
  run(findPhp(), ["tools/images-to-webp.php", "--force"]);
}
