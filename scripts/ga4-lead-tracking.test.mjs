import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const contract = readFileSync("lib/lead-analytics.ts", "utf8");
const form = readFileSync("components/ContactForm.tsx", "utf8");
const whatsapp = readFileSync("components/WhatsAppFloat.tsx", "utf8");
const footer = readFileSync("components/Footer.tsx", "utf8");

test("analytics contract restricts event names and parameters to non-personal values", () => {
  for (const evt of ["contact_form_started", "contact_form_failed", "contact_channel_click", "generate_lead"]) {
    assert.ok(contract.includes('"' + evt + '"'), evt);
  }
  const eventFields = contract.split("export type LeadEventParams = {")[1]?.split("};")[0] || "";
  assert.ok(eventFields.includes("locale:") && eventFields.includes("method:"));
  assert.doesNotMatch(eventFields, /\b(name|email|phone|message|website|budget|traffic|goal)\s*:/);
  assert.match(contract, /typeof window === "undefined"/);
});

test("a lead is recorded only after API confirms success", () => {
  const accepted = form.indexOf("if (res.ok && data.success)");
  const lead = form.indexOf('trackLeadEvent("generate_lead"');
  const fail = form.indexOf('trackLeadEvent("contact_form_failed"');
  assert.ok(accepted > 0 && lead > accepted && fail > lead);
  assert.ok(form.includes('trackLeadEvent("contact_form_started"'));
  assert.doesNotMatch(form, /trackLeadEvent\("generate_lead"[^\n]*(email:|name:|phone:|website:)/);
});

test("external-channel clicks are micro-conversions, not leads", () => {
  assert.match(whatsapp, /trackLeadEvent\("contact_channel_click"/);
  assert.match(footer, /trackLeadEvent\("contact_channel_click"/);
  assert.match(form, /method: "booking"/);
  assert.doesNotMatch(whatsapp + footer, /trackLeadEvent\("generate_lead"/);
});
