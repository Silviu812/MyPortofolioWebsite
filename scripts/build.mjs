import { spawnSync } from "node:child_process";

const target = process.env.CF_PAGES === "1" ? "build:pages" : "build:sites";
const npmCli = process.env.npm_execpath;

if (!npmCli) {
  throw new Error("npm_execpath is unavailable; run this script through npm run build.");
}

console.log(`Detected ${process.env.CF_PAGES === "1" ? "Cloudflare Pages" : "Sites/Local"} environment.`);

const result = spawnSync(process.execPath, [npmCli, "run", target], {
  env: process.env,
  stdio: "inherit",
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
