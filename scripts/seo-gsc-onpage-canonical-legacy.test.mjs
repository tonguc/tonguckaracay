import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, existsSync} from "node:fs";
const config=readFileSync("next.config.js","utf8");
const middleware=readFileSync("middleware.ts","utf8");
const slugMapping=readFileSync("lib/slug-mappings.ts","utf8");

test("Google-selected old English root slug redirects permanently to English canonical",()=>{
  assert.match(config,/source: '\/on-page-seo-complete-guide', destination: '\/en\/on-page-seo-complete-guide', permanent: true/);
  assert.equal((config.match(/source: '\/on-page-seo-complete-guide'/g)||[]).length,1);
  assert.ok(existsSync("content/blog/en/on-page-seo-complete-guide.md"));
  assert.match(slugMapping,/"site-ici-seo-nasil-yapilir": "on-page-seo-complete-guide"/);
  assert.match(middleware,/slugMappingEnToTr/);
});
