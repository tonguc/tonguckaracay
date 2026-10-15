import assert from "node:assert/strict";
import test from "node:test";
import {readFileSync} from "node:fs";

const configSource=readFileSync("next.config.js","utf8");
const sitemap=readFileSync("app/sitemap.ts","utf8");
const six=readFileSync("scripts/seo-gsc-5xx-six-audit.mjs","utf8");

test("GSC's historical Turkish legal URL redirects permanently to the correct canonical",()=>{
  assert.match(configSource,/source: '\/kullanim-kosullari', destination: '\/terms-of-service', permanent: true/);
  assert.match(sitemap,/\$\{baseUrl\}\/terms-of-service/);
  assert.doesNotMatch(sitemap,/\$\{baseUrl\}\/kullanim-kosullari/);
});

test("live regression retains exactly the six source-supplied historical URLs",()=>{
  for(const path of [
    "/kullanim-kosullari",
    "/google-ads-kampanya-optimizasyonu-rehberi",
    "/ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir",
    "/e-ticaret-yerel-seo-rehberi",
    "/ucretsiz-turkce-yapay-zeka-araclari-e-ticaret",
    "/google-analytics-ile-site-optimizasyonu/",
  ]) assert.ok(six.includes(path),path);
});
