import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

test("Cloudflare deploy is an assets-only Worker serving the static export (no Worker script per page view)", () => {
  const nextConfig = read("next.config.ts");
  const wrangler = read("wrangler.toml").replace(/^\s*#.*$/gm, "");
  const headers = read("public/_headers");
  const redirects = read("public/_redirects");
  const packageJson = JSON.parse(read("package.json"));

  // Static export is opt-in via NEXT_STATIC_EXPORT=1 (build:static).
  assert.match(nextConfig, /output:\s*process\.env\.NEXT_STATIC_EXPORT\s*===\s*["']1["']\s*\?\s*["']export["']/);
  assert.match(nextConfig, /NEXT_STATIC_EXPORT\s*===\s*["']1["']\s*\?\s*\{\}/);
  assert.match(packageJson.scripts["build:static"], /NEXT_STATIC_EXPORT=1/);
  assert.match(packageJson.scripts["build:static"], /--webpack/);
  assert.match(packageJson.scripts.build, /--webpack/);
  assert.match(
    nextConfig,
    /experimental:\s*\{[\s\S]*useTypeScriptCli:\s*false[\s\S]*\}/,
    "production builds must use the TypeScript API because the Next 16 CLI capture is flaky in this environment",
  );

  // Assets-only: no script, no run_worker_first, no observability, apex route only.
  assert.doesNotMatch(wrangler, /^\s*main\s*=/m);
  assert.doesNotMatch(wrangler, /run_worker_first/);
  assert.doesNotMatch(wrangler, /observability/);
  assert.doesNotMatch(wrangler, /binding\s*=/);
  assert.match(wrangler, /directory\s*=\s*["']\.\/out["']/);
  assert.match(wrangler, /html_handling\s*=\s*["']drop-trailing-slash["']/);
  assert.match(wrangler, /not_found_handling\s*=\s*["']404-page["']/);
  assert.match(wrangler, /pattern\s*=\s*["']wherewindsmeet\.org\/\*["']/);
  assert.doesNotMatch(wrangler, /www\.wherewindsmeet\.org/);
  assert.equal(existsSync(resolve(root, "worker.mjs")), false);
  assert.equal(existsSync(resolve(root, "open-next.config.ts")), false);
  assert.equal(packageJson.dependencies["@opennextjs/cloudflare"], undefined);

  // Legacy and locale-fallback redirects live in the asset layer.
  assert.match(redirects, /^\/vn\/guides\/one-leaf-one-life\s+\/guides\/one-leaf-one-life\s+301$/m);
  assert.match(headers, /\/_next\/static\/\*[\s\S]{0,100}immutable/);
  assert.doesNotMatch(headers, /\/design\/logo\.webp[\s\S]{0,100}immutable/);
  assert.doesNotMatch(headers, /\/guides\/jiangnan-hangzhou\/hero-\*[\s\S]{0,100}immutable/);

  assert.equal(packageJson.dependencies.next, "^16.3.3");
  assert.equal(packageJson.devDependencies["eslint-config-next"], "^16.3.3");
  assert.equal(typeof packageJson.devDependencies.wrangler, "string");
});

test("www host is redirected by a dedicated tiny Worker that only runs for www", () => {
  const config = read("workers/www-redirect/wrangler.toml");
  const worker = read("workers/www-redirect/index.mjs");

  assert.match(config, /name\s*=\s*["']wherewindsmeet-www-redirect["']/);
  assert.match(config, /pattern\s*=\s*["']www\.wherewindsmeet\.org\/\*["']/);
  assert.match(config, /\[observability\][\s\S]*enabled\s*=\s*false/);
  assert.match(worker, /CANONICAL_HOST\s*=\s*["']wherewindsmeet\.org["']/);
  assert.match(worker, /Response\.redirect\([^,]+,\s*301\)/);
});

test("www redirect preserves path and query", async () => {
  const { default: worker } = await import(resolve(root, "workers/www-redirect/index.mjs"));
  const response = await worker.fetch(new Request("http://www.wherewindsmeet.org/guides/codes?a=1"));
  assert.equal(response.status, 301);
  assert.equal(response.headers.get("location"), "https://wherewindsmeet.org/guides/codes?a=1");
});

test("generated build output is excluded from lint and source control", () => {
  const gitignore = read(".gitignore");

  assert.match(gitignore, /^\/out\/?$/m);
  assert.match(gitignore, /^\.dev\.vars\*$/m);
});

test("deployment workflow validates on PRs and deploys static assets only from main", () => {
  const workflow = read(".github/workflows/deploy.yml");
  const packageJson = JSON.parse(read("package.json"));
  const packageLock = read("package-lock.json");
  assert.match(workflow, /pull_request:/);
  assert.match(workflow, /run:\s*npm test/);
  assert.match(workflow, /run:\s*npm run lint/);
  assert.match(workflow, /run:\s*npm run seo:check/);
  assert.match(workflow, /run:\s*npm run cf:postbuild/);
  assert.match(workflow, /run:\s*npm run cf:smoke/);
  assert.match(workflow, /run:\s*npm run cf:deploy:artifact/);
  assert.match(workflow, /if:\s*github\.event_name\s*!=\s*'pull_request'/);
  assert.doesNotMatch(workflow, /cloudflare\/wrangler-action/);
  assert.match(packageJson.scripts["cf:deploy:artifact"], /^wrangler deploy && wrangler deploy --config workers\/www-redirect\/wrangler\.toml$/);
  assert.match(packageJson.scripts["cf:build"], /build:static/);
  assert.match(packageJson.scripts["cf:build"], /cf:postbuild/);
  assert.match(packageJson.scripts["cf:deploy"], /cf:build/);
  assert.doesNotMatch(JSON.stringify(packageJson.scripts), /opennext/i);
  assert.match(workflow, /concurrency:[\s\S]*cancel-in-progress:\s*true/);
  assert.doesNotMatch(workflow, /uses:\s*actions\/(?:checkout|setup-node)@v\d/);
  assert.match(workflow, /uses:\s*actions\/checkout@[a-f0-9]{40}/);
  assert.match(workflow, /uses:\s*actions\/setup-node@[a-f0-9]{40}/);
  assert.doesNotMatch(workflow, /deployments:\s*write/);
  assert.doesNotMatch(packageLock, /registry\.npmmirror\.com/);
  assert.equal(typeof packageJson.scripts["test:generated"], "string");
  assert.equal(packageJson.scripts["cf:smoke"], "node scripts/static-smoke.mjs");
  assert.match(packageJson.scripts["seo:check"], /test:generated/);
  assert.doesNotMatch(packageJson.scripts.test, /i18n-generated-output/);
});

test("static smoke QA exercises pages, redirects, 404, sitemap, www, and immutable assets", () => {
  const smoke = read("scripts/static-smoke.mjs");

  for (const route of ["/", "/de", "/vn", "/sitemap.xml", "/robots.txt", "/not-a-real-page", "/guides/npc-list"]) {
    assert.match(smoke, new RegExp(route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(smoke, /\/vn\/guides\/one-leaf-one-life/);
  assert.match(smoke, /308/);
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
