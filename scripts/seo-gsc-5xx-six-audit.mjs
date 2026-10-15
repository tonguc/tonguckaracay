// Read-only regression of the six 5xx URL samples exported from GSC on 2026-10-15.
// Historical last crawl dates (Apr–Jun) must not be confused with today's HTTP status.
const base = 'https://tonguckaracay.com';
const targets = [
  ['/kullanim-kosullari','/terms-of-service'],
  ['/google-ads-kampanya-optimizasyonu-rehberi','/google-ads-kampanya-optimizasyonu-rehberi'],
  ['/ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir','/ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir'],
  ['/e-ticaret-yerel-seo-rehberi','/e-ticaret-yerel-seo-rehberi'],
  ['/ucretsiz-turkce-yapay-zeka-araclari-e-ticaret','/ucretsiz-turkce-yapay-zeka-araclari-e-ticaret'],
  ['/google-analytics-ile-site-optimizasyonu/','/google-analytics-ile-site-optimizasyonu']
];
const attr=(tag,name)=>tag.match(new RegExp('\\b'+name+'\\s*=\\s*["\\x27]([^"\\x27]+)["\\x27]','i'))?.[1]||null;
const canon=(html)=>{
  for (const tag of html.match(/<link\b[^>]*>/gi)||[]) {
    if ((attr(tag,'rel')||'').toLowerCase()==='canonical') return attr(tag,'href');
  }
  return null;
};
const problems=[],results=[];
for (const [path, expected] of targets) {
  let current=new URL(path,base), hops=0, original=null, final=null, issue=null;
  const chain=[],seen=new Set();
  try {
    for (let n=0;n<7;n++) {
      if (seen.has(current.href)) {issue='redirect loop';break;}
      seen.add(current.href);
      const response=await fetch(current,{redirect:'manual',headers:{'user-agent':'Tonguc-GSC-5xx-Regression/1.0'},signal:AbortSignal.timeout(14000)});
      const html=await response.text();
      if(original===null)original=response.status;
      chain.push({path:current.pathname,status:response.status,location:response.headers.get('location')});
      if([301,302,303,307,308].includes(response.status)) {
        const loc=response.headers.get('location');
        if(!loc){issue='redirect without Location';break;}
        const next=new URL(loc,current);
        if(next.origin!==base){issue='off-domain redirect';break;}
        current=next;hops++;continue;
      }
      final={status:response.status,path:current.pathname,canonical:canon(html),robots:response.headers.get('x-robots-tag')||''};
      break;
    }
    if(!final&&!issue)issue='excessive redirect chain';
    if(final) {
      if(final.status!==200)issue='final HTTP '+final.status;
      else if(final.path.replace(/\/$/,'')!==expected)issue='wrong final path '+final.path+' expected '+expected;
      else if(!final.canonical||new URL(final.canonical,base).pathname.replace(/\/$/,'')!==expected)issue='canonical mismatch: '+final.canonical;
      else if(/\bnoindex\b/i.test(final.robots))issue='X-Robots-Tag noindex';
    }
  } catch(e){issue='network '+String(e);}
  const result={path,initialStatus:original,hops,final,chain,issue};
  results.push(result);
  if(issue)problems.push(result);
}
console.log(JSON.stringify({checked:targets.length,passed:targets.length-problems.length,failed:problems.length,results},null,2));
if(problems.length)process.exitCode=1;
