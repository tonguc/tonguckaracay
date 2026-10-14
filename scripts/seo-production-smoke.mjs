// Read-only production diagnostic. It does not modify any URL or GSC property.
const base = 'https://tonguckaracay.com';
const pages = [
  ['/', '/'],
  ['/en', '/en'],
  ['/hakkimda', '/hakkimda'],
  ['/en/about', '/en/about'],
  ['/iletisim', '/iletisim'],
  ['/en/contact', '/en/contact'],
  ['/blog', '/blog'],
  ['/en/blog', '/en/blog'],
  ['/ai-egitimi', '/ai-egitimi'],
  ['/en/ai-training', '/en/ai-training'],
  ['/hizmetler/seo-danismanligi', '/hizmetler/seo-danismanligi'],
  ['/en/services/seo-consulting', '/en/services/seo-consulting'],
  ['/e-ticaret-yerel-seo-rehberi', '/e-ticaret-yerel-seo-rehberi'],
  ['/en/local-seo-for-ecommerce-guide', '/en/local-seo-for-ecommerce-guide'],
];
const redirects = [
  ['/en/hakkimda', '/en/about'],
  ['/about', '/hakkimda'],
  ['/en/ai-egitimi', '/en/ai-training'],
  ['/services/seo-consulting', '/hizmetler/seo-danismanligi'],
];
const problems = [];
const results = [];

async function request(path) {
  const response = await fetch(base + path, {
    redirect: 'manual',
    signal: AbortSignal.timeout(15000),
    headers: {'user-agent': 'Tonguc-SEO-Integrity/1.0'},
  });
  return {response, text: await response.text()};
}
function attr(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, 'i'))?.[1];
}
function canonical(html) {
  const links = html.match(/<link\b[^>]*>/gi) || [];
  return links.find(link => (attr(link, 'rel') || '').toLowerCase() === 'canonical');
}
for (const [path, expected] of pages) {
  try {
    const {response, text} = await request(path);
    const href = canonical(text);
    const actual = href ? attr(href, 'href') : null;
    const canonicalUrl = actual ? new URL(actual, base) : null;
    const success = response.status === 200 && canonicalUrl?.origin === base && canonicalUrl.pathname === expected;
    results.push({path, status: response.status, canonical: actual, pass: success});
    if (!success) problems.push(`${path}: ${response.status}, canonical=${actual}`);
  } catch (error) {
    problems.push(`${path}: ${String(error)}`);
  }
}
for (const [from, to] of redirects) {
  try {
    const {response} = await request(from);
    const loc = response.headers.get('location') || '';
    const success = [301, 308].includes(response.status) && new URL(loc, base).pathname === to;
    results.push({path: from, status: response.status, location: loc, pass: success});
    if (!success) problems.push(`${from}: expected permanent redirect to ${to}; got ${response.status} ${loc}`);
  } catch (error) {
    problems.push(`${from}: ${String(error)}`);
  }
}
try {
  const {response, text} = await request('/robots.txt');
  const success = response.status === 200 && !/^Disallow:\s*\/_next\//m.test(text);
  results.push({path:'/robots.txt',status:response.status,pass:success});
  if (!success) problems.push('robots.txt blocked /_next/ or failed');
} catch (error) {
  problems.push(`robots.txt: ${String(error)}`);
}
console.log(JSON.stringify({checked:results.length,passed:results.filter(r=>r.pass).length,results,problems},null,2));
if (problems.length) process.exitCode = 1;
