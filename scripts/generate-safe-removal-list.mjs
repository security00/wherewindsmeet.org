#!/usr/bin/env node

/**
 * Generate safe removal list - only files confirmed on CDN
 * Usage: node scripts/generate-safe-removal-list.mjs
 */

import { readFileSync, writeFileSync } from 'fs';

async function main() {
  console.log('🔍 Generating safe removal list\n');
  
  // Read all files that should be uploaded
  const uploadList = readFileSync('/tmp/r2-upload-list.txt', 'utf-8')
    .trim()
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      const [localPath, r2Key] = line.split(' -> ');
      return { localPath, r2Key, publicPath: localPath.replace('/workspace/', '') };
    });
  
  // Read missing files
  const missingKeys = new Set(
    readFileSync('/tmp/cdn-missing-files.txt', 'utf-8')
      .trim()
      .split('\n')
      .filter(line => line.trim())
  );
  
  console.log(`📋 Total files to consider: ${uploadList.length}`);
  console.log(`❌ Missing from CDN: ${missingKeys.size}`);
  
  // Filter: only remove files that are confirmed on CDN
  const safeToRemove = uploadList.filter(f => !missingKeys.has(f.r2Key));
  const mustKeep = uploadList.filter(f => missingKeys.has(f.r2Key));
  
  console.log(`✅ Safe to remove: ${safeToRemove.length}`);
  console.log(`⚠️  Must keep (not on CDN): ${mustKeep.length}\n`);
  
  // Save lists
  writeFileSync(
    '/tmp/safe-to-remove.txt',
    safeToRemove.map(f => f.publicPath).join('\n')
  );
  
  writeFileSync(
    '/tmp/must-keep-in-repo.txt',
    mustKeep.map(f => `${f.publicPath} (${f.r2Key})`).join('\n')
  );
  
  console.log('📄 Files saved:');
  console.log('   /tmp/safe-to-remove.txt - Files confirmed on CDN, safe to delete from git');
  console.log('   /tmp/must-keep-in-repo.txt - Files missing from CDN, must stay in git\n');
  
  if (mustKeep.length > 0) {
    console.log('⚠️  Files that must stay in repo:');
    for (const file of mustKeep) {
      console.log(`   ${file.publicPath}`);
    }
  }
}

main().catch(console.error);
