import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're In! — Ebright Public Speaking",
  description: "Thank you for signing up for Ebright Trial Class.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fffaf2] flex items-center justify-center px-4 py-16">
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full opacity-40"
        style={{ background: "#fddabc" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-36 -left-36 h-[26rem] w-[26rem] rounded-full opacity-35"
        style={{ background: "#fddabc" }}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white px-8 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
        {/* Checkmark */}
        <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-green-100">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-green-500">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="#fff"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Stars */}
        <div className="mt-5 flex justify-center gap-0.5">
          <span className="text-[22px] text-amber-400">★★★★★</span>
        </div>

        {/* Title */}
        <h1 className="mt-3 text-center text-[1.65rem] font-extrabold leading-snug tracking-tight">
          Yeay! You&apos;re{" "}
          <span className="text-[var(--brand)]">In!</span>
          {" "}🎉
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-center text-sm leading-relaxed text-[var(--ink-soft)]">
          Thank you for signing up for the{" "}
          <strong className="font-semibold text-[var(--foreground)]">Ebright Trial Class</strong>.{" "}
          Our team will reach out to you within{" "}
          <strong className="font-semibold text-[var(--foreground)]">24 hours</strong>.
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-[var(--brand)] opacity-15" />

        {/* What happens next label */}
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          What Happens Next?
        </p>

        {/* Steps */}
        <ul className="mt-4 space-y-2.5">
          <Step
            number={1}
            title="We will call / WhatsApp you"
            desc="To confirm your child's trial class slot."
          />
          <Step
            number={2}
            title="Pick a date & time that works for you"
            desc="Limited slots — first come, first served!"
          />
          <Step
            number={3}
            title="Attend & experience Ebright"
            desc="Your child will have fun and grow more confident!"
          />
        </ul>

        {/* Footer contact */}
        <p className="mt-8 text-center text-xs leading-relaxed text-[var(--ink-soft)]">
          Got questions? Reach us at{" "}
          <a
            href="mailto:sales@ebright.my"
            className="font-semibold text-[var(--brand)] hover:underline"
          >
            sales@ebright.my
          </a>
          {" "}or visit{" "}
          <Link
            href="/"
            className="font-semibold text-[var(--brand)] hover:underline"
          >
            ebright.my
          </Link>
        </p>
      </div>
    </div>
  );
}

function Step({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <li className="flex items-center gap-3.5 rounded-2xl bg-[#f8f9fb] px-4 py-3.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#94a3b8] text-sm font-bold text-white">
        {number}
      </span>
      <div>
        <p className="text-sm font-bold leading-snug text-[var(--foreground)]">{title}</p>
        <p className="mt-0.5 text-xs text-[var(--ink-soft)]">{desc}</p>
      </div>
    </li>
  );
}
