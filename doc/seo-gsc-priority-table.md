# GSC Priority Table Workflow

Last prepared: 2026-06-03

Latest imported readout: [SEO Data Readout - 2026-06-03](./seo-data-readout-2026-06-03.md)

## Required Exports

Export these CSV files from Google Search Console for the property `wherewindsmeet.org`:

- Search results > Queries, last 16 months.
- Search results > Pages, last 16 months.
- Optional: Queries and Pages for last 28 days compared with previous 28 days.

Keep the default GSC columns: `Query` or `Page`, `Clicks`, `Impressions`, `CTR`, `Position`.

## Generate Priority Tables

```bash
npm run seo:gsc:prioritize -- --queries path/to/queries.csv --pages path/to/pages.csv
```

The script prints two Markdown tables:

- Query Opportunities: high-impression terms, low CTR terms, and striking-distance rankings.
- Page Opportunities: pages with existing demand that should receive freshness, metadata, FAQ, or internal-link updates.

## Week 1 Triage Rules

- Priority 1: high impressions, position 4-20, stale page content.
- Priority 2: high impressions, CTR below 3%, title/description mismatch.
- Priority 3: pages with clicks but outdated version labels.
- Priority 4: long-tail pages with screenshots or item data gaps.

## Current Manual Queue Before GSC Import

| Priority | Page/Cluster | Reason | Action |
|---:|---|---|---|
| 1 | `/`, `/news`, `/guides/patch-notes`, `/guides/codes` | Latest-version mismatch | Updated to Version 1.7 / Imperial Palace |
| 2 | `/guides/tier-list`, `/guides/builds`, `/guides/weapons/tier-list` | Path Balance affects meta guidance | Refresh Week 2 after GSC query review |
| 3 | `/guides/qinchuan` and related VN routes | Sitemap gap and returning-player demand | Sitemap fixed; content refresh queued |
| 4 | `/guides/items` | Placeholder images reduce trust | Backlog after traffic rescue |
