import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

test("Cloudflare deploy targets a full Next.js Worker instead of a static out directory", () => {
  const nextConfig = read("next.config.ts");
  const wrangler = read("wrangler.toml");
  const worker = read("worker.mjs");
  const openNextConfig = read("open-next.config.ts");
  const headers = read("public/_headers");
  const packageJson = JSON.parse(read("package.json"));

  assert.doesNotMatch(nextConfig, /output:\s*["']export["']/);
  assert.match(nextConfig, /localeFallbackRedirects/);
  assert.match(nextConfig, /async\s+redirects\s*\(/);
  assert.match(wrangler, /main\s*=\s*["']worker\.mjs["']/);
  assert.match(worker, /from\s+["']\.\/\.open-next\/worker\.js["']/);
  assert.match(worker, /LEGACY_HOST\s*=\s*["']www\.wherewindsmeet\.org["']/);
  assert.match(worker, /CANONICAL_HOST\s*=\s*["']wherewindsmeet\.org["']/);
  assert.match(worker, /url\.hostname\s*===\s*LEGACY_HOST/);
  assert.match(worker, /url\.hostname\s*=\s*CANONICAL_HOST/);
  assert.match(worker, /Response\.redirect\([^,]+,\s*301\)/);
  assert.match(wrangler, /directory\s*=\s*["']\.open-next\/assets["']/);
  assert.match(wrangler, /nodejs_compat/);
  assert.match(wrangler, /run_worker_first\s*=\s*false/);
  assert.equal(existsSync(resolve(root, "open-next.config.ts")), true);
  assert.match(openNextConfig, /static-assets-incremental-cache/);
  assert.match(openNextConfig, /enableCacheInterception:\s*true/);
  assert.equal(typeof packageJson.scripts["cf:build"], "string");
  assert.equal(typeof packageJson.scripts["cf:preview"], "string");
  assert.equal(typeof packageJson.scripts["cf:deploy"], "string");
  assert.match(packageJson.scripts.build, /--webpack/);
  assert.match(packageJson.scripts["build:static"], /--webpack/);
  assert.match(
    nextConfig,
    /experimental:\s*\{[\s\S]*useTypeScriptCli:\s*false[\s\S]*\}/,
    "production builds must use the TypeScript API because the Next 16 CLI capture is flaky in this environment",
  );
  assert.equal(typeof packageJson.dependencies["@opennextjs/cloudflare"], "string");
  assert.equal(packageJson.dependencies.next, "^16.3.3");
  assert.equal(packageJson.devDependencies["eslint-config-next"], "^16.3.3");
  assert.equal(typeof packageJson.devDependencies.wrangler, "string");
  assert.doesNotMatch(headers, /\/design\/logo\.webp[\s\S]{0,100}immutable/);
  assert.doesNotMatch(headers, /\/guides\/jiangnan-hangzhou\/hero-\*[\s\S]{0,100}immutable/);
  assert.match(nextConfig, /www\.wherewindsmeet\.org/);
  assert.match(nextConfig, /NEXT_STATIC_EXPORT\s*===\s*["']1["']\s*\?\s*\{\}/);
  assert.doesNotMatch(nextConfig, /NEXT_STATIC_EXPORT\s*===\s*["']1["']\s*\?\s*\[\]/);
});

test("generated OpenNext output is excluded from lint and source control", () => {
  const eslintConfig = read("eslint.config.mjs");
  const gitignore = read(".gitignore");

  assert.match(eslintConfig, /["']\.open-next\/\*\*["']/);
  assert.match(gitignore, /^\/?\.open-next\/?$/m);
  assert.match(gitignore, /^\.dev\.vars\*$/m);
});

test("deployment workflow validates behavior and builds the Worker adapter", () => {
  const workflow = read(".github/workflows/deploy.yml");
  const packageJson = JSON.parse(read("package.json"));
  const packageLock = read("package-lock.json");
  assert.match(workflow, /run:\s*npm test/);
  assert.match(workflow, /run:\s*npm run lint/);
  assert.match(workflow, /run:\s*npm run seo:check/);
  assert.match(workflow, /run:\s*npm run cf:build/);
  assert.match(workflow, /run:\s*npm run cf:smoke/);
  assert.match(workflow, /run:\s*npm run cf:deploy:artifact/);
  assert.doesNotMatch(workflow, /cloudflare\/wrangler-action/);
  assert.equal(packageJson.scripts["cf:deploy:artifact"], "opennextjs-cloudflare deploy");
  assert.match(packageJson.scripts["cf:deploy"], /cf:build/);
  assert.match(workflow, /concurrency:[\s\S]*cancel-in-progress:\s*true/);
  assert.doesNotMatch(workflow, /uses:\s*actions\/(?:checkout|setup-node)@v\d/);
  assert.match(workflow, /uses:\s*actions\/checkout@[a-f0-9]{40}/);
  assert.match(workflow, /uses:\s*actions\/setup-node@[a-f0-9]{40}/);
  assert.doesNotMatch(workflow, /deployments:\s*write/);
  assert.doesNotMatch(packageLock, /registry\.npmmirror\.com/);
  assert.equal(typeof packageJson.scripts["test:generated"], "string");
  assert.equal(packageJson.scripts["cf:smoke"], "node scripts/worker-smoke.mjs");
  assert.match(packageJson.scripts["seo:check"], /test:generated/);
  assert.doesNotMatch(packageJson.scripts.test, /i18n-generated-output/);
});

test("Worker smoke QA exercises runtime pages, redirects, 404, sitemap, and immutable assets", () => {
  const smoke = read("scripts/worker-smoke.mjs");

  for (const route of ["/", "/de", "/vn", "/sitemap.xml", "/not-a-real-page"]) {
    assert.match(smoke, new RegExp(route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(smoke, /\/vn\/guides\/one-leaf-one-life/);
  assert.match(smoke, /www\.wherewindsmeet\.org/);
  assert.match(smoke, /wranglerBinary/);
  assert.match(smoke, /["']--host["']/);
  assert.match(smoke, /expectCanonicalHostRedirect/);
  assert.match(smoke, /immutable/i);
  assert.match(smoke, /redirect:\s*["']manual["']/);
});

test("the local SEO crawler points to the static-only build command", () => {
  const crawler = read("scripts/seo-check.cjs");

  assert.match(crawler, /npm run build:static/);
  assert.doesNotMatch(crawler, /Missing static export\. Run `npm run build`/);
});

test("Next 16 dynamic route params use the generated promise-only contract", () => {
  const routes = [
    read("app/(de)/de/guides/bosses/[id]/page.tsx"),
    read("app/(de)/de/guides/weapons/[id]/page.tsx"),
  ];

  for (const route of routes) {
    assert.match(route, /params:\s*Promise<\{\s*id:/);
    assert.doesNotMatch(route, /params:\s*\{\s*id:[^}]+\}\s*\|\s*Promise/);
  }
});
