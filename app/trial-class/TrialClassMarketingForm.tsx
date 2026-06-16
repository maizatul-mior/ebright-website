"use client";

import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import { BRANCH_OPTIONS } from "../data/branchOptions";
import { isValidWhatsapp } from "../lib/phone";

const TURNSTILE_SITEKEY = "0x4AAAAAADicbI-35VBGGjoo";
const LEAD_SOURCE = "marketing_trial_form";
const AGE_RANGES = ["6-9 years old", "10-12 years old", "13-16 years old"];

type TurnstileApi = {
  getResponse?: () => string;
  reset?: () => void;
  execute?: (container: HTMLElement) => void;
};
type Status = "idle" | "verifying" | "submitting" | "done";

export default function TrialClassMarketingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappTouched, setWhatsappTouched] = useState(false);
  const pendingPayloadRef = useRef<Record<string, string> | null>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const whatsappValid = isValidWhatsapp(whatsapp);

  useEffect(() => {
    // Global callback Turnstile calls once verification succeeds
    (window as Record<string, unknown>).__mktTsCallback = async (token: string) => {
      const payload = pendingPayloadRef.current;
      if (!payload) return;
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
        pendingPayloadRef.current = null;
        setError(
          ex instanceof Error ? ex.message : "Something went wrong. Please try again.",
        );
        const ts = (window as Record<string, unknown>).turnstile as
          | TurnstileApi
          | undefined;
        ts?.reset?.();
      }
    };
    return () => {
      delete (window as Record<string, unknown>).__mktTsCallback;
    };
  }, []);

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

    const ts = (window as Record<string, unknown>).turnstile as
      | TurnstileApi
      | undefined;
    if (captchaRef.current && ts?.execute) {
      ts.execute(captchaRef.current);
    } else {
      // Turnstile script not yet loaded — wait briefly then retry
      setTimeout(() => {
        const tsRetry = (window as Record<string, unknown>).turnstile as
          | TurnstileApi
          | undefined;
        if (captchaRef.current && tsRetry?.execute) {
          tsRetry.execute(captchaRef.current);
        } else {
          setStatus("idle");
          setError("Verification unavailable. Please refresh and try again.");
        }
      }, 1500);
    }
  }

  return (
    <div className="mkt-form-shell" id="register">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
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

            {/* Turnstile — hidden until submit is clicked, execute mode */}
            <div
              className="mkt-form-captcha"
              style={{
                display:
                  status === "verifying" || status === "submitting" ? "flex" : "none",
              }}
            >
              <div
                ref={captchaRef}
                className="cf-turnstile"
                data-sitekey={TURNSTILE_SITEKEY}
                data-theme="light"
                data-size="flexible"
                data-execution="execute"
                data-callback="__mktTsCallback"
              />
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
