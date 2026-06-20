"use client";

import { useState, useRef, useCallback, useEffect, type FormEvent } from "react";
import { BRANCH_OPTIONS } from "../data/branchOptions";
import { isValidWhatsapp } from "../lib/phone";

const TURNSTILE_SITEKEY = "0x4AAAAAADicbI-35VBGGjoo";
const LEAD_SOURCE = "marketing_trial_form";
const AGE_RANGES = ["6-9 years old", "10-12 years old", "13-16 years old"];
const TURNSTILE_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_content",
  "utm_term",
  "fbclid",
] as const;

type Status = "idle" | "verifying" | "submitting" | "done";
type TurnstileApi = {
  render?: (container: HTMLElement, opts: Record<string, unknown>) => string;
  remove?: (widgetId: string) => void;
};

// ---------- Custom dropdown (consistent on Android / iOS / macOS) ----------
function CustomSelect({
  id,
  options,
  placeholder,
  value,
  onChange,
  showError,
}: {
  id: string;
  options: string[];
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  showError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function outside(e: MouseEvent | TouchEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", outside);
    document.addEventListener("touchstart", outside);
    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("touchstart", outside);
    };
  }, [open]);

  return (
    <div className="mkt-custom-select" ref={rootRef}>
      <button
        id={id}
        type="button"
        className={[
          "mkt-custom-select-trigger",
          !value ? "mkt-custom-select-empty" : "",
          showError ? "mkt-custom-select-invalid" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{value || placeholder}</span>
        <svg
          className={`mkt-custom-select-arrow${open ? " open" : ""}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          aria-hidden="true"
        >
          <path
            d="M1 1.5l5 5 5-5"
            fill="none"
            stroke="#9aa1a9"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className="mkt-custom-select-list" role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              className={`mkt-custom-select-option${value === opt ? " selected" : ""}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ---------- Turnstile helpers ----------
function getTs(): TurnstileApi | undefined {
  return (window as unknown as { turnstile?: TurnstileApi }).turnstile;
}

function loadTurnstile(): Promise<TurnstileApi> {
  return new Promise((resolve, reject) => {
    const existing = getTs();
    if (existing?.render) { resolve(existing); return; }

    const alreadyTag = document.querySelector<HTMLScriptElement>(
      `script[src="${TURNSTILE_SRC}"]`,
    );
    if (alreadyTag) {
      const t = setInterval(() => {
        const ts = getTs();
        if (ts?.render) { clearInterval(t); resolve(ts); }
      }, 100);
      setTimeout(() => { clearInterval(t); reject(new Error("Turnstile timeout")); }, 10000);
      return;
    }

    const s = document.createElement("script");
    s.src = TURNSTILE_SRC;
    s.onload = () => {
      const ts = getTs();
      if (ts?.render) resolve(ts);
      else reject(new Error("Turnstile API missing after load"));
    };
    s.onerror = () => reject(new Error("Turnstile script failed to load"));
    document.head.appendChild(s);
  });
}

// ---------- Main form ----------
export default function TrialClassMarketingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappTouched, setWhatsappTouched] = useState(false);
  const whatsappValid = isValidWhatsapp(whatsapp);

  const [childAge, setChildAge] = useState("");
  const [childAgeTouched, setChildAgeTouched] = useState(false);

  const [branch, setBranch] = useState("");
  const [branchTouched, setBranchTouched] = useState(false);

  const pendingPayloadRef = useRef<Record<string, string> | null>(null);
  const utmRef = useRef<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) utm[key] = value;
    }
    utmRef.current = utm;
  }, []);

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
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
        event: "trial_class_form_submit",
        child_age: payload.child_age,
        preferred_branch: payload.preferred_branch,
      });
      const email = encodeURIComponent(payload.email);
      const phone = encodeURIComponent(payload.whatsapp_no);
      window.location.assign(`https://ebright.my/thankyou.html?email=${email}&phone=${phone}`);
    } catch (ex) {
      setShowCaptcha(false);
      pendingPayloadRef.current = null;
      setStatus("idle");
      setError(ex instanceof Error ? ex.message : "Something went wrong. Please try again.");
    }
  }

  const captchaRefCallback = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    loadTurnstile()
      .then((ts) => {
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
      })
      .catch(() => {
        setShowCaptcha(false);
        setStatus("idle");
        setError("Verification unavailable. Please refresh and try again.");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Mark custom selects as touched so inline errors show
    setChildAgeTouched(true);
    setBranchTouched(true);

    if (!form.checkValidity() || !childAge || !branch || !whatsappValid) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    pendingPayloadRef.current = {
      parent_name: String(data.get("parent-name") ?? ""),
      child_name: String(data.get("child-name") ?? ""),
      child_age: childAge,
      whatsapp_no: String(data.get("whatsapp") ?? ""),
      email: String(data.get("parent-email") ?? ""),
      preferred_branch: branch,
      source: LEAD_SOURCE,
      ...utmRef.current,
    };
    setError(null);
    setStatus("verifying");
    setShowCaptcha(true);
  }

  return (
    <div className="mkt-form-shell" id="register">
      <div className="mkt-form-card">
        {/* Price tag — top-right corner of the card */}
        <div className="mkt-form-corner-price">
          ONLY <s>RM150</s> RM 80!
        </div>
        <div className="mkt-form-badge">
          <span className="mkt-form-badge-text">🔥 Only a few seats left this week</span>
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
                <CustomSelect
                  id="m-child-age"
                  options={AGE_RANGES}
                  placeholder="Select age"
                  value={childAge}
                  onChange={setChildAge}
                  showError={childAgeTouched && !childAge}
                />
                {childAgeTouched && !childAge && (
                  <p className="mkt-field-hint">Please select an age range.</p>
                )}
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
                <CustomSelect
                  id="m-branch"
                  options={BRANCH_OPTIONS}
                  placeholder="Select an option"
                  value={branch}
                  onChange={setBranch}
                  showError={branchTouched && !branch}
                />
                {branchTouched && !branch && (
                  <p className="mkt-field-hint">Please select a location.</p>
                )}
              </div>
            </div>

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
