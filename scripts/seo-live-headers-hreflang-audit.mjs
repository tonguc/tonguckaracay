// Read-only live diagnostic for response headers and hreflang relationships.
// This complements code-level locale mapping tests and the sitemap self-canonical audit.
const base="https://tonguckaracay.com";
const normalized=(s)=>{const u=new URL(s,base);return u.origin+u.pathname.replace(/\/$/,"")+u.search;};
const attr=(tag,name)=>tag.match(new RegExp("\\b"+name+"\\s*=\\s*[\"']([^\"']+)[\"']","i"))?.[1]||null;
async function request(url){
  const res=await fetch(url,{redirect:"manual",headers:{"user-agent":"Tonguc-SEO-Live-Hreflang-Audit/1.0"},signal:AbortSignal.timeout(15000)});
  return {res,html:await res.text()};
}
const sm=await request(base+"/sitemap.xml");
if(sm.res.status!==200)throw Error("Sitemap HTTP "+sm.res.status);
const urls=[...sm.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>normalized(x[1].replaceAll("&amp;","&")));
const known=new Set(urls), results=new Map(),problems=[],warnings=[];
let cursor=0;
async function worker(){
  while(cursor<urls.length){
    const url=urls[cursor++];
    try{
      const {res,html}=await request(url);
      if(res.status!==200){problems.push({url,error:"HTTP "+res.status});continue;}
      const htmlTag=html.match(/<html\b[^>]*>/i)?.[0]||"";
      const lang=attr(htmlTag,"lang");
      const expected=new URL(url).pathname.startsWith("/en")?"en":"tr";
      if(lang!==expected)problems.push({url,error:"HTML lang "+lang+" expected "+expected});
      const xRobots=res.headers.get("x-robots-tag");
      if(/\bnoindex\b/i.test(xRobots||"")) problems.push({url,error:"X-Robots-Tag noindex"});
      const alternates=[];
      for(const tag of html.match(/<link\b[^>]*>/gi)||[]){
        if((attr(tag,"rel")||"").toLowerCase()!=="alternate")continue;
        const language=attr(tag,"hreflang"),href=attr(tag,"href");
        if(!language||!href)continue;
        const target=normalized(href);
        alternates.push({lang:language,target});
        if(!known.has(target))problems.push({url,error:"hreflang "+language+" target missing sitemap: "+target});
      }
      results.set(url,{lang,alternates});
    }catch(e){problems.push({url,error:"fetch failure: "+String(e)});}
  }
}
await Promise.all(Array.from({length:6},()=>worker()));
for(const [url,{alternates}]of results){
  for(const alternate of alternates){
    if(alternate.lang==="x-default")continue;
    const target=results.get(alternate.target);
    if(!target)continue;
    const reciprocal=target.alternates.find(a=>a.lang===results.get(url).lang && a.target===url);
    if(!reciprocal)warnings.push({url,error:"No reciprocal "+results.get(url).lang+" alternate on "+alternate.target});
  }
}
const files={};
for(const path of ["/robots.txt","/llms.txt","/llms-full.txt"]){
  try {const res=await request(base+path);files[path]={status:res.res.status,contentType:res.res.headers.get("content-type")};}
  catch(e){files[path]={error:String(e)};}
}
const summary={sitemapUrls:urls.length,inspected:results.size,criticalIssues:problems.length,reciprocalWarnings:warnings.length,problems:problems.slice(0,40),warnings:warnings.slice(0,45),fileStatus:files};
console.log(JSON.stringify(summary,null,2));
// Diagnostic only: no index/noindex, hreflang and X-Robots anomalies are
// reported for review; no automatic changes to the site's SEO policy here.
