'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * SEO Content Freshness Updater
 *
 * Reduces manual work for the lib/contentFreshness.json registry.
 *
 * Primary signal source: lib/news.ts (the curated official news mirror you already maintain).
 *   - When you add a new top row in officialNewsRows (new patch/fix), run this script
 *     to automatically sync lastChecked dates and gameVersion labels into the freshness registry.
 *
 * Bonus (network): optionally fetches sourceUrls / main news index to discover brand-new
 *   official update .html links that are not yet in news.ts, so you can add them.
 *
 * Safe by default: --dry-run shows a diff and does not write.
 *
 * Usage examples:
 *   node scripts/update-content-freshness.cjs --dry-run
 *   node scripts/update-content-freshness.cjs                 # applies changes
 *   node scripts/update-content-freshness.cjs --date 2026-06-10 --version "Version 1.7 / June hotfixes"
 *   node scripts/update-content-freshness.cjs --only /,/news,/guides/patch-notes
 *   node scripts/update-content-freshness.cjs --fetch          # also try live discovery (best effort)
 *
 * After running (without --dry-run), you should still:
 *   - Review the git diff on lib/contentFreshness.json
 *   - Update any static strings in page titles/H1/metadata that are not driven by getContentFreshness()
 *   - Run: npm run seo:check:freshness
 */

const fs = require('node:fs');

const REGISTRY_PATH = 'lib/contentFreshness.json';
const NEWS_PATH = 'lib/news.ts';

const DEFAULT_CORE_PATHS = ['/', '/news', '/guides/patch-notes', '/guides/codes'];
const ALL_TRACKED_PATHS = [
  '/',
  '/guides/platforms',
  '/news',
  '/guides/patch-notes',
  '/guides/codes',
  '/guides/bosses',
  '/guides/tier-list',
  '/guides/builds',
  '/guides/pvp-tier-list',
  '/guides/weapons/tier-list',
  '/guides/qinchuan',
  '/guides/imperial-decree',
  '/guides/mist-shrouded-prison',
  '/guides/npc-list',
];

const parseArgValue = (args, key) => {
  const index = args.indexOf(key);
  if (index === -1) return null;
  const value = args[index + 1];
  if (!value || value.startsWith('--')) return null;
  return value;
};

const hasFlag = (args, flag) => args.includes(flag);

function loadRegistry() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    throw new Error(`Missing ${REGISTRY_PATH}`);
  }
  return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
}

function saveRegistry(entries) {
  const json = JSON.stringify(entries, null, 2) + '\n';
  fs.writeFileSync(REGISTRY_PATH, json, 'utf8');
}

function loadNewsText() {
  return fs.readFileSync(NEWS_PATH, 'utf8');
}

/**
 * Extract the top (most recent) news rows from the source of lib/news.ts using regex.
 * We look for the first few OfficialNewsRow array literals near the top of the list.
 */
function extractLatestNewsSignals(newsText) {
  const signals = [];

  // Match the first several [ "id", "Title with date/version info", "YYYY-MM-DD", ... ]
  // The array is the source of truth; newest items are inserted at index 0.
  const rowRegex = /\[\s*\n?\s*"([^"]+)",\s*\n?\s*"([^"]+)",\s*\n?\s*"(20\d{2}-\d{2}-\d{2})"/g;

  let match;
  let count = 0;
  while ((match = rowRegex.exec(newsText)) && count < 6) {
    const [, id, title, date] = match;
    signals.push({ id, title, date });
    count++;
  }

  return signals;
}

function deriveGameVersionFromTitle(title) {
  // Turn titles like:
  // "1.7 Version Patch Notes: Optimizations and Bug Fixes (June 5, 2026)"
  // "Version 1.7 Path Balance Adjustment Announcement (May 28)"
  // into compact labels like "Version 1.7 / June 5 fixes"
  let version = 'Version 1.7';
  const verMatch = title.match(/Version\s+1\.[0-9]+/i) || title.match(/\b1\.[0-9]+\s*Version/i);
  if (verMatch) {
    let v = verMatch[0];
    v = v.replace(/^\s*1\./i, 'Version 1.');
    v = v.replace(/\bVersion\s*1\./i, 'Version 1.');
    v = v.replace(/\s*Version\s*$/i, '');
    version = v.trim();
  }
  if (!/^Version 1\./i.test(version)) {
    version = 'Version 1.7';
  }

  let suffix = '';

  const lower = title.toLowerCase();
  if (lower.includes('fixes') || lower.includes('optimizations') || lower.includes('bug')) {
    suffix = 'fixes';
  } else if (lower.includes('path balance') || lower.includes('balance')) {
    suffix = 'Path Balance';
  } else if (lower.includes('imperial palace') || lower.includes('palace')) {
    suffix = 'The Imperial Palace';
  } else if (lower.includes('patch notes') || lower.includes('update overview')) {
    const month = title.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}/i);
    if (month) suffix = month[0];
  }

  if (!suffix) {
    const paren = title.match(/\(([^)]+2026[^)]*)\)/);
    if (paren) suffix = paren[1].replace(/\s*,\s*/g, ' ').trim();
  }

  return suffix ? `${version} / ${suffix}` : version;
}

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function normalizeDate(d) {
  if (!d) return todayISO();
  // Accept YYYY-MM-DD or try to parse
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  const parsed = new Date(d);
  if (!isNaN(parsed)) return parsed.toISOString().slice(0, 10);
  return todayISO();
}

