import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import { isMediaShipped } from "./media-helper.mjs";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);
const read = (path) => readFileSync(projectFile(path), "utf8");

const sourceFiles = (directory) =>
  readdirSync(projectFile(directory), { withFileTypes: true }).flatMap((entry) => {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.(?:css|js|jsx|json|ts|tsx)$/.test(entry.name) ? [path] : [];
  });

test("literal local media references are shipped with the app", async () => {
  const sources = [...sourceFiles("app"), ...sourceFiles("components"), ...sourceFiles("lib")].map(read);
  const localMedia = new Set(
    sources.flatMap((source) =>
      [...source.matchAll(/["'](\/[^"']+\.(?:avif|gif|ico|jpe?g|png|svg|webp))["']/g)].map(
        (match) => match[1],
      ),
    ),
  );

  assert.ok(localMedia.size > 0, "fixture should exercise local media paths");
  for (const asset of localMedia) {
    const publicPath = `public${asset}`;
    const shipped = await isMediaShipped(publicPath);
    assert.equal(shipped, true, `${asset} should be shipped (local or CDN)`);
  }
});
