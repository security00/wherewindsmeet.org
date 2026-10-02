# i18n and Cloudflare Workers architecture

Status: production runs as a static export on an assets-only Worker (since 2026-10-02).

## Decision

- Production is the Next.js static export (`npm run build:static`) served by an **assets-only** Cloudflare Worker (no `main` script). Page views are served by Workers Static Assets and are not billed as Worker invocations.
- History: 2026-08-30 to 2026-10-02 the site ran through OpenNext on Workers. Every HTML request invoked the Worker (~15M requests/day, the bulk of a ~$186 monthly bill), with no server-side feature that needed it, so it was moved back to static assets.
- The established public URLs remain unchanged: English has no prefix, Vietnamese uses `/vn`, and German uses `/de`.
- `next-intl` supplies request/message infrastructure. Shared interface copy lives in `i18n/messages/{en,vi,de}.json` and is consumed by the shared header, footer, language prompt, and consent UI.
- Long-form SEO guides remain reviewed locale pages for now. Moving hundreds of article paragraphs into one UI dictionary would make source review and page ownership harder, not easier.
- `i18n/routing.mjs` is a positive locale-availability manifest. A new English route is English-only until a reviewed localized owner is explicitly registered.
- Canonical URLs, hreflang, sitemap entries, language-switch links, and locale fallback redirects must all follow that manifest.

## Why this is incremental

The repository already has more than 100 physical `/de` and `/vn` pages and established indexed URLs. A big-bang move to `app/[locale]` would combine content migration, URL handling, metadata changes, and runtime migration in one release. Keeping the physical routes makes this change reversible while still removing duplicated navigation dictionaries and false localized pages.

The static export has no middleware/proxy, API routes, or request-time rendering. Do not add a locale proxy, API route, or any `run_worker_first`/`main` script without an explicit cost review: it would turn every page view back into a billed Worker invocation. A later `[locale]` consolidation needs a separate compatibility test and migration plan.

## Runtime and caching

`wrangler.toml` defines the assets-only Worker `wherewindsmeet-org` on the `wherewindsmeet.org/*` route: `directory = "./out"`, `html_handling = "drop-trailing-slash"`, `not_found_handling = "404-page"` (serves `out/404.html` with status 404). It intentionally has no `main`, no bindings, and no observability.

- `public/_redirects` holds legacy 301s and locale-fallback 301s; Workers Static Assets applies them before serving files.
- `scripts/postbuild-static.mjs` appends explicit `/<path>/ -> /<path>` **308** rules for every exported page and every redirect source, preserving the former Next.js `trailingSlash: false` status code (the built-in html_handling redirect would be 307). It fails the build if the 2000 static-rule limit would be exceeded.
- `public/_headers` sets immutable caching for `/_next/static/*`; HTML uses the Static Assets default (`public, max-age=0, must-revalidate`, edge-cached by Cloudflare).
- `www.wherewindsmeet.org/*` is answered by the separate tiny Worker `workers/www-redirect` (301 to the apex, path and query preserved). Static Assets `_redirects` cannot match on host, and the CI token cannot manage zone Redirect Rules. Only `www` traffic invokes it; replacing it with a zone Redirect Rule (dashboard → Rules → Redirect Rules) and deleting that Worker would make it free as well.

The workflow runs on pull requests (checks only) and on `main` (checks + deploy). It builds the static export once (`seo:check`), finishes the bundle (`cf:postbuild`), runs `cf:smoke` against real `wrangler dev` for both Workers, and then deploys with `cf:deploy:artifact` (`wrangler deploy` for the site, then the www redirect Worker). `cf:deploy:artifact` does not rebuild; the safe manual entry point is `npm run cf:deploy`.

Local Worker secrets belong in `.dev.vars` and are ignored by Git. Only a redacted `.dev.vars.example` may be committed. Production credentials remain Cloudflare/GitHub secrets and must never enter the repository.

## Privacy and advertising

Analytics remains off until the visitor explicitly opts in. The in-site preference panel is not represented as a Google-certified CMP, so AdSense loading is disabled in code. Re-enabling ads requires an approved CMP/account configuration, regional-policy review, and a behavior test that proves no advertising request occurs before the required consent signal.

## Adding a localized page

1. Add and review the locale page at its existing `/de` or `/vn` route.
2. Add the base path to the positive manifest in `i18n/routing.mjs`.
3. Remove any fallback redirect for that locale/path.
4. Add UI strings to all three JSON packs when shared chrome changes.
5. Run route, generated hreflang/sitemap, static build, and `npm run cf:smoke` checks.

## Release and cutover

1. Record the currently active Worker deployment/version, custom-domain routes, and the last known-good static deployment before changing production.
2. Run `npm ci`, `npm test`, `npm run lint`, `npm run seo:check`, `npm run cf:postbuild`, and `npm run cf:smoke` from a clean checkout.
3. Inspect the generated artifact for unexpected size growth and verify that no secret or local `.dev.vars` file is included.
4. Deploy the already-tested artifact only after an explicit release approval.
5. Recheck the apex and `www` host, `/de`, `/vn`, a locale fallback, a real 404, `/sitemap.xml`, canonical/hreflang output, and one immutable asset against production.
6. Keep the former static deployment and its routing configuration available through the observation window. Do not delete the rollback target as part of the initial cutover.

## Rollback

Roll back through Cloudflare (Workers → wherewindsmeet-org → Deployments) to the previous version when a deployment itself is faulty. To return to OpenNext, revert the 2026-10-02 static-assets commit; note that it re-routes `www` back to the main Worker, so remove the `wherewindsmeet-www-redirect` route first, and it brings back per-request Worker billing.
