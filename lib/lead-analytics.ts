"use client";

/**
 * GA4 event contract. Only static, non-personal values may be passed here:
 * no names, emails, telephone numbers, free-text messages or submitted URLs.
 * Events are only sent through the site's existing gtag configuration.
 */
export type LeadEventName =
  | "contact_form_started"
  | "contact_form_failed"
  | "contact_channel_click"
  | "generate_lead";

export type LeadEventParams = {
  locale: "tr" | "en";
  method: "form" | "whatsapp" | "booking" | "email";
  lead_type?: "general" | "pre_audit" | "ai_training";
  result?: "api_rejected" | "network_error";
};

export function trackLeadEvent(eventName: LeadEventName, params: LeadEventParams): void {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & {
    gtag?: (command: string, name: string, parameters: LeadEventParams) => void;
  }).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }
}
