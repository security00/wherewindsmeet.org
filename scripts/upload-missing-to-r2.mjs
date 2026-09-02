#!/usr/bin/env node

/**
 * Upload specific files to R2
 * Usage: node scripts/upload-missing-to-r2.mjs
 */

import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import { readFile } from 'fs/promises';

const ACCOUNT_ID = 'faae494a756090f5f9c0ad7b8d1ddb88';
const BUCKET_NAME = 'wherewindsmeet';
const CDN_URL = 'https://static.wherewindsmeet.org';

// Files to upload
const FILES_TO_UPLOAD = [
  {
    localPath: '/workspace/public/guides/jiangnan-hangzhou/hero-640.webp',
    r2Key: 'guides/jiangnan-hangzhou/hero-640.webp',
  },
  {
    localPath: '/workspace/public/guides/jiangnan-hangzhou/hero-960.webp',
    r2Key: 'guides/jiangnan-hangzhou/hero-960.webp',
  },
  {
    localPath: '/workspace/public/guides/jiangnan-hangzhou/hero-1440.webp',
    r2Key: 'guides/jiangnan-hangzhou/hero-1440.webp',
  },
  {
    localPath: '/workspace/public/guides/npc-list/wobbly-tang.png',
    r2Key: 'guides/npc-list/wobbly-tang.png',
  },
];

const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
  console.error('❌ R2 credentials not found in environment variables');
  console.error('   Set R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY');
  console.error('\n   You can create R2 API tokens at:');
  console.error(`   https://dash.cloudflare.com/${ACCOUNT_ID}/r2/api-tokens`);
  console.error('\n   For this cloud agent, add them as secrets in Cursor Dashboard:');
  console.error('   Cloud Agents > Secrets > Add Secret');
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
  };
  return types[ext] || 'application/octet-stream';
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

async function verifyCdnUrl(r2Key) {
  const url = `${CDN_URL}/${r2Key}`;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return { url, status: response.status, ok: response.ok };
  } catch (error) {
    return { url, status: 'ERROR', ok: false, error: error.message };
  }
}

async function checkIfExists(r2Key) {
  try {
    const command = new HeadObjectCommand({
      Bucket: BUCKET_NAME,
      Key: r2Key,
    });
    await s3Client.send(command);
    return true;
  } catch (error) {
    if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) {
      return false;
    }
    throw error;
  }
}

async function main() {
  console.log('🚀 Uploading Missing Files to R2\n');
  
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const file of FILES_TO_UPLOAD) {
    console.log(`\n📤 Processing: ${file.r2Key}`);
    
    try {
      // Check if already exists
      const exists = await checkIfExists(file.r2Key);
      
      if (exists) {
        console.log(`   ⏭️  Already exists in R2, skipping upload`);
        skipped++;
      } else {
        // Upload
        await uploadFile(file.localPath, file.r2Key);
        console.log(`   ✓ Uploaded successfully`);
        uploaded++;
      }
      
      // Verify CDN
      console.log(`   🌐 Verifying CDN...`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for CDN propagation
      
      const cdnResult = await verifyCdnUrl(file.r2Key);
      if (cdnResult.ok) {
        console.log(`   ✓ CDN accessible: ${cdnResult.url}`);
      } else {
        console.log(`   ⚠️  CDN status ${cdnResult.status}: ${cdnResult.url}`);
      }
      
    } catch (error) {
      console.error(`   ✗ Failed: ${error.message}`);
      failed++;
    }
  }
  
  console.log(`\n\n📊 Summary:`);
  console.log(`   Uploaded: ${uploaded} files`);
  console.log(`   Skipped (already exist): ${skipped} files`);
  console.log(`   Failed: ${failed} files`);
  
  if (failed === 0 && (uploaded + skipped === FILES_TO_UPLOAD.length)) {
    console.log(`\n✅ All files ready on CDN!`);
    console.log(`\n📋 CDN URLs:`);
    for (const file of FILES_TO_UPLOAD) {
      console.log(`   ${CDN_URL}/${file.r2Key}`);
    }
  }
}

main().catch(console.error);
