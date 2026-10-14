// Live, read-only audit of 79 GSC historical URL samples (October 2026).
// These were previously "Crawled - currently not indexed"; this does NOT
// provide present-day Google-selected canonical or index status.
import {readFileSync} from "node:fs";

const origin = "https://tonguckaracay.com";
const {paths} = JSON.parse(readFileSync(new URL("./seo-historical-gsc-urls.json", import.meta.url), "utf8"));
const agent = {"user-agent": "Tonguc-Historical-GSC-Audit/1.0"};
const counts = {direct: 0, redirected: 0, firstStatuses: {}, maxHops: 0};
const failures = [];
const results = [];
const hopsDistribution = {};
const norm = (raw) => {const u = new URL(raw, origin);return u.origin + u.pathname.replace(/\/$/, "") + u.search;};
const attr = (tag, name) => tag.match(new RegExp("\\b"+name+"\\s*=\\s*[\"']([^\"']+)[\"']", "i"))?.[1] || null;
const canonical = (html) => {
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    if ((attr(tag, "rel") || "").toLowerCase() === "canonical") return attr(tag, "href");
  }
  return null;
};

async function get(url) {
  const r = await fetch(url,{headers:agent,redirect:"manual",signal:AbortSignal.timeout(15000)});
  return {r,html:await r.text()};
}

const sitemap = await get(origin + "/sitemap.xml");
if(sitemap.r.status !== 200) throw new Error("Sitemap HTTP "+sitemap.r.status);
const sitemapUrls = new Set([...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>norm(m[1].replaceAll("&amp;","&"))));
if(paths.length!==79||new Set(paths).size!==79)throw new Error("Historical sample set changed unexpectedly");

let next=0;
async function worker(){
  while(next<paths.length){
    const path=paths[next++];
    const seen = new Set();
    let current = origin+path;
    let first = null, redirects = 0, final = null, reason = null;
    try{
      for(let attempt=0;attempt<7;attempt++){
        if(seen.has(current)){reason="redirect loop";break;}
        seen.add(current);
        const {r,html}=await get(current);
        if(first===null)first=r.status;
        if([301,302,303,307,308].includes(r.status)){
          redirects++;
          const location=r.headers.get("location");
          if(!location){reason="redirect without Location";break;}
          const nextUrl=new URL(location,current);
          if(nextUrl.origin!==origin){reason="off-domain redirect to "+nextUrl.origin;break;}
          current=nextUrl.href;
          continue;
        }
        final={status:r.status,url:current,html,xRobots:r.headers.get("x-robots-tag")||""};
        break;
      }
      if(!final && !reason)reason="too many redirects";
      if(final){
        if(final.status!==200)reason="terminal HTTP "+final.status;
        if(!sitemapUrls.has(norm(final.url)))reason=reason||"terminal URL not in current sitemap";
        const href=canonical(final.html);
        if(!href || norm(href)!==norm(final.url)) reason=reason||("terminal canonical mismatch: "+String(href));
        if(/\bnoindex\b/i.test(final.xRobots))reason=reason||"terminal X-Robots-Tag: noindex";
      }
    }catch(e){reason="request failed: "+String(e);}
    const item={path,firstStatus:first,redirectHops:redirects,finalStatus:final?.status??null,finalPath:final?new URL(final.url).pathname:null,problem:reason};
    results.push(item);
    if(reason)failures.push(item);
    counts.firstStatuses[first??"unknown"]=(counts.firstStatuses[first??"unknown"]||0)+1;
    counts.maxHops=Math.max(counts.maxHops,redirects);
    hopsDistribution[redirects]=(hopsDistribution[redirects]||0)+1;
    if(redirects)counts.redirected++;else counts.direct++;
  }
}
await Promise.all(Array.from({length:6},()=>worker()));
const summary={sampleCount:paths.length,checked:results.length,passed:results.length-failures.length,failed:failures.length,...counts,redirectHops:hopsDistribution,problems:failures,advisories:{multiHop:results.filter(r=>r.redirectHops>1).map(r=>({path:r.path,hops:r.redirectHops,final:r.finalPath}))}};
console.log(JSON.stringify(summary,null,2));
if(failures.length)process.exitCode=1;
