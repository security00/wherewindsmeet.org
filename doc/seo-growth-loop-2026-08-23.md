# SEO Growth Loop — 2026-08-23

## Evidence window

- **GSC direct:** screenshot supplied by the user, last 28 days, Web. 3.09K clicks, 113K impressions, 2.7% CTR, average position 10.2.
- **GSC direct (visible rows only):** “wwm codes” 53/867; “wwm tier list” 41/378; “where winds meet tier list” 39/662; “where winds meet imperial decree” 34/359; “imperial decree where winds meet” 32/226; “wwm code” 24/283; “wwm arena ranks” 23/194; “imperial decree wwm” 23/162; “wwm pvp tier list” 21/66; “where winds meet cn map” 17/80. Values are clicks/impressions. The other 990 rows were not visible and are not inferred.
- **Google Trends direct:** searched_with_rising-searches_Worldwide_20260816-0544_20260823-0544.csv, Worldwide, 2026-08-16 05:44 through 2026-08-23 05:44; timezone not specified. 50 rows.
- **Trend opportunities selected:** “commerce coin” +130%, “character creation codes” +60%, “hidden mountain” +30%.
- **SERP observed:** current results were reviewed for the three selected intents. Official Where Winds Meet developer letters were used for region and version claims; current walkthroughs were used only for task routes and are labeled on-page.
- **Site observed:** codes, tier-list, Imperial Decree, Arena/PVP and CN-map intents already have dedicated pages. There was no dedicated page for the three selected rising intents.

## Change hypothesis

1. A dedicated character-code page will separate appearance-code intent from reward-code intent and reduce pogo-sticking from /guides/codes.
2. A Commerce Coin page with a non-static trade loop and video will capture rising transactional/help intent without publishing brittle prices.
3. A Hidden Mountain page will connect the current official Version 2.1 developer letter to an unlock-focused query and retain users with the official trailer.
4. EN/VI/DE routes, hreflang, hub links and sitemap entries will prevent localized 404s and improve crawl discovery.

## Shipped in the reviewable diff

- /guides/character-creation-codes plus /vn and /de equivalents.
- /guides/commerce-coins plus /vn and /de equivalents.
- /guides/hidden-mountain plus /vn and /de equivalents.
- Five zoomable Appearance screenshots, two lazy video embeds, source notes and related-guide routes.
- August 21 Version 2.1 developer letter added to the news source of truth and current-news surfaces.
- Small internal link from the already-ranking redeem-codes page; no broad rewrite of ranking pages.

## Deferred opportunities

- “top up” / “topup”: only publish after an official-payment-only safety page is scoped; do not route users to unverified resellers.
- “mac”, “geforce now”, “player count”, “steam charts”: availability and counts are volatile; require first-party confirmation or dynamic data.
- “pay to win”, “gacha”, “is it MMO”, “is it free”: better handled as a future consolidated “what kind of game is WWM?” FAQ than several thin pages.

## Measurement

- **Baseline date:** 2026-08-23.
- **First crawl/index check:** 2026-08-30.
- **Directional review:** 2026-09-06.
- **Decision review:** 2026-09-13.
- Measure query/page impressions, clicks, CTR and average position for the three new clusters; also watch /guides/codes for character-code query separation.
- Keep the pages if impressions/index coverage grow. Improve title/intro if impressions grow but CTR stays weak. Merge or redirect only after a full review window with no meaningful coverage.

## Deployment state

The first three-cluster batch was deployed in commit c080def on 2026-08-23.

## Same-day Chapter 2 intent expansion

- **SERP observed:** fresh exact-task results appeared for “Cloudtop Ascent Foundation,” “Build the Cloudstair,” “Heaven’s Threshold unlock,” “Evershift Labyrinth full guide,” and “pass through the rotating mechanism.”
- **Community demand signal:** recent guide posts include players asking why the next region still says “wait for development” after the labyrinth.
- **Decision:** strong enough for two standalone task pages rather than adding more sections to the already broad Hidden Mountain page.
- **Targets:** /guides/heavens-threshold-cloudstair and /guides/evershift-labyrinth, each with EN/VI/DE routes.
- **Primary hypotheses:** server-gate explanations will satisfy unlock/blocker intent; a four-step rotating-mechanism answer will satisfy exact puzzle intent.
- **Media:** official Heaven’s Threshold Chapter 2 trailer, loaded through the lightweight privacy-enhanced video component.
- **Current state:** local reviewable diff only; this second expansion is not yet deployed.
- **Review window after any deployment:** crawl check after 7 days and query/page decision review after 21 days.
- **Media correction:** Evershift Labyrinth now embeds the dedicated 13:58 full quest walkthrough (aqZ1F_PS5rQ); the official Chapter 2 trailer remains exclusive to the Heaven’s Threshold / Cloudstair page.
