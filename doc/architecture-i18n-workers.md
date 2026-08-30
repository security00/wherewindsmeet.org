# i18n and Cloudflare Workers architecture

Status: implemented and awaiting an explicitly approved production release.

## Decision

- Production runs as a full Next.js application through OpenNext on Cloudflare Workers.
- The established public URLs remain unchanged: English has no prefix, Vietnamese uses `/vn`, and German uses `/de`.
- `next-intl` supplies request/message infrastructure. Shared interface copy lives in `i18n/messages/{en,vi,de}.json` and is consumed by the shared header, footer, language prompt, and consent UI.
- Long-form SEO guides remain reviewed locale pages for now. Moving hundreds of article paragraphs into one UI dictionary would make source review and page ownership harder, not easier.
- `i18n/routing.mjs` is a positive locale-availability manifest. A new English route is English-only until a reviewed localized owner is explicitly registered.
- Canonical URLs, hreflang, sitemap entries, language-switch links, and locale fallback redirects must all follow that manifest.

## Why this is incremental

The repository already has more than 100 physical `/de` and `/vn` pages and established indexed URLs. A big-bang move to `app/[locale]` would combine content migration, URL handling, metadata changes, and runtime migration in one release. Keeping the physical routes makes this change reversible while still removing duplicated navigation dictionaries and false localized pages.

Next.js 16 uses Node.js `proxy.ts`, while the selected OpenNext adapter does not currently support Node.js middleware. Do not add a locale proxy just because the application now runs on Workers. A later `[locale]` consolidation needs a separate compatibility test and migration plan.

## Runtime and caching

`open-next.config.ts` uses the read-only Workers Static Assets incremental cache because this site currently has no ISR or on-demand revalidation. `enableCacheInterception` keeps pre-rendered page reads on the asset path. If ISR, server mutations, or on-demand revalidation are introduced, revisit this cache choice first.

`worker.mjs` is the stable Wrangler entry point. It redirects the legacy `www` host before delegating to the generated OpenNext worker, so a cached SSG response cannot bypass the canonical-host redirect. `run_worker_first = false` still lets immutable public assets bypass application code; HTML and the protected OpenNext page cache continue through the Worker.

The production workflow builds static output for SEO regression checks, builds one OpenNext artifact, starts that artifact locally, and smoke-tests English, German, Vietnamese, redirects, 404 behavior, sitemap output, and immutable assets before deploying the exact artifact. Deployment concurrency cancels obsolete runs so an older commit cannot overwrite a newer release. `cf:deploy:artifact` intentionally does not rebuild; use it only inside that verified workflow or immediately after `cf:build`. The safe manual entry point is `npm run cf:deploy`.

The final 2026-08-29 Wrangler dry run observed an approximately 2.15 MiB gzip Worker bundle and 872 assets. These are observations, not permanent limits or budgets; repeat the dry run for every material dependency or media change.

Local Worker secrets belong in `.dev.vars` and are ignored by Git. Only a redacted `.dev.vars.example` may be committed. Production credentials remain Cloudflare/GitHub secrets and must never enter the repository.

## Privacy and advertising

Analytics remains off until the visitor explicitly opts in. The in-site preference panel is not represented as a Google-certified CMP, so AdSense loading is disabled in code. Re-enabling ads requires an approved CMP/account configuration, regional-policy review, and a behavior test that proves no advertising request occurs before the required consent signal.

## Adding a localized page

1. Add and review the locale page at its existing `/de` or `/vn` route.
2. Add the base path to the positive manifest in `i18n/routing.mjs`.
3. Remove any fallback redirect for that locale/path.
4. Add UI strings to all three JSON packs when shared chrome changes.
5. Run route, generated hreflang/sitemap, static build, and Workers preview checks.

## Release and cutover

1. Record the currently active Worker deployment/version, custom-domain routes, and the last known-good static deployment before changing production.
2. Run `npm ci`, `npm test`, `npm run lint`, `npm run seo:check`, `npm run cf:build`, a Wrangler dry run, and `npm run cf:smoke` from a clean checkout.
3. Inspect the generated artifact for unexpected size growth and verify that no secret or local `.dev.vars` file is included.
4. Deploy the already-tested artifact only after an explicit release approval.
5. Recheck the apex and `www` host, `/de`, `/vn`, a locale fallback, a real 404, `/sitemap.xml`, canonical/hreflang output, and one immutable asset against production.
6. Keep the former static deployment and its routing configuration available through the observation window. Do not delete the rollback target as part of the initial cutover.

## Rollback

Prefer rolling back to the recorded last known-good Worker version through Cloudflare when the runtime deployment itself is faulty. If the OpenNext model must be abandoned, the static-export path remains available as `npm run build:static`: restore the previous static-assets Worker configuration and deploy the verified `out/` artifact without changing public URLs. Reverting source alone is not a rollback until the matching artifact and domain routes are active and the production smoke checks pass.
