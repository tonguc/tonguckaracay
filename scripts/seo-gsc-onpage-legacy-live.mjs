// Read-only test of old Google-selected canonical and current EN canonical.
const base="https://tonguckaracay.com";
const paths=["/on-page-seo-complete-guide","/on-page-seo-complete-guide/"];
const results=[],failures=[];
const attr=(tag,name)=>tag.match(new RegExp("\\b"+name+"\\s*=\\s*[\"']([^\"']+)[\"']","i"))?.[1]||null;
for(const path of paths){
 let current=new URL(path,base),chain=[],final=null,reason=null,seen=new Set();
 try {
  for(let i=0;i<6;i++){
   if(seen.has(current.href)){reason="loop";break;}
   seen.add(current.href);
   const r=await fetch(current,{redirect:"manual",headers:{"user-agent":"Tonguc-GSC-Old-Canonical-2026"},signal:AbortSignal.timeout(16000)});
   const html=await r.text();
   chain.push({path:current.pathname,status:r.status,location:r.headers.get("location")});
   if([301,302,303,307,308].includes(r.status)){
    const loc=r.headers.get("location");if(!loc){reason="missing Location";break;}
    const next=new URL(loc,current);if(next.origin!==base){reason="off-origin";break;}
    current=next;continue;
   }
   const links=html.match(/<link\b[^>]*>/gi)||[];
   const c=links.find(tag=>(attr(tag,"rel")||"").toLowerCase()==="canonical");
   final={path:current.pathname,status:r.status,canonical:c?attr(c,"href"):null};
   break;
  }
  if(!final)reason ||= "no terminal response";
  else if(final.status!==200||final.path!=="/en/on-page-seo-complete-guide"||final.canonical!==base+"/en/on-page-seo-complete-guide"){
   reason="old English URL did not land on EN self-canonical";
  }
 }catch(e){reason=String(e);}
 results.push({path,chain,final,reason});if(reason)failures.push(path);
}
console.log(JSON.stringify({checked:paths.length,passed:paths.length-failures.length,failed:failures.length,results},null,2));
if(failures.length)process.exitCode=1;
