"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (name) params.set("name", name);
    if (contact) params.set("phone", contact);
    if (email) params.set("email", email);
    window.location.href = "https://www.ebright.my/thankyou";
  }

  return (
    <div className="w-full rounded-3xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Register for a <span className="text-[var(--brand)]">Trial Class</span>
      </h2>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        Secure your child&apos;s slot today for only RM80!
      </p>

      <form onSubmit={handleNext} className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Parent&apos;s Name <span className="text-[var(--brand)]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Example: Jonathan Tan, Sara Yahya, Muthu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-[#fdf6f6] px-4 py-3 text-sm outline-none transition placeholder:text-[#c0aaaa] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Parent&apos;s Contact <span className="text-[var(--brand)]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="Example: Jonathan Tan, Sara Yahya, Muthu"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-[#fdf6f6] px-4 py-3 text-sm outline-none transition placeholder:text-[#c0aaaa] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
          />
          <p className="mt-1.5 text-xs text-[var(--ink-soft)]">
            Reminders will be sent via WhatsApp, please make sure your number has WhatsApp function
          </p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold">
            Parent&apos;s Email <span className="text-[var(--brand)]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="Example: ebright@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-[#fdf6f6] px-4 py-3 text-sm outline-none transition placeholder:text-[#c0aaaa] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-[var(--brand)] px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[var(--brand-strong)]"
        >
          NEXT
        </button>
      </form>
    </div>
  );
}
