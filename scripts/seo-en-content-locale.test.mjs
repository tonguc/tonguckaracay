import test from "node:test";
import assert from "node:assert/strict";
import {readdirSync, readFileSync} from "node:fs";
import {join} from "node:path";

const dir = "content/blog/en";
const legacyPaths = new Set(["/contact", "/services/ui-ux-design"]);

test("English blog CTAs do not point to legacy wrong-locale contact or service aliases", () => {
  const offenders = [];
  for (const file of readdirSync(dir).filter(f => f.endsWith(".md"))) {
    const markdown = readFileSync(join(dir, file), "utf8");
    for (const match of markdown.matchAll(/\]\((\/[^)\s]+)\)/g)) {
      const path = match[1].split(/[?#]/)[0].replace(/\/$/, "") || "/";
      if (legacyPaths.has(path)) offenders.push(file + ": " + path);
    }
  }
  assert.deepEqual(offenders, [], "Wrong-locale content links: " + offenders.join(", "));
});

test("English blog contact and service targets use existing canonical locale route pairs", () => {
  const pairs = JSON.parse(readFileSync("lib/locale-route-pairs.json", "utf8"));
  const canonicalEnglish = new Set(pairs.map(pair => pair[1]));
  assert.ok(canonicalEnglish.has("/en/contact"));
  assert.ok(canonicalEnglish.has("/en/services/ui-ux-design"));
});
