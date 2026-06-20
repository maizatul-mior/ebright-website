"use client";

import { useState, useRef, useCallback, type FormEvent } from "react";
import { BRANCH_OPTIONS } from "../data/branchOptions";
import { isValidWhatsapp } from "../lib/phone";

const TURNSTILE_SITEKEY = "0x4AAAAAADicbI-35VBGGjoo";
const LEAD_SOURCE = "marketing_trial_form";
const TURNSTILE_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type Status = "idle" | "verifying" | "submitting";
type TurnstileApi = {
  render?: (container: HTMLElement, opts: Record<string, unknown>) => string;
  remove?: (widgetId: string) => void;
};

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

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [contact, setContact] = useState("");
  const [contactTouched, setContactTouched] = useState(false);
  const contactValid = isValidWhatsapp(contact);

  const pendingPayloadRef = useRef<Record<string, string> | null>(null);

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
      const email = encodeURIComponent(payload.email);
      const phone = encodeURIComponent(payload.whatsapp_no);
      window.location.assign(`/thankyou/?email=${email}&phone=${phone}`);
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
    setContactTouched(true);

    const form = e.currentTarget;
    if (!form.checkValidity() || !contactValid) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    pendingPayloadRef.current = {
      parent_name:      String(data.get("name") ?? ""),
      child_name:       String(data.get("child-name") ?? ""),
      whatsapp_no:      contact,
      email:            String(data.get("email") ?? ""),
      preferred_branch: String(data.get("branch") ?? ""),
      source:           LEAD_SOURCE,
    };
    setError(null);
    setStatus("verifying");
    setShowCaptcha(true);
  }

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-[#fdf6f6] px-4 py-3 text-sm outline-none transition placeholder:text-[#c0aaaa] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";

  return (
    <div className="w-full rounded-3xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Register for a <span className="text-[var(--brand)]">Trial Class</span>
      </h2>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        Secure your child&apos;s slot today for only RM80!
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Parent&apos;s Name <span className="text-[var(--brand)]">*</span>
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Example: Jonathan Tan, Sara Yahya, Muthu"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Child&apos;s Name <span className="text-[var(--brand)]">*</span>
          </label>
          <input
            name="child-name"
            type="text"
            required
            placeholder="Child's full name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Parent&apos;s Contact <span className="text-[var(--brand)]">*</span>
          </label>
          <input
            name="contact"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="012-345 6789"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            onBlur={() => setContactTouched(true)}
            aria-invalid={contactTouched && !contactValid}
            className={inputClass}
          />
          {contactTouched && !contactValid && (
            <p className="mt-1 text-xs text-red-500">Enter a valid number (10–13 digits).</p>
          )}
          <p className="mt-1.5 text-xs text-[var(--ink-soft)]">
            Reminders will be sent via WhatsApp, please make sure your number has WhatsApp function
          </p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Parent&apos;s Email <span className="text-[var(--brand)]">*</span>
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Example: ebright@gmail.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Preferred Location <span className="text-[var(--brand)]">*</span>
          </label>
          <select
            name="branch"
            required
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Select a location</option>
            {BRANCH_OPTIONS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {showCaptcha && (
          <div>
            <div ref={captchaRefCallback} style={{ width: "100%" }} />
          </div>
        )}

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting" || status === "verifying" || (contactTouched && !contactValid)}
          className="mt-2 w-full rounded-xl bg-[var(--brand)] px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[var(--brand-strong)] disabled:opacity-60"
        >
          {status === "submitting"
            ? "Submitting…"
            : status === "verifying"
            ? "Verifying…"
            : "Book My Trial Class →"}
        </button>
      </form>
    </div>
  );
}
