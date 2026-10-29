import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

test("IndexNow key is a 32-char hex key hosted at /{key}.txt", () => {
  const source = read("src/lib/indexnow-key.ts");
  const key = source.match(/INDEXNOW_KEY = "([a-f0-9]{32})"/)?.[1];
  assert.ok(key);
  assert.equal(read(`public/${key}.txt`).trim(), key);
  assert.match(source, /wherewindsmeet\.org/);
});

test("indexnow script posts sitemap URLs to the IndexNow API", () => {
  const script = read("scripts/indexnow.mjs");
  const pkg = JSON.parse(read("package.json"));

  assert.equal(pkg.scripts.indexnow, "node scripts/indexnow.mjs");
  assert.match(script, /SITE_ORIGIN \|\| "https:\/\/wherewindsmeet\.org"/);
  assert.match(script, /https:\/\/api\.indexnow\.org\/indexnow/);
  assert.match(script, /\/sitemap\.xml/);
  assert.match(script, /src\/lib\/indexnow-key\.ts/);
  assert.match(script, /keyLocation/);
});

test("production deploy submits IndexNow after a successful deploy and treats failure as non-fatal", () => {
  const workflow = read(".github/workflows/deploy.yml");
  const deployAt = workflow.indexOf("npm run cf:deploy:artifact");
  const indexnowAt = workflow.indexOf("npm run indexnow");

  assert.ok(deployAt > 0);
  assert.ok(indexnowAt > deployAt);
  const step = workflow.slice(workflow.lastIndexOf("- name:", indexnowAt), indexnowAt);
  assert.match(step, /continue-on-error:\s*true/);
  assert.match(step, /github\.event_name != 'pull_request'/);
  assert.match(step, /SITE_ORIGIN: https:\/\/wherewindsmeet\.org/);
});
