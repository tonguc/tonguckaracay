// Read-only sitemap audit. Fetches declared indexable URLs and compares HTTP status,
// canonical metadata and robots directives. Does not change the website or GSC.
const origin = 'https://tonguckaracay.com';
const headers = {'user-agent': 'Tonguc-SEO-Sitemap-Audit/1.0'};
async function get(url) {
  const response = await fetch(url, {
    headers, redirect: 'manual', signal: AbortSignal.timeout(12000),
  });
  return {response, html: await response.text()};
}
function attr(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, 'i'))?.[1] || null;
}
function findTag(html, element, name, value) {
  const tags = html.match(new RegExp(`<${element}\\b[^>]*>`, 'gi')) || [];
  return tags.find(tag => (attr(tag, name) || '').toLowerCase() === value);
}
function normalizedUrl(input) {
  try {
    const u = new URL(input, origin);
    return u.origin + u.pathname.replace(/\/$/, '') + u.search;
  } catch {return null;}
}
const sitemapResult = await get(origin + '/sitemap.xml');
if (sitemapResult.response.status !== 200) {
  console.error('Sitemap unavailable:', sitemapResult.response.status);
  process.exitCode = 1;
} else {
  const urls = [...sitemapResult.html.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1].replace(/&amp;/g, '&').trim());
  const seen = new Set();
  const problems = [];
  const results = [];
  for (const url of urls) {
    if (seen.has(url)) problems.push({url,problem:'duplicate sitemap URL'});
    seen.add(url);
    if (!url.startsWith(origin + '/')) {
      // The homepage without trailing slash is also valid.
      if (url !== origin) problems.push({url,problem:'off-domain sitemap entry'});
    }
  }
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < urls.length) {
      const url = urls[nextIndex++];
      try {
        const {response, html} = await get(url);
        const canonicalTag = findTag(html, 'link', 'rel', 'canonical');
        const canonical = canonicalTag ? attr(canonicalTag, 'href') : null;
        const robotTags = (html.match(/<meta\b[^>]*>/gi) || [])
          .filter(tag => (attr(tag, 'name') || '').toLowerCase() === 'robots');
        const noindex = robotTags.some(tag => /\bnoindex\b/i.test(attr(tag, 'content') || ''));
        const expected = normalizedUrl(url);
        const actual = canonical ? normalizedUrl(canonical) : null;
        const faults = [];
        if (response.status !== 200) faults.push('HTTP '+response.status);
        if (!canonical) faults.push('missing canonical');
        else if (actual !== expected) faults.push('canonical differs: '+canonical);
        if (noindex) faults.push('noindex in sitemap');
        results.push({url,status:response.status,canonical,robotsNoindex:noindex,problems:faults});
        if (faults.length) problems.push({url,problems:faults});
      } catch (e) { problems.push({url,problems:['fetch: '+String(e)]}); }
    }
  }
  await Promise.all(Array.from({length:4},()=>worker()));
  const summary={
    checked:urls.length,
    unique:seen.size,
    passed:urls.length - new Set(problems.map(p=>p.url)).size,
    failed:new Set(problems.map(p=>p.url)).size,
    statusCounts:results.reduce((acc,r)=>(acc[r.status]=(acc[r.status]||0)+1,acc),{}),
    problems,
  };
  console.log(JSON.stringify(summary,null,2));
  if(problems.length)process.exitCode=1;
}
