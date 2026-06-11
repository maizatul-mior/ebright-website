"use client";

import { useState } from "react";
import { branches } from "../data/branches";
import { isValidWhatsapp } from "../lib/phone";

const WHATSAPP_NUMBER = "60169698351";

const sources = [
  "Facebook",
  "Instagram",
  "Google Search",
  "TikTok",
  "Friend or Family",
  "Walk-in / Event",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    source: "",
    location: "",
    message: "",
  });

  const [contactTouched, setContactTouched] = useState(false);
  const contactValid = isValidWhatsapp(form.contact);

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Hi Ebright! I have an enquiry.%0A%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `Contact: ${encodeURIComponent(form.contact)}%0A` +
      `Found us via: ${encodeURIComponent(form.source)}%0A` +
      `Preferred location: ${encodeURIComponent(form.location)}%0A` +
      `Message: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  const inputCls =
    "w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Parent's Name" required>
        <input type="text" required value={form.name} onChange={update("name")} placeholder="Example: Jonathan Tan, Sara Yahya, Muthu" className={inputCls} />
      </Field>
      <Field label="Parent's Email" required>
        <input type="email" required value={form.email} onChange={update("email")} placeholder="Example: ebright@gmail.com" className={inputCls} />
      </Field>
      <Field label="Parent's Contact (With WhatsApp)" required>
        <input type="tel" required value={form.contact} onChange={update("contact")} onBlur={() => setContactTouched(true)} aria-invalid={contactTouched && !contactValid} placeholder="Example: 60123456789" className={inputCls} />
        {contactTouched && !contactValid && (
          <p className="mt-1.5 text-xs font-semibold text-[var(--brand)]">Enter a valid number (10–13 digits).</p>
        )}
      </Field>
      <Field label="How did you find out about us?" required>
        <select required value={form.source} onChange={update("source")} className={inputCls}>
          <option value="" disabled>Select an option</option>
          {sources.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Preferred location" required>
        <select required value={form.location} onChange={update("location")} className={inputCls}>
          <option value="" disabled>Select an option</option>
          {branches.map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}
        </select>
      </Field>
      <Field label="Message" required>
        <textarea required rows={4} value={form.message} onChange={update("message")} placeholder="How can our team help you today?" className={inputCls} />
      </Field>
      <button type="submit" disabled={!contactValid} className="w-full rounded-lg bg-[var(--brand)] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[var(--brand-strong)] disabled:cursor-default disabled:opacity-60">
        Send Us Message
      </button>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-[var(--brand)]">*</span>}
      </label>
      {children}
    </div>
  );
}
