#!/usr/bin/env node

/**
 * Comprehensive CDN verification
 * Usage: node scripts/verify-cdn-comprehensive.mjs
 */

import { readFileSync } from 'fs';

const CDN_URL = 'https://static.wherewindsmeet.org';

async function checkUrl(key) {
  const url = `${CDN_URL}/${key}`;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return { key, status: response.status, ok: response.ok };
  } catch (error) {
    return { key, status: 'ERROR', ok: false };
  }
}

async function checkBatch(keys) {
  return Promise.all(keys.map(key => checkUrl(key)));
}

async function main() {
  console.log('🌐 Comprehensive CDN Verification\n');
  
  const uploadList = readFileSync('/tmp/r2-upload-list.txt', 'utf-8')
    .trim()
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      const [, r2Key] = line.split(' -> ');
      return r2Key;
    });
  
  console.log(`📋 Checking ${uploadList.length} URLs...\n`);
  
  const batchSize = 50;
  let total = 0;
  let available = 0;
  let missing = [];
  
  for (let i = 0; i < uploadList.length; i += batchSize) {
    const batch = uploadList.slice(i, i + batchSize);
    const results = await checkBatch(batch);
    
    for (const result of results) {
      total++;
      if (result.ok) {
        available++;
      } else {
        missing.push(result);
      }
    }
    
    console.log(`   Checked ${total}/${uploadList.length}... (${available} available)`);
  }
  
  console.log(`\n📊 Final Summary:`);
  console.log(`   Total checked: ${total}`);
  console.log(`   Available on CDN: ${available}`);
  console.log(`   Missing from CDN: ${missing.length}`);
  console.log(`   Success rate: ${(available/total*100).toFixed(1)}%\n`);
  
  if (missing.length > 0) {
    console.log(`❌ Missing files (first 20):`);
    for (const m of missing.slice(0, 20)) {
      console.log(`   ${m.status} - ${m.key}`);
    }
    
    // Save missing list
    const fs = await import('fs/promises');
    await fs.writeFile('/tmp/cdn-missing-files.txt', 
      missing.map(m => m.key).join('\n')
    );
    console.log(`\n   Full list saved to: /tmp/cdn-missing-files.txt`);
  } else {
    console.log(`✅ All files are available on CDN!`);
    console.log(`   Safe to remove from git repository.`);
  }
}

main().catch(console.error);
