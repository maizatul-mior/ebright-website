"use client";

import { useState, useRef, useCallback } from "react";
import Script from "next/script";
import { BRANCH_OPTIONS } from "../data/branchOptions";
import { isValidWhatsapp } from "../lib/phone";

const TURNSTILE_SITEKEY = "0x4AAAAAADicbI-35VBGGjoo";
const LEAD_SOURCE = "marketing_trial_form";
const AGE_RANGES = ["6-9 years old", "10-12 years old", "13-16 years old"];

type Status = "idle" | "verifying" | "submitting" | "done";
type TurnstileApi = {
  render?: (container: HTMLElement, opts: Record<string, unknown>) => string;
  remove?: (widgetId: string) => void;
};

export default function TrialClassMarketingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappTouched, setWhatsappTouched] = useState(false);
  const pendingPayloadRef = useRef<Record<string, string> | null>(null);
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
      if (!res.ok || !result.ok) throw new Error(result.error || "Submission failed.");
      window.location.assign("/thankyou");
    } catch (ex) {
      // Remove captcha from DOM entirely so it doesn't persist
      setShowCaptcha(false);
      pendingPayloadRef.current = null;
      setStatus("idle");
      setError(ex instanceof Error ? ex.message : "Something went wrong. Please try again.");
    }
  }

  // Callback ref — fires the moment the captcha div is mounted in the DOM.
  // Empty deps array is intentional: setters are stable and doSubmit only
  // closes over stable setters + refs, so stale closure is not a concern.
  const captchaRefCallback = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    function mount(ts: TurnstileApi) {
      const payload = pendingPayloadRef.current;
      if (!payload || !ts.render) return;
      ts.render(node, {
        sitekey: TURNSTILE_SITEKEY,
        theme: "light",
        size: "flexible",
        callback: (token: string) => doSubmit(payload, token),
        "error-callback": () => {
          setShowCaptcha(false);
          setStatus("idle");
          setError("Verification failed. Please try again.");
        },
        "expired-callback": () => {
          setShowCaptcha(false);
          setStatus("idle");
          setError("Verification expired. Please try again.");
        },
      });
    }

    const ts = (window as unknown as { turnstile?: TurnstileApi }).turnstile;
    if (ts?.render) {
      mount(ts);
    } else {
      // Script still loading — retry after a short delay
      setTimeout(() => {
        const tsRetry = (window as unknown as { turnstile?: TurnstileApi }).turnstile;
        if (tsRetry?.render) {
          mount(tsRetry);
        } else {
          setShowCaptcha(false);
          setStatus("idle");
          setError("Verification unavailable. Please refresh and try again.");
        }
      }, 1500);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    pendingPayloadRef.current = {
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
    setShowCaptcha(true); // mounts the captcha div → captchaRefCallback fires
  }

  return (
    <div className="mkt-form-shell" id="register">
      {/* ?render=explicit prevents Turnstile from auto-scanning the DOM */}
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
                  <option value="" disabled>Select age</option>
                  {AGE_RANGES.map((a) => (
                    <option key={a} value={a}>{a}</option>
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
                  <p className="mkt-field-hint">Enter a valid number (10–13 digits).</p>
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
                  <option value="" disabled>Select an option</option>
                  {BRANCH_OPTIONS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Captcha container is conditionally MOUNTED — not just hidden.
                When showCaptcha is false the div doesn't exist in the DOM at all,
                so Turnstile has nothing to auto-verify. */}
            {showCaptcha && (
              <div className="mkt-form-captcha">
                <div ref={captchaRefCallback} style={{ width: "100%" }} />
              </div>
            )}

            {error && <p className="mkt-form-err">{error}</p>}

            <button
              className="mkt-form-submit"
              type="submit"
              disabled={status === "submitting" || status === "verifying" || !whatsappValid}
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
