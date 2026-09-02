#!/usr/bin/env node

/**
 * Upload files to R2 using S3-compatible API with @aws-sdk/client-s3
 * Usage: node scripts/upload-to-r2.mjs
 */

import { S3Client, PutObjectCommand, ListObjectsV2Command, HeadObjectCommand } from '@aws-sdk/client-s3';
import { readFile } from 'fs/promises';
import { readFileSync } from 'fs';

const ACCOUNT_ID = 'faae494a756090f5f9c0ad7b8d1ddb88';
const BUCKET_NAME = 'wherewindsmeet';

// R2 credentials should be provided via environment variables:
// R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
  console.error('❌ R2 credentials not found in environment variables');
  console.error('   Set R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY');
  console.error('\n   You can create R2 API tokens at:');
  console.error(`   https://dash.cloudflare.com/${ACCOUNT_ID}/r2/api-tokens`);
  process.exit(1);
}

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

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

async function listExistingObjects() {
  console.log('📦 Checking existing objects in R2...');
  const existing = new Set();
  
  try {
    let continuationToken = undefined;
    let totalCount = 0;
    
    do {
      const command = new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        MaxKeys: 1000,
        ContinuationToken: continuationToken,
      });
      
      const response = await s3Client.send(command);
      
      if (response.Contents) {
        for (const obj of response.Contents) {
          existing.add(obj.Key);
          totalCount++;
        }
      }
      
      continuationToken = response.NextContinuationToken;
    } while (continuationToken);
    
    console.log(`   Found ${totalCount} objects in R2\n`);
    return existing;
  } catch (error) {
    console.error('   ⚠️  Failed to list objects:', error.message);
    return existing;
  }
}

async function uploadFile(localPath, r2Key) {
  const content = await readFile(localPath);
  const contentType = getContentType(r2Key);
  
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: r2Key,
    Body: content,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000',
  });
  
  await s3Client.send(command);
}

async function main() {
  console.log('🚀 R2 Upload Script\n');
  
  // Read upload list
  const uploadList = readFileSync('/tmp/r2-upload-list.txt', 'utf-8')
    .trim()
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      const [localPath, r2Key] = line.split(' -> ');
      return { localPath, r2Key };
    });
  
  console.log(`📋 Found ${uploadList.length} files to upload\n`);
  
  // Check existing objects
  const existing = await listExistingObjects();
  
  // Filter out already-uploaded files
  const toUpload = uploadList.filter(f => !existing.has(f.r2Key));
  const alreadyPresent = uploadList.filter(f => existing.has(f.r2Key));
  
  console.log(`📊 Status:`);
  console.log(`   Already in R2: ${alreadyPresent.length} files`);
  console.log(`   Need to upload: ${toUpload.length} files\n`);
  
  if (toUpload.length === 0) {
    console.log('✅ All files already in R2!');
    return;
  }
  
  // Upload files
  console.log(`📤 Uploading ${toUpload.length} files...\n`);
  
  let uploaded = 0;
  let failed = 0;
  const failures = [];
  
  for (const file of toUpload) {
    try {
      await uploadFile(file.localPath, file.r2Key);
      uploaded++;
      
      if (uploaded % 50 === 0) {
        console.log(`   ✓ Uploaded ${uploaded}/${toUpload.length} files...`);
      }
    } catch (error) {
      failed++;
      failures.push({ file: file.r2Key, error: error.message });
      console.error(`   ✗ Failed: ${file.r2Key} - ${error.message}`);
    }
  }
  
  console.log(`\n✅ Upload complete!`);
  console.log(`   Uploaded: ${uploaded} files`);
  console.log(`   Failed: ${failed} files`);
  
  if (failures.length > 0) {
    console.log(`\n❌ Failures:`);
    for (const f of failures) {
      console.log(`   ${f.file}: ${f.error}`);
    }
  }
}

main().catch(console.error);
