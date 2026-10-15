// Read-only crawl of every current sitemap page and its internal anchor destinations.
// Intended to expose broken routes, internal redirect chains and wrong-locale aliases.
// No credentials, user data, or private endpoints. Does NOT determine Google index status.
const base = "https://tonguckaracay.com";
const headers = {"user-agent":"Tonguc-SEO-Internal-Link-Audit/1.0"};
const get = async (url) => {
  const r = await fetch(url,{headers,redirect:"manual",signal:AbortSignal.timeout(14000)});
  return {response:r,body:await r.text()};
};
const canonicalize = (url) => {
  const u = new URL(url,base);
  u.hash = "";
  return u.href;
};
const site = new URL(base);
const isInScope = url => url.origin === site.origin && !/\.(?:png|jpe?g|webp|svg|gif|ico|css|js|woff2?|ttf|pdf|mp4|xml|txt|json|webmanifest)(?:$|\?)/i.test(url.pathname);
const matches = (html,pattern) => [...html.matchAll(pattern)].map(x=>x[1]);
const sitemap = await get(base+"/sitemap.xml");
if(sitemap.response.status!==200)throw Error("Sitemap HTTP "+sitemap.response.status);
const sitemapUrls=matches(sitemap.body,/<loc>([^<]+)<\/loc>/g).map(x=>x.replaceAll("&amp;","&"));
const problems=[],warnings=[],sources=new Map(),targetStatus=[];
let cursor=0;
async function crawlSitemap(){
  while(cursor<sitemapUrls.length){
    const from=sitemapUrls[cursor++];
    try {
      const {response,body}=await get(from);
      if(response.status!==200){problems.push({source:from,status:response.status,reason:"sitemap fetch failure"});continue;}
      const tags=body.match(/<a\b[^>]*>/gi)||[];
      for(const tag of tags){
        const raw=tag.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1];
        if(!raw||raw.startsWith("#")||raw.startsWith("mailto:")||raw.startsWith("tel:")||raw.startsWith("javascript:"))continue;
        let u;
        try{u=new URL(raw.replaceAll("&amp;","&"),from)}catch{continue;}
        if(!isInScope(u))continue;
        const key=canonicalize(u);
        if(!sources.has(key))sources.set(key,new Set());
        sources.get(key).add(new URL(from).pathname);
      }
    }catch(e){problems.push({source:from,reason:"source fetch: "+String(e)});}
  }
}
await Promise.all(Array.from({length:6},()=>crawlSitemap()));
const targets=[...sources.keys()];
let targetIndex=0;
async function probeTargets(){
  while(targetIndex<targets.length){
    const target=targets[targetIndex++];
    try{
      const seen=new Set();
      let url=target,firstStatus=null,hops=0,lastStatus=null,lastUrl=null;
      for(let i=0;i<7;i++){
        if(seen.has(url)){problems.push({target,reason:"redirect loop",sources:[...sources.get(target)].slice(0,8)});break;}
        seen.add(url);
        const {response}=await get(url);
        if(firstStatus===null)firstStatus=response.status;
        lastStatus=response.status;lastUrl=url;
        if([301,302,303,307,308].includes(response.status)){
          const location=response.headers.get("location");
          if(!location){problems.push({target,reason:"redirect lacks Location"});break;}
          const next=new URL(location,url);
          if(next.origin!==site.origin){warnings.push({target,reason:"redirect to external host",host:next.host});break;}
          hops++;url=next.href;
          continue;
        }
        if(response.status>=400)problems.push({target,reason:"HTTP "+response.status,sources:[...sources.get(target)].slice(0,8)});
        if(hops)warnings.push({target,hops,finalUrl:lastUrl,status:response.status,sources:[...sources.get(target)].slice(0,4)});
        break;
      }
      targetStatus.push({target,firstStatus,lastStatus,lastUrl,hops});
    }catch(e){problems.push({target,reason:"target fetch: "+String(e),sources:[...sources.get(target)].slice(0,8)});}
  }
}
await Promise.all(Array.from({length:8},()=>probeTargets()));
const redirectCounts={};for(const x of targetStatus)redirectCounts[x.hops]=(redirectCounts[x.hops]||0)+1;
const summary={sitemapPages:sitemapUrls.length,uniqueInternalTargets:targets.length,probed:targetStatus.length,broken:problems.length,redirectCounts,problems,warnings:warnings.slice(0,200)};
console.log(JSON.stringify(summary,null,2));
if(problems.length)process.exitCode=1;
