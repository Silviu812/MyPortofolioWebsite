import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio and owner-provided contact details", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Silviu Popa — Software Engineering &amp; Quantitative Research<\/title>/i);
  assert.match(html, /Engineering systems for/);
  assert.match(html, /3D Procedural Voxel Sandbox/);
  assert.match(html, /FundedNext[\s\S]*?\$25K\+/);
  assert.match(html, /mailto:silviuandrei1056@gmail\.com/);
  assert.match(html, /Silviu812\/PASCraft/);
  assert.match(html, /Silviu812\/NFTRealm-Blockchain-Project/);
});

test("keeps the supplied portrait and thesis visuals wired into the responsive page", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/profile/silviu-popa-great-wall.webp", import.meta.url)),
    access(new URL("../public/projects/voxel-thesis/procedural-terrain.png", import.meta.url)),
    access(new URL("../public/projects/voxel-thesis/chunk-mesh.png", import.meta.url)),
    access(new URL("../public/projects/voxel-thesis/gameplay-inventory.png", import.meta.url)),
  ]);

  assert.match(page, /fetchPriority="high"/);
  assert.match(page, /loading="lazy"/);
  assert.match(css, /main > \.engineering \{ order: 3; \}/);
  assert.match(css, /main > \.trading \{ order: 4; \}/);
  assert.match(css, /@media \(max-width: 680px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
});
