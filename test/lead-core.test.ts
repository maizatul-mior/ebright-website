import { describe, it, expect } from "vitest";
import { parseLead, validateLead, LEAD_COLUMNS, toBindValues } from "../functions/api/_lead-core";

describe("parseLead", () => {
  it("reads canonical field names and trims them", () => {
    const p = parseLead({
      parent_name: "  Ann  ",
      child_name: "Bo",
      child_age: "7",
      whatsapp_no: "0123456789",
      email: "a@b.com",
      preferred_branch: "KL",
    });
    expect(p.parent).toBe("Ann");
    expect(p.child).toBe("Bo");
    expect(p.whatsapp).toBe("0123456789");
  });

  it("accepts hyphenated aliases from the legacy form", () => {
    const p = parseLead({
      "parent-name": "Ann",
      "child-name": "Bo",
      "child-age": "7",
      whatsapp: "0123456789",
      "parent-email": "a@b.com",
      branch: "KL",
    });
    expect(p.parent).toBe("Ann");
    expect(p.email).toBe("a@b.com");
    expect(p.branch).toBe("KL");
  });

  it("allowlists source: marketing_trial_form passes, anything else defaults", () => {
    expect(parseLead({ source: "marketing_trial_form" }).source).toBe("marketing_trial_form");
    expect(parseLead({ source: "evil_value" }).source).toBe("website_trial_form");
    expect(parseLead({}).source).toBe("website_trial_form");
  });
});

describe("validateLead", () => {
  const ok = {
    parent_name: "Ann", child_name: "Bo", whatsapp_no: "0123456789",
    email: "a@b.com", preferred_branch: "KL",
  };
  it("returns null when all required fields valid", () => {
    expect(validateLead(parseLead(ok))).toBeNull();
  });
  it("flags missing required fields", () => {
    expect(validateLead(parseLead({ ...ok, parent_name: "" }))).toMatch(/Missing required/i);
  });
  it("flags an invalid WhatsApp number (too short)", () => {
    expect(validateLead(parseLead({ ...ok, whatsapp_no: "123" }))).toMatch(/WhatsApp/i);
  });
});

describe("toBindValues", () => {
  it("produces one value per column, with empty optionals as null", () => {
    const values = toBindValues(parseLead({
      parent_name: "Ann", child_name: "Bo", whatsapp_no: "0123456789",
      email: "a@b.com", preferred_branch: "KL",
    }));
    expect(values).toHaveLength(LEAD_COLUMNS.length);
    expect(values[LEAD_COLUMNS.indexOf("child_age")]).toBeNull();
    expect(values[LEAD_COLUMNS.indexOf("utm_source")]).toBeNull();
    expect(values[LEAD_COLUMNS.indexOf("parent_name")]).toBe("Ann");
    expect(values[LEAD_COLUMNS.indexOf("source")]).toBe("website_trial_form");
  });
});
