'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */

const { existsSync, readFileSync } = require("node:fs");

const parseArgValue = (args, key) => {
  const index = args.indexOf(key);
  if (index === -1) return null;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) return null;
  return value;
};

const parseCsv = (source) => {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];
    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value);
  if (row.some((cell) => cell.trim())) rows.push(row);
  if (!rows.length) return [];

  const headers = rows[0].map((header) => header.trim().toLowerCase());
  return rows.slice(1).map((cells) =>
    Object.fromEntries(headers.map((header, index) => [header, cells[index]?.trim() ?? ""])),
  );
};

const toNumber = (value) => {
  const parsed = Number(String(value || "").replace(/[%,$,]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const getDimensionValue = (row, dimension) => {
  const candidates =
    dimension === "query"
      ? ["query", "queries", "top queries", "search query"]
      : ["page", "pages", "top pages", "landing page", "url"];
  return candidates.map((key) => row[key]).find((value) => value) || "";
};

const normalizeRow = (row, dimension) => {
  const clicks = toNumber(row.clicks);
  const impressions = toNumber(row.impressions);
  const ctr = row.ctr ? toNumber(row.ctr) / (String(row.ctr).includes("%") ? 100 : 1) : impressions ? clicks / impressions : 0;
  const position = toNumber(row.position);
  const value = getDimensionValue(row, dimension);
  return { value, clicks, impressions, ctr, position };
};

const scoreRow = (row) => {
  const demand = Math.log10(row.impressions + 10) * 20;
  const lowCtrOpportunity = row.impressions >= 500 && row.ctr < 0.03 ? 25 : 0;
  const strikingDistance = row.position >= 4 && row.position <= 20 ? 25 : row.position > 20 && row.position <= 40 ? 10 : 0;
  const existingClicks = Math.log10(row.clicks + 10) * 6;
  return Math.round(demand + lowCtrOpportunity + strikingDistance + existingClicks);
};

const rankRows = (rows, dimension) =>
  rows
    .map((row) => normalizeRow(row, dimension))
    .filter((row) => row.value && row.impressions > 0)
    .map((row) => ({ ...row, score: scoreRow(row) }))
    .sort((a, b) => b.score - a.score || b.impressions - a.impressions);

const formatTable = (title, rows) => {
  const lines = [`## ${title}`, "", "| Priority | Item | Clicks | Impressions | CTR | Position | Score |", "|---:|---|---:|---:|---:|---:|---:|"];
  rows.slice(0, 50).forEach((row, index) => {
    lines.push(
      `| ${index + 1} | ${row.value.replace(/\|/g, "\\|")} | ${row.clicks} | ${row.impressions} | ${(row.ctr * 100).toFixed(2)}% | ${row.position.toFixed(1)} | ${row.score} |`,
    );
  });
  return lines.join("\n");
};

const main = () => {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log(`GSC priority helper

Usage:
  node scripts/gsc-priority.cjs --queries path/to/queries.csv --pages path/to/pages.csv

Expected headers from Google Search Console export:
  Query/Page, Clicks, Impressions, CTR, Position

Output:
  Markdown priority tables printed to stdout.
`);
    return;
  }

  const queriesPath = parseArgValue(args, "--queries");
  const pagesPath = parseArgValue(args, "--pages");
  if (!queriesPath && !pagesPath) {
    throw new Error("Provide --queries and/or --pages CSV exports from Google Search Console.");
  }

  const sections = [];
  if (queriesPath) {
    if (!existsSync(queriesPath)) throw new Error(`Missing queries CSV: ${queriesPath}`);
    sections.push(formatTable("Query Opportunities", rankRows(parseCsv(readFileSync(queriesPath, "utf8")), "query")));
  }
  if (pagesPath) {
    if (!existsSync(pagesPath)) throw new Error(`Missing pages CSV: ${pagesPath}`);
    sections.push(formatTable("Page Opportunities", rankRows(parseCsv(readFileSync(pagesPath, "utf8")), "page")));
  }
  console.log(sections.join("\n\n"));
};

main();
