// Post-deploy: submit every sitemap URL to IndexNow. Usage: npm run indexnow
import { readFileSync } from "node:fs";

const ORIGIN = process.env.SITE_ORIGIN || "https://wherewindsmeet.org";
const host = new URL(ORIGIN).host;
const fileKey = readFileSync(new URL("../src/lib/indexnow-key.ts", import.meta.url), "utf8").match(
  /"([a-f0-9]{8,128})"/,
)?.[1];
const key = process.env.INDEXNOW_KEY || fileKey;
if (!key) throw new Error("No IndexNow key");

const xml = await (
  await fetch(`${ORIGIN}/sitemap.xml`, {
    headers: { "user-agent": "wherewindsmeet-IndexNow/1.0" },
  })
).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (!urlList.length) throw new Error("Sitemap had no URLs");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
const body = await res.text();
if (body) console.log(body.slice(0, 500));
if (res.status !== 200 && res.status !== 202) process.exit(1);
