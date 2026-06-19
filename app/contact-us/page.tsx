import type { Metadata } from "next";
import Image from "next/image";
import FindAClass from "../components/FindAClass";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Contact Us — Ebright Public Speaking Academy",
  description:
    "Have a question about our classes, schedules, or locations? Get in touch with Ebright's friendly team via phone, email, or our contact form.",
};

export default function ContactUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
          {/* Telephone image */}
          <div className="flex items-center justify-center">
            <Image
              src="/contact-us/img-01.png"
              alt="Contact Ebright"
              width={460}
              height={560}
              className="h-auto w-full max-w-xs lg:max-w-sm"
              priority
            />
          </div>

          {/* Contact info */}
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              We&apos;re Here <span className="text-[var(--brand)]">To Help</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-[var(--ink-soft)]">
              Have a question about our classes, schedules, or locations? Get in touch with our
              friendly team today.
            </p>

            <ul className="mt-10 space-y-6">
              <ContactRow icon={<PhoneIcon />} label="Phone Number">
                <a href="tel:+60169698351" className="hover:text-[var(--brand)]">016-9698351</a>
              </ContactRow>
              <ContactRow icon={<MailIcon />} label="Email">
                <a href="mailto:sales@ebright.my" className="hover:text-[var(--brand)]">sales@ebright.my</a>
              </ContactRow>
              <ContactRow icon={<PinIcon />} label="Main Office (Headquarter)">
                No. 21-2, Jalan USJ 10/1D, Taipan Business Centre, 47620 Subang Jaya, Selangor D.E,
                Malaysia.
              </ContactRow>
            </ul>
          </div>
        </div>
      </section>

      <FindAClass />
      <GrowingHistoryCta />
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--brand)] text-white">
        {icon}
      </span>
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-[var(--ink-soft)]">{label}</p>
        <p className="mt-1 text-base font-medium text-[var(--foreground)]">{children}</p>
      </div>
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m22 7-10 6L2 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
