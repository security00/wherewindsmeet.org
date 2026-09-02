#!/usr/bin/env node

/**
 * Migrate public/ media files to R2 bucket
 * Usage: node scripts/migrate-to-r2.mjs
 */

import { readdir, readFile, stat } from 'fs/promises';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const ACCOUNT_ID = 'faae494a756090f5f9c0ad7b8d1ddb88';
const BUCKET_NAME = 'wherewindsmeet';
const CDN_URL = 'https://static.wherewindsmeet.org';
const PUBLIC_DIR = join(ROOT, 'public');

const MEDIA_EXTENSIONS = ['.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4', '.webm'];

// Files to keep in repo (small identity files)
const KEEP_IN_REPO = new Set([
  'public/items/consumables/placeholder.svg',
  'public/items/common/placeholder.svg',
  'public/design/logo.webp', // Small 1.9K file
]);

const SIZE_THRESHOLD = 10 * 1024; // Keep files under 10KB

async function* walkDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDirectory(fullPath);
    } else {
      yield fullPath;
    }
  }
}

async function findMediaFiles() {
  const files = [];
  for await (const file of walkDirectory(PUBLIC_DIR)) {
    const ext = file.slice(file.lastIndexOf('.')).toLowerCase();
    if (MEDIA_EXTENSIONS.includes(ext)) {
      const stats = await stat(file);
      const relativePath = relative(PUBLIC_DIR, file);
      files.push({
        localPath: file,
        relativePath,
        publicPath: 'public/' + relativePath,
        r2Key: relativePath,
        size: stats.size,
        keep: KEEP_IN_REPO.has('public/' + relativePath) || stats.size < SIZE_THRESHOLD
      });
    }
  }
  return files;
}

async function listR2Objects() {
  // Use AWS S3-compatible API
  const url = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com/${BUCKET_NAME}?list-type=2&max-keys=1000`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Failed to list R2 objects:', response.status, response.statusText);
      return new Set();
    }
    
    const text = await response.text();
    // Parse XML response for Keys
    const keys = new Set();
    const keyMatches = text.matchAll(/<Key>([^<]+)<\/Key>/g);
    for (const match of keyMatches) {
      keys.add(match[1]);
    }
    return keys;
  } catch (error) {
    console.error('Error listing R2 objects:', error.message);
    return new Set();
  }
}

async function uploadToR2(file, apiToken) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET_NAME}/objects/${file.r2Key}`;
  
  const content = await readFile(file.localPath);
  
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': getContentType(file.r2Key),
      'Cache-Control': 'public, max-age=31536000',
    },
    body: content,
  });
  
  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
  }
  
  return true;
}

function getContentType(filename) {
  const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase();
  const types = {
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
  };
  return types[ext] || 'application/octet-stream';
}

async function verifyCdnUrl(r2Key) {
  const url = `${CDN_URL}/${r2Key}`;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + 'B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'K';
  return (bytes / (1024 * 1024)).toFixed(1) + 'M';
}

async function main() {
  console.log('🔍 Scanning public/ directory for media files...\n');
  
  const files = await findMediaFiles();
  console.log(`Found ${files.length} media files`);
  
  const toUpload = files.filter(f => !f.keep);
  const toKeep = files.filter(f => f.keep);
  
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  const uploadSize = toUpload.reduce((sum, f) => sum + f.size, 0);
  const keepSize = toKeep.reduce((sum, f) => sum + f.size, 0);
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total: ${files.length} files (${formatSize(totalSize)})`);
  console.log(`   To upload: ${toUpload.length} files (${formatSize(uploadSize)})`);
  console.log(`   To keep: ${toKeep.length} files (${formatSize(keepSize)})`);
  
  console.log(`\n📋 Files to keep in repo (< ${SIZE_THRESHOLD/1024}KB or identity files):`);
  for (const file of toKeep) {
    console.log(`   ✓ ${file.publicPath} (${formatSize(file.size)})`);
  }
  
  console.log(`\n📦 Checking R2 bucket...`);
  const existingKeys = await listR2Objects();
  console.log(`   Found ${existingKeys.size} objects already in R2`);
  
  const missing = toUpload.filter(f => !existingKeys.has(f.r2Key));
  const alreadyPresent = toUpload.filter(f => existingKeys.has(f.r2Key));
  
  console.log(`   Missing: ${missing.length} files`);
  console.log(`   Already present: ${alreadyPresent.length} files`);
  
  if (missing.length > 0) {
    console.log(`\n⚠️  R2 upload requires authentication`);
    console.log(`   Use wrangler or Cloudflare API to upload:`);
    console.log(`   Files to upload saved to /tmp/r2-upload-list.txt`);
    
    const fs = await import('fs/promises');
    await fs.writeFile('/tmp/r2-upload-list.txt', 
      missing.map(f => `${f.localPath} -> ${f.r2Key}`).join('\n')
    );
  }
  
  // Verify some CDN URLs
  console.log(`\n🌐 Verifying CDN URLs (sample)...`);
  const sampleFiles = alreadyPresent.slice(0, 5);
  for (const file of sampleFiles) {
    const ok = await verifyCdnUrl(file.r2Key);
    console.log(`   ${ok ? '✓' : '✗'} ${CDN_URL}/${file.r2Key}`);
  }
  
  // Output files to remove
  console.log(`\n🗑️  Files to remove from git (after R2 upload):`);
  console.log(`   Total: ${toUpload.length} files`);
  
  const fs = await import('fs/promises');
  await fs.writeFile('/tmp/r2-files-to-remove.txt', 
    toUpload.map(f => f.publicPath).join('\n')
  );
  console.log(`   List saved to: /tmp/r2-files-to-remove.txt`);
}

main().catch(console.error);
