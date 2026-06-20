"use client";

import { useState, type ReactNode, type ChangeEvent, type FormEvent } from "react";
import { branches } from "../data/branches";
import { isValidWhatsapp } from "../lib/phone";

// Public Cloudflare Turnstile site key (safe to ship to the client).
const TURNSTILE_SITEKEY = "0x4AAAAAADicbI-35VBGGjoo";

const AGES = Array.from({ length: 10 }, (_, i) => i + 7); // 7–16
const BRANCH_OPTIONS = branches.map((b) =>
  b.name.replace(/^Ebright Public Speaking Academy - /, "")
);

const inputCls =
  "w-full rounded-xl border border-black/10 bg-[#fdf6f6] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[#c0aaaa] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";

type TurnstileApi = { getResponse?: () => string; reset?: () => void };

export default function TrialClassForm() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    whatsapp: "",
    email: "",
    branch: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappTouched, setWhatsappTouched] = useState(false);
  const whatsappValid = isValidWhatsapp(form.whatsapp);

  function update(key: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const tokenEl = document.querySelector<HTMLInputElement>('[name="cf-turnstile-response"]');
    const ts = (window as unknown as { turnstile?: TurnstileApi }).turnstile;
    const token = (ts?.getResponse?.() || tokenEl?.value || "").trim();
    if (!token) {
      setErrorMsg("Please complete the verification.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent_name: form.parentName,
          child_name: form.childName,
          child_age: form.childAge,
          whatsapp_no: form.whatsapp,
          email: form.email,
          preferred_branch: form.branch,
          "cf-turnstile-response": token,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed.");
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setErrorMsg("Sorry, something went wrong. Please try again.");
      (window as unknown as { turnstile?: TurnstileApi }).turnstile?.reset?.();
    }
  }

  if (status === "done") {
    return (
      <div className="relative rounded-3xl border-4 border-[var(--brand)] bg-white p-10 text-center shadow-xl">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--brand)]">
          <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-extrabold">Thank you!</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[var(--ink-soft)]">
          We&apos;ve received your details. Our team will reach out via WhatsApp shortly to confirm
          your child&apos;s trial class.
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl border-4 border-[var(--brand)] bg-white p-7 shadow-xl sm:p-8">
      <span className="absolute -top-3 right-7 rotate-3 rounded-full bg-[var(--brand)] px-4 py-1.5 text-sm font-extrabold text-white shadow-lg">
        Just RM80 🎟️
      </span>

      <h2 className="text-2xl font-extrabold text-[var(--brand)] sm:text-3xl">Register For Trial Class</h2>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        Fill in below — we&apos;ll WhatsApp your available slots within 24 hours!
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-4">
        <Field label="Parent's Name">
          <input type="text" required value={form.parentName} onChange={update("parentName")} placeholder="Your full name" className={inputCls} />
        </Field>
        <Field label="Child's Name">
          <input type="text" required value={form.childName} onChange={update("childName")} placeholder="Child's name" className={inputCls} />
        </Field>

        <Field label="Child's Age">
          <select required value={form.childAge} onChange={update("childAge")} className={`${inputCls} ${form.childAge ? "" : "text-[#c0aaaa]"}`}>
            <option value="" disabled>Select age</option>
            {AGES.map((a) => <option key={a} value={a} className="text-[var(--foreground)]">{a}</option>)}
          </select>
        </Field>
        <Field label="WhatsApp No.">
          <input type="tel" required value={form.whatsapp} onChange={update("whatsapp")} onBlur={() => setWhatsappTouched(true)} aria-invalid={whatsappTouched && !whatsappValid} placeholder="012-345 6789" className={inputCls} />
          {whatsappTouched && !whatsappValid && (
            <p className="mt-1.5 text-xs font-semibold text-[var(--brand)]">Enter a valid number (10–13 digits).</p>
          )}
        </Field>

        <Field label="Email Address" full>
          <input type="email" required value={form.email} onChange={update("email")} placeholder="you@email.com" className={inputCls} />
        </Field>

        <Field label="Preferred Branch" full>
          <select required value={form.branch} onChange={update("branch")} className={`${inputCls} ${form.branch ? "" : "text-[#c0aaaa]"}`}>
            <option value="" disabled>Select branch</option>
            {BRANCH_OPTIONS.map((b) => <option key={b} value={b} className="text-[var(--foreground)]">{b}</option>)}
          </select>
        </Field>

        <div className="col-span-2 mt-1">
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITEKEY} data-theme="light" />
        </div>

        {status === "error" && (
          <p className="col-span-2 text-center text-sm font-semibold text-[var(--brand)]">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting" || !whatsappValid}
          className="col-span-2 mt-1 w-full rounded-2xl bg-gradient-to-b from-[#ffd84a] to-[#f2bd17] px-6 py-4 text-lg font-extrabold text-[#1a1d20] shadow-lg transition hover:brightness-105 disabled:opacity-70 disabled:cursor-default"
        >
          {status === "submitting" ? "Submitting…" : "Grab My RM80 Trial Seat →"}
        </button>

        <p className="col-span-2 mt-1 text-center text-xs text-[var(--ink-soft)]">
          🔒 Your info is safe. We only contact you about the trial class.
        </p>
      </form>
    </div>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: ReactNode }) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label className="mb-1.5 block text-sm font-bold">
        {label} <span className="text-[var(--brand)]">*</span>
      </label>
      {children}
    </div>
  );
}
