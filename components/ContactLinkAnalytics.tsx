"use client";

import { useEffect } from "react";
import { trackLeadEvent } from "@/lib/lead-analytics";

type Locale = "tr" | "en";

/**
 * Centralized click tracking avoids duplicate events from separately instrumented CTAs.
 * Does not read query parameters, email addresses, WhatsApp messages or other PII.
 */
export default function ContactLinkAnalytics({ locale }: { locale: Locale }) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      let method: "whatsapp" | "email" | "booking" | null = null;

      if (anchor.dataset.contactMethod === "booking") {
        method = "booking";
      } else if (href.toLowerCase().startsWith("mailto:")) {
        method = "email";
      } else {
        try {
          const url = new URL(href, window.location.href);
          if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") {
            method = "whatsapp";
          }
        } catch {
          // An unparseable link is not a measured contact channel.
        }
      }

      if (method) {
        trackLeadEvent("contact_channel_click", { locale, method });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [locale]);

  return null;
}
