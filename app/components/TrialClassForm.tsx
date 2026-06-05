"use client";

import { useState } from "react";

// No backend on this deploy — the form composes a prefilled WhatsApp message to
// the Ebright sales line so the lead is captured instantly in chat.
const WHATSAPP_NUMBER = "60169698351";

export default function TrialClassForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi Ebright! I'd like to register my child for a trial class (RM80).%0A%0AParent's Name: ${encodeURIComponent(
      name,
    )}%0AContact: ${encodeURIComponent(contact)}%0AEmail: ${encodeURIComponent(email)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  return (
    <div className="rounded-3xl bg-white p-7 shadow-xl ring-1 ring-black/5 sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight">Register for a Trial Class</h2>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        Secure your child&apos;s slot today for only <span className="font-bold text-[var(--brand)]">RM80!</span>
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <Field label="Parent's Name" required>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Example: Jonathan Tan, Sara Yahya, Muthu"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
          />
        </Field>

        <Field
          label="Parent's Contact"
          required
          hint="Reminders will be sent via WhatsApp, please make sure your number has WhatsApp function."
        >
          <input
            type="tel"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Example: 60123456789"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
          />
        </Field>

        <Field label="Parent's Email" required>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example: ebright@gmail.com"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
          />
        </Field>

        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--brand)] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[var(--brand-strong)]"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-[var(--brand)]">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs leading-5 text-[var(--ink-soft)]">{hint}</p>}
    </div>
  );
}
