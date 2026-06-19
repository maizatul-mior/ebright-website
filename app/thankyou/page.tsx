import type { Metadata } from "next";
import Link from "next/link";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "Thank You | Ebright Public Speaking",
  description: "Thank you for registering. Our team will WhatsApp you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--cream)] px-4 text-center">
      <Link href="/" className="mb-8">
        <Logo width={140} height={46} className="h-10 w-auto" />
      </Link>

      <div className="bg-white rounded-2xl shadow-md px-8 py-10 max-w-md w-full">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="#fff"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)] mb-3">
          Thank You!
        </h1>
        <p className="text-[var(--ink-soft)] mb-6">
          We&apos;ve received your registration. Our team will WhatsApp you
          within 24 hours to confirm your child&apos;s RM80 trial class.
        </p>

        <Link
          href="/"
          className="inline-block rounded-lg bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
