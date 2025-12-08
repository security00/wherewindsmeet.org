'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */

// Wrapper to run Next.js commands with baseline/browserslist warnings suppressed via env vars.
const { spawnSync } = require('child_process');
const path = require('path');

const subCommand = process.argv[2];
const extraArgs = process.argv.slice(3);

if (!subCommand) {
  console.error('Usage: node scripts/run-with-baseline-env.cjs <dev|build|start> [...args]');
  process.exit(1);
}

// Ensure current process picks them up too (some tooling spawns workers inheriting from parent).
process.env.BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA = 'true';
process.env.BROWSERSLIST_IGNORE_OLD_DATA = 'true';

const env = {
  ...process.env,
  BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: 'true',
  BROWSERSLIST_IGNORE_OLD_DATA: 'true',
  // Clear any inherited NODE_OPTIONS flags that Turbopack workers disallow.
  NODE_OPTIONS: '',
};

const nextBin = path.resolve(__dirname, '..', 'node_modules', 'next', 'dist', 'bin', 'next');
const result = spawnSync('node', [nextBin, subCommand, ...extraArgs], {
  stdio: 'inherit',
  env,
});

process.exit(result.status === null ? 1 : result.status);
