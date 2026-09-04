/* eslint-disable @typescript-eslint/no-require-imports */
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(path.join(process.cwd(), ".env.local"));

const accessKeyId = process.env.R2_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;
const endpoint = process.env.R2_S3_ENDPOINT || process.env.AWS_ENDPOINT_URL_S3;
const bucket = process.env.R2_BUCKET || "wherewindsmeet";

if (!accessKeyId || !secretAccessKey || !endpoint) {
  throw new Error("Missing R2 credentials in .env.local");
}

const s3Client = new S3Client({
  endpoint,
  credentials: { accessKeyId, secretAccessKey },
  region: "auto",
});

const files = [
  "guides/drunken-fist/hero.jpg",
  "guides/reflection-temple/hero.jpg",
  "guides/how-to-fly/hero.jpg",
  "guides/divinecraft-dungeons/hero.jpg",
  "guides/phasecycle/hero.jpg",
  "guides/zenithstride/hero.jpg",
  "guides/ephemeral-glory/hero.jpg",
  "guides/gauntlets/hero.jpg",
  "guides/mohist-hill/hero.jpg",
  "guides/mystic-arts/hero.jpg",
  "guides/inner-ways/hero.jpg",
  "guides/mirkvale/hero.jpg",
  "sect/mohist-hill.jpg",
  "martial-arts/weapons/skystrike-gauntlets.jpg",
];

async function main() {
  const publicDir = path.join(process.cwd(), "public");
  let ok = 0;
  let fail = 0;
  for (const relative of files) {
    const filePath = path.join(publicDir, relative);
    if (!fs.existsSync(filePath)) {
      console.error(`missing ${relative}`);
      fail += 1;
      continue;
    }
    const contentType = mime.lookup(filePath) || "image/jpeg";
    try {
      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: relative.replace(/\\/g, "/"),
          Body: fs.readFileSync(filePath),
          ContentType: contentType,
          CacheControl: "public, max-age=31536000, immutable",
        }),
      );
      console.log(`uploaded https://static.wherewindsmeet.org/${relative}`);
      ok += 1;
    } catch (error) {
      console.error(`failed ${relative}: ${error.message}`);
      fail += 1;
    }
  }
  console.log(`done ok=${ok} fail=${fail}`);
  if (fail) process.exit(1);
}

main();
