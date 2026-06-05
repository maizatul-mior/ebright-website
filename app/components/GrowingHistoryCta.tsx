import Image from "next/image";
import Link from "next/link";

export default function GrowingHistoryCta() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <Image src="/home/cta-bg.png" alt="Ebright students on stage" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex flex-col items-center px-6 py-20 text-center text-white">
          <h2 className="max-w-3xl text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Be A Part Of Our Growing History
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/85">
            Give your child the gift of absolute self-confidence. Find a branch near you and book a
            trial session today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-[var(--foreground)] shadow-lg transition hover:brightness-95"
            >
              Contact Us
            </Link>
            <Link
              href="/programmes"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              View Our Core Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
