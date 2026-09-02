#!/usr/bin/env node

/**
 * Verify CDN availability and list what's accessible
 * Usage: node scripts/verify-cdn.mjs
 */

import { readFileSync } from 'fs';

const CDN_URL = 'https://static.wherewindsmeet.org';

async function checkUrl(key) {
  const url = `${CDN_URL}/${key}`;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return { key, url, status: response.status, ok: response.ok };
  } catch (error) {
    return { key, url, status: 'ERROR', ok: false, error: error.message };
  }
}

async function main() {
  console.log('🌐 Verifying CDN accessibility\n');
  
  // Read sample of files to check
  const uploadList = readFileSync('/tmp/r2-upload-list.txt', 'utf-8')
    .trim()
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      const [, r2Key] = line.split(' -> ');
      return r2Key;
    });
  
  console.log(`📋 Checking sample of ${Math.min(20, uploadList.length)} URLs...\n`);
  
  const sample = uploadList.slice(0, 20);
  let available = 0;
  let missing = 0;
  
  for (const key of sample) {
    const result = await checkUrl(key);
    const icon = result.ok ? '✓' : '✗';
    const status = result.ok ? 'OK' : result.status;
    console.log(`   ${icon} [${status}] ${result.url}`);
    
    if (result.ok) available++;
    else missing++;
  }
  
  console.log(`\n📊 Summary: ${available} available, ${missing} missing from CDN\n`);
  
  if (available > 0) {
    console.log('✅ CDN is accessible and serving files!');
  } else {
    console.log('⚠️  No files found on CDN yet - need to upload to R2');
  }
}

main().catch(console.error);
