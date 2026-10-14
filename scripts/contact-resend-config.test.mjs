import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import test from "node:test";

const route = readFileSync("app/api/contact/route.ts", "utf8");
const env = readFileSync(".env.example", "utf8");

test("Resend sender can be configured without source changes", () => {
  assert.match(route, /process\.env\.RESEND_FROM_EMAIL\?\.trim\(\)/);
  assert.match(route, /from:\s*sender/);
  assert.match(env, /^RESEND_FROM_EMAIL=/m);
});
test("legacy test sender is retained until a verified sender is configured", () => {
  assert.match(route, /onboarding@resend\.dev/);
  assert.match(route, /CONTACT_MAIL_SENDER_TEST_MODE/);
});
test("route still sends contact mail to the existing recipient and does not expose env secrets", () => {
  assert.match(route, /to:\s*\['tonguckaracay@gmail\.com'\]/);
  assert.match(route, /const resendApiKey = process\.env\.RESEND_API_KEY/);
  assert.doesNotMatch(route, /console\.log\(.*resendApiKey/);
});
