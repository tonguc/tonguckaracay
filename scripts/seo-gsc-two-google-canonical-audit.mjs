// Read-only live review of the two GSC "Google chose a different canonical" URLs.
// Google's selected canonical is NOT exposed by this script; the GSC sample
// export only provides the URL and historical last-crawl date.
const origin = "https://tonguckaracay.com";
const pairs = [
  {source:"/en/on-page-seo-complete-guide",en:"/en/on-page-seo-complete-guide",tr:"/site-ici-seo-nasil-yapilir",lastGscCrawl:"2026-06-04"},
  {source:"/en/importance-of-quality-original-content-for-seo/",en:"/en/importance-of-quality-original-content-for-seo",tr:"/kaliteli-ve-ozgun-icerigin-seo-icin-onemi",lastGscCrawl:"2026-04-21"}
];
const htmlAttr=(tag,name)=>tag.match(new RegExp("\\b"+name+"\\s*=\\s*[\"']([^\"']+)[\"']", "i"))?.[1]||null;
const tags=html=>(html.match(/<link\b[^>]*>/gi)||[]);
const normalize=url=>{const u=new URL(url,origin);return u.origin+u.pathname.replace(/\/$/,"")+u.search;};
const headers={"user-agent":"Tonguc-GSC-Canonical-2-Audit/1.0"};
async function get(url){
 const r=await fetch(url,{headers,redirect:"manual",signal:AbortSignal.timeout(14000)});
 return {r,html:await r.text()};
}
async function follow(path){
 let current=new URL(path,origin),first=null;
 const hops=[],visited=new Set();
 for(let i=0;i<6;i++){
  if(visited.has(current.href))return {error:"redirect loop",hops};
  visited.add(current.href);
  const {r,html}=await get(current.href);
  if(first===null)first=r.status;
  hops.push({path:current.pathname,status:r.status});
  if([301,302,303,307,308].includes(r.status)){
   const loc=r.headers.get("location");
   if(!loc)return {error:"missing Location",hops};
   const next=new URL(loc,current);
   if(next.origin!==origin)return {error:"off-site redirect",hops};
   current=next;continue;
  }
  const links=tags(html),canonicalTag=links.find(x=>(htmlAttr(x,"rel")||"").toLowerCase()==="canonical");
  const alternate=links.filter(x=>(htmlAttr(x,"rel")||"").toLowerCase()==="alternate").map(x=>({hreflang:htmlAttr(x,"hreflang"),href:htmlAttr(x,"href")}));
  const robots=(html.match(/<meta\b[^>]*>/gi)||[]).filter(x=>["robots","googlebot"].includes((htmlAttr(x,"name")||"").toLowerCase())).map(x=>htmlAttr(x,"content")||"").join(";");
  return {first,hops,status:r.status,finalPath:current.pathname,canonical:canonicalTag?htmlAttr(canonicalTag,"href"):null,alternate,htmlLang:html.match(/<html\b[^>]*\blang=["']([^"']+)/i)?.[1]||null,robots,xRobots:r.headers.get("x-robots-tag")||""};
 }
 return {error:"too many redirects",hops};
}
const sitemap=await get(origin+"/sitemap.xml");
if(sitemap.r.status!==200)throw new Error("sitemap HTTP "+sitemap.r.status);
const sitemapSet=new Set([...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>normalize(x[1].replaceAll("&amp;","&"))));
const records=[],issues=[];
for(const pair of pairs){
 try{
  const en=await follow(pair.source),tr=await follow(pair.tr);
  const expectedEN=normalize(pair.en),expectedTR=normalize(pair.tr);
  const problems=[];
  if(en.error)problems.push("EN "+en.error);
  if(tr.error)problems.push("TR "+tr.error);
  if(en.status!==200)problems.push("EN terminal HTTP "+en.status);
  if(tr.status!==200)problems.push("TR terminal HTTP "+tr.status);
  if(en.finalPath && normalize(en.finalPath)!==expectedEN)problems.push("EN unexpected terminal path");
  if(tr.finalPath && normalize(tr.finalPath)!==expectedTR)problems.push("TR unexpected terminal path");
  if(normalize(en.canonical||"/MISSING")!==expectedEN)problems.push("EN wrong self canonical");
  if(normalize(tr.canonical||"/MISSING")!==expectedTR)problems.push("TR wrong self canonical");
  if(en.htmlLang!=="en")problems.push("EN HTML lang="+en.htmlLang);
  if(tr.htmlLang!=="tr")problems.push("TR HTML lang="+tr.htmlLang);
  if(!sitemapSet.has(expectedEN))problems.push("EN missing in sitemap");
  if(!sitemapSet.has(expectedTR))problems.push("TR missing in sitemap");
  const hasAlt=(from,lang,target)=>(from.alternate||[]).some(a=>a.hreflang===lang && a.href && normalize(a.href)===target);
  if(!hasAlt(en,"tr",expectedTR))problems.push("EN does not link TR hreflang");
  if(!hasAlt(tr,"en",expectedEN))problems.push("TR does not link EN hreflang");
  if(/\bnoindex\b/i.test(en.robots+" "+en.xRobots))problems.push("EN noindex");
  if(/\bnoindex\b/i.test(tr.robots+" "+tr.xRobots))problems.push("TR noindex");
  const record={source:pair.source,lastGscCrawl:pair.lastGscCrawl,expectedEnglish:pair.en,expectedTurkish:pair.tr,en,tr,problems};
  records.push(record);if(problems.length)issues.push({source:pair.source,problems});
 }catch(e){issues.push({source:pair.source,error:String(e)})}
}
console.log(JSON.stringify({checked:2,passed:2-issues.length,failed:issues.length,records,issues,limits:"Google-selected canonical is not provided by URL export or live HTTP; GSC URL Inspection is required"},null,2));
if(issues.length)process.exitCode=1;
