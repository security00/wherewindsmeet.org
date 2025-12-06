'use strict';

// Silence stale Baseline data warnings when Next.js invokes Turbopack/webpack.
if (!process.env.BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA) {
  process.env.BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA = 'true';
}
if (!process.env.BROWSERSLIST_IGNORE_OLD_DATA) {
  process.env.BROWSERSLIST_IGNORE_OLD_DATA = 'true';
}
