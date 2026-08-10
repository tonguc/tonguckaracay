// Single source of truth for the Finance OS product page's "Buy" link.
// null = no live Etsy listing yet, the Buy button renders as a disabled
// "Coming soon" state. Set to the real listing URL once it's published -
// both the TR and EN product pages read from here, nothing else to update.
export const FINANCE_OS_ETSY_URL: string | null = null;

// Must be the exact file path, not a directory-style URL ("/demos/finance-os/")
// - the latter falls through past Next's static file server into the app
// router's dynamic [locale]/[slug] matching and 500s at runtime (found live:
// "Page changed from static to dynamic at runtime /demos/finance-os"). The
// explicit /index.html resolves directly as a static public/ asset, no
// middleware/routing ambiguity.
export const FINANCE_OS_DEMO_URL = "/demos/finance-os/index.html";
