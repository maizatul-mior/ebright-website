"use client";

import { useState, useRef } from "react";
import Script from "next/script";
import { BRANCH_OPTIONS } from "../data/branchOptions";
import { isValidWhatsapp } from "../lib/phone";

const TURNSTILE_SITEKEY = "0x4AAAAAADicbI-35VBGGjoo";
const LEAD_SOURCE = "marketing_trial_form";
const AGE_RANGES = ["6-9 years old", "10-12 years old", "13-16 years old"];

type TurnstileApi = {
  render?: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove?: (widgetId: string) => void;
};
type Status = "idle" | "verifying" | "submitting" | "done";

export default function TrialClassMarketingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappTouched, setWhatsappTouched] = useState(false);
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const whatsappValid = isValidWhatsapp(whatsapp);

  async function doSubmit(payload: Record<string, string>, token: string) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, "cf-turnstile-response": token }),
      });
      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Submission failed.");
      }
      window.location.assign("/thankyou");
    } catch (ex) {
      setStatus("idle");
      setError(
        ex instanceof Error ? ex.message : "Something went wrong. Please try again.",
      );
      // Clean up the widget so the user can retry
      const ts = (window as Record<string, unknown>).turnstile as TurnstileApi | undefined;
      if (widgetIdRef.current) {
        ts?.remove?.(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    }
  }

  function renderAndVerify(payload: Record<string, string>) {
    const ts = (window as Record<string, unknown>).turnstile as TurnstileApi | undefined;
    const container = captchaContainerRef.current;
    if (!container || !ts?.render) {
      setStatus("idle");
      setError("Verification unavailable. Please refresh and try again.");
      return;
    }
    // Remove any leftover widget from a previous attempt
    if (widgetIdRef.current) {
      ts.remove?.(widgetIdRef.current);
      widgetIdRef.current = null;
    }
    widgetIdRef.current =
      ts.render(container, {
        sitekey: TURNSTILE_SITEKEY,
        theme: "light",
        size: "flexible",
        callback: (token: string) => doSubmit(payload, token),
        "error-callback": () => {
          setStatus("idle");
          setError("Verification failed. Please try again.");
        },
        "expired-callback": () => {
          setStatus("idle");
          setError("Verification expired. Please try again.");
        },
      }) ?? null;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload: Record<string, string> = {
      parent_name: String(data.get("parent-name") ?? ""),
      child_name: String(data.get("child-name") ?? ""),
      child_age: String(data.get("child-age") ?? ""),
      whatsapp_no: String(data.get("whatsapp") ?? ""),
      email: String(data.get("parent-email") ?? ""),
      preferred_branch: String(data.get("branch") ?? ""),
      source: LEAD_SOURCE,
    };

    setError(null);
    setStatus("verifying");

    const ts = (window as Record<string, unknown>).turnstile as TurnstileApi | undefined;
    if (ts?.render) {
      renderAndVerify(payload);
    } else {
      // Script still loading — wait then retry once
      setTimeout(() => renderAndVerify(payload), 1500);
    }
  }

  return (
    <div className="mkt-form-shell" id="register">
      {/* Turnstile script — loaded once, no auto-scan widget in the DOM */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      <div className="mkt-form-card">
        <div className="mkt-form-badge">
          <span className="mkt-form-badge-text">🔥 Only a few seats left this week</span>
          <span className="mkt-form-badge-price">ONLY <s>RM150</s> RM 80!</span>
        </div>
        <h2 className="mkt-form-title">Register For A Trial Class</h2>
        <p className="mkt-form-intro">
          Fill in below — we&apos;ll WhatsApp you within 24 hours!
        </p>

        {status === "done" ? (
          <div className="mkt-form-done" role="status">
            <div className="mkt-form-tick" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="#fff"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2>Thank you!</h2>
            <p>
              We&apos;ve received your details. Our team will WhatsApp you shortly to
              confirm your child&apos;s RM80 trial class.
            </p>
          </div>
        ) : (
          <form className="mkt-form-body" onSubmit={handleSubmit} noValidate>
            <div className="mkt-form-grid">
              <div className="mkt-field">
                <label htmlFor="m-parent-name">
                  Parent&apos;s Name <span className="mkt-req" aria-hidden="true">*</span>
                </label>
                <input
                  id="m-parent-name"
                  name="parent-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="mkt-field">
                <label htmlFor="m-child-name">
                  Child&apos;s Name <span className="mkt-req" aria-hidden="true">*</span>
                </label>
                <input
                  id="m-child-name"
                  name="child-name"
                  type="text"
                  placeholder="Child's name"
                  required
                />
              </div>

              <div className="mkt-field">
                <label htmlFor="m-child-age">
                  Child&apos;s Age <span className="mkt-req" aria-hidden="true">*</span>
                </label>
                <select id="m-child-age" name="child-age" defaultValue="" required>
                  <option value="" disabled>
                    Select age
                  </option>
                  {AGE_RANGES.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mkt-field">
                <label htmlFor="m-whatsapp">
                  WhatsApp No. <span className="mkt-req" aria-hidden="true">*</span>
                </label>
                <input
                  id="m-whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="012-345 6789"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  onBlur={() => setWhatsappTouched(true)}
                  aria-invalid={whatsappTouched && !whatsappValid}
                />
                {whatsappTouched && !whatsappValid && (
                  <p className="mkt-field-hint">
                    Enter a valid number (10–13 digits).
                  </p>
                )}
              </div>

              <div className="mkt-field mkt-field--full">
                <label htmlFor="m-parent-email">
                  Parent&apos;s Email <span className="mkt-req" aria-hidden="true">*</span>
                </label>
                <input
                  id="m-parent-email"
                  name="parent-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Example: ebright@gmail.com"
                  required
                />
              </div>

              <div className="mkt-field mkt-field--full">
                <label htmlFor="m-branch">
                  Preferred location <span className="mkt-req" aria-hidden="true">*</span>
                </label>
                <select id="m-branch" name="branch" defaultValue="" required>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {BRANCH_OPTIONS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Empty container — Turnstile widget is injected here only on submit */}
            <div
              className="mkt-form-captcha"
              style={{
                display:
                  status === "verifying" || status === "submitting" ? "flex" : "none",
              }}
            >
              <div ref={captchaContainerRef} style={{ width: "100%" }} />
            </div>

            {error && <p className="mkt-form-err">{error}</p>}

            <button
              className="mkt-form-submit"
              type="submit"
              disabled={
                status === "submitting" ||
                status === "verifying" ||
                !whatsappValid
              }
            >
              {status === "submitting"
                ? "Submitting…"
                : status === "verifying"
                ? "Verifying…"
                : "Grab My RM80 Trial Seat!"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