/**
 * Very small best-effort fetcher (modeled after patterns in seo-check.cjs).
 * Gracefully degrades if network is unavailable or site blocks.
 */
async function fetchText(url, timeoutMs = 12000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'WhereWindsMeet-FreshnessUpdater/1.0 (+https://wherewindsmeet.org; seo automation)',
        'accept': 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

/**
 * Naive but useful extraction of new official update links and recent date/version hints
 * from an HTML page. Used only as enrichment when --fetch is passed.
 */
function extractSignalsFromHtml(html) {
  if (!html) return { newUpdateUrls: [], dateHints: [], versionHints: [] };

  const newUpdateUrls = new Set();
  const linkRe = /href=["'](https?:\/\/[^"']+?\/news\/official\/[^"']*?(?:update|patch|ImperialPalace|Adjustment|529|527|515)[^"']*?\.html)["']/gi;
  let m;
  while ((m = linkRe.exec(html))) {
    if (m[1]) newUpdateUrls.add(m[1]);
  }

  const dateHints = [];
  const dateRe = /\b(20\d{2}[-/]\d{1,2}[-/]\d{1,2}|(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s*20\d{2})\b/gi;
  while ((m = dateRe.exec(html))) {
    dateHints.push(m[0]);
  }

  const versionHints = [];
  const verRe = /Version\s+1\.[0-9]+[^<]{0,60}/gi;
  while ((m = verRe.exec(html))) {
    versionHints.push(m[0].trim());
  }

  return {
    newUpdateUrls: [...newUpdateUrls],
    dateHints: [...new Set(dateHints)].slice(0, 5),
    versionHints: [...new Set(versionHints)].slice(0, 5),
  };
}

async function discoverNewSources(sourceUrls, doFetch) {
  if (!doFetch) return [];
  const discovered = new Set();

  for (const u of sourceUrls.slice(0, 8)) { // be polite, limit
    const html = await fetchText(u);
    const sig = extractSignalsFromHtml(html);
    for (const nu of sig.newUpdateUrls) {
      discovered.add(nu);
    }
    // small delay
    await new Promise(r => setTimeout(r, 120));
  }

  // Also try the main mobile news index
  const main = await fetchText('https://www.wherewindsmeetgame.com/m/news/');
  const mainSig = extractSignalsFromHtml(main);
  for (const nu of mainSig.newUpdateUrls) discovered.add(nu);

  return [...discovered];
}

function buildRecommendedFromNews(latestSignals) {
  if (!latestSignals.length) {
    return { lastChecked: todayISO(), gameVersion: 'Version 1.7' };
  }
  const top = latestSignals[0];
  const gameVersion = deriveGameVersionFromTitle(top.title);
  return {
    lastChecked: top.date || todayISO(),
    gameVersion,
  };
}

function updateEntry(entry, recommended, forcedDate, forcedVersion, discoveredUrls) {
  const next = { ...entry };

  const useDate = forcedDate || recommended.lastChecked || todayISO();
  next.lastChecked = normalizeDate(useDate);

  if (forcedVersion) {
    next.gameVersion = forcedVersion;
  } else if (recommended.gameVersion && !next.gameVersion.includes('1.7')) {
    // Only upgrade if current doesn't look current
    next.gameVersion = recommended.gameVersion;
  }

  if (Array.isArray(discoveredUrls) && discoveredUrls.length) {
    const existing = new Set(next.sourceUrls || []);
    for (const u of discoveredUrls) {
      if (u && !existing.has(u)) existing.add(u);
    }
    next.sourceUrls = [...existing];
  }

  return next;
}

function printDiff(before, after, pathsTouched) {
  console.log('\n=== Proposed freshness updates ===');
  for (const p of pathsTouched) {
    const b = before.find((e) => e.basePath === p);
    const a = after.find((e) => e.basePath === p);
    if (!b || !a) continue;
    if (b.lastChecked !== a.lastChecked || b.gameVersion !== a.gameVersion) {
      console.log(`  ${p}`);
      if (b.lastChecked !== a.lastChecked) console.log(`    lastChecked: ${b.lastChecked} → ${a.lastChecked}`);
      if (b.gameVersion !== a.gameVersion) console.log(`    gameVersion: ${b.gameVersion} → ${a.gameVersion}`);
    }
  }
  console.log('==================================\n');
}

async function main() {
  const args = process.argv.slice(2);

  if (hasFlag(args, '--help') || hasFlag(args, '-h')) {
    console.log(`
SEO Content Freshness Updater

Options:
  --dry-run                 Show what would change, do not write file (default behavior if no --apply)
  --apply                   Actually write lib/contentFreshness.json
  --date YYYY-MM-DD         Force a specific lastChecked date for touched entries
  --version "Version 1.7 / Foo"   Force a gameVersion label
  --only /,/news,/guides/patch-notes   Comma-separated list of basePaths to update (default: core + many)
  --fetch                   Also attempt live network fetches on sourceUrls to discover new official update pages
  --check-after             After applying, run the freshness checker

Examples:
  node scripts/update-content-freshness.cjs --dry-run
  node scripts/update-content-freshness.cjs --apply
  node scripts/update-content-freshness.cjs --apply --date 2026-06-10
`);
    return;
  }

  const dryRun = !hasFlag(args, '--apply');
  const doFetch = hasFlag(args, '--fetch');
  const doCheckAfter = hasFlag(args, '--check-after');

  const forcedDate = parseArgValue(args, '--date');
  const forcedVersion = parseArgValue(args, '--version');

  const onlyRaw = parseArgValue(args, '--only');
  const targetPaths = onlyRaw
    ? onlyRaw.split(',').map((s) => s.trim()).filter(Boolean)
    : [...DEFAULT_CORE_PATHS, ...ALL_TRACKED_PATHS.filter((p) => !DEFAULT_CORE_PATHS.includes(p))];

  console.log('Loading current registry and news data...');
  const originalEntries = loadRegistry();
  const newsText = loadNewsText();

  const latestSignals = extractLatestNewsSignals(newsText);
  const recommended = buildRecommendedFromNews(latestSignals);

  console.log(`Latest news signal: ${latestSignals[0]?.date} — ${latestSignals[0]?.title?.slice(0, 80)}...`);
  console.log(`Derived recommendation: lastChecked=${recommended.lastChecked}  gameVersion="${recommended.gameVersion}"`);

  // Optional live discovery
  let discovered = [];
  if (doFetch) {
    console.log('\nAttempting live discovery from sourceUrls (best effort)...');
    const allSources = Array.from(new Set(originalEntries.flatMap((e) => e.sourceUrls || [])));
    discovered = await discoverNewSources(allSources, true);
    if (discovered.length) {
      console.log(`  Discovered ${discovered.length} additional candidate official update URL(s).`);
    } else {
      console.log('  No new update URLs discovered (or network unavailable).');
    }
  }

  // Build new entries
  const newEntries = originalEntries.map((entry) => {
    if (!targetPaths.includes(entry.basePath)) return entry;

    // For entries whose sources mention "Path Balance" / "Imperial Palace" etc, we could be smarter,
    // but for v1 we apply the top recommended to everything the user targets.
    return updateEntry(entry, recommended, forcedDate, forcedVersion, discovered);
  });

  const touched = targetPaths.filter((p) =>
    originalEntries.some((e) => e.basePath === p) &&
    newEntries.some((e) => e.basePath === p && (
      originalEntries.find((o) => o.basePath === p)?.lastChecked !== e.lastChecked ||
      originalEntries.find((o) => o.basePath === p)?.gameVersion !== e.gameVersion
    ))
  );

  if (touched.length === 0) {
    console.log('\nNo changes needed for the selected paths (already up to date with news signals).');
  } else {
    printDiff(originalEntries, newEntries, touched);
  }

  if (dryRun) {
    console.log('DRY RUN — no file written. Use --apply to persist.');
    if (discovered.length) {
      console.log('\nNewly discovered official URLs you may want to add to news.ts and/or specific entries:');
      discovered.forEach((u) => console.log('  ' + u));
    }
    // Also surface pages that have very old literal fallbacks
    console.log('\nReminder: also review hardcoded fallbacks like `?? "2026-06-03"` and month-locked titles (e.g. "Codes June 2026") in page source.');
    return;
  }

  // Apply
  saveRegistry(newEntries);
  console.log(`\nWrote ${REGISTRY_PATH} (${touched.length} entries refreshed).`);

  if (discovered.length) {
    console.log('\nNew candidate official URLs discovered (consider adding the best ones to lib/news.ts and the relevant freshness entry sourceUrls):');
    discovered.slice(0, 10).forEach((u) => console.log('  ' + u));
  }

  if (doCheckAfter) {
    console.log('\nRunning freshness check...');
    try {
      require('./seo-freshness-check.cjs');
    } catch {
      console.error('Freshness check reported issues (see above).');
    }
  } else {
    console.log('\nNext steps:');
    console.log('  1. git diff lib/contentFreshness.json');
    console.log('  2. npm run seo:check:freshness');
    console.log('  3. Review any pages with static "June 2026" / old version strings in titles and H1s.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
