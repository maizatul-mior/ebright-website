import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franchising Opportunity — Ebright Public Speaking Academy",
  description:
    "Partner with Malaysia's #1 kids' public speaking academy to launch a low-risk, high-reward educational enterprise backed by a decade of proven market success.",
};

// ── Data ────────────────────────────────────────────────────────────────

const stats = [
  { value: "20,000+", label: "Young Lives Trained Since 2016" },
  { value: "2,400+", label: "Active Students Worldwide" },
  { value: "20+", label: "Convenient Physical & Online Branches" },
  { value: "10+", label: "Years of Experience In Kids Training" },
];

const blueprint = [
  {
    icon: (
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "We Proved the System First",
    body: "Skip traditional startup guesswork with a fully optimized business model perfected over a decade of corporate success.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: "System-Driven Operations",
    body: "Our pre-packaged, script-free syllabus ensures your center runs smoothly and independently of any individual's personality or staff turnover.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Academic Prestige",
    body: "Gain an immediate competitive edge by offering globally recognized Trinity College London communication certification tracks within your exclusive territory.",
  },
];

const partnershipIncludes = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Market-Leading Brand Power",
    body: "Instantly inherit Malaysia's #1 youth public speaking brand trusted by elite schools and thousands of parents.",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "HQ Marketing & Leads",
    body: "Receive ready-made digital campaigns and direct local student leads sent straight to your exclusive territory.",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" />
        <path d="M4 19h16" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    ),
    title: "Plug-and-Play Syllabus",
    body: "Access our fully pre-packaged, script-free curriculum that makes lesson delivery and coach training completely effortless.",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Recruitment & Training Support",
    body: "Get full corporate support for hiring, training, and certifying your local team to strict international standards.",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-7 9a7 7 0 0 0 14 0h2a9 9 0 0 1-8 8.94V23h-2v-2.06A9 9 0 0 1 3 12h2z" />
      </svg>
    ),
    title: "Elite Showcase Access",
    body: "Gain the exclusive right to feature your local students on Malaysia's largest annual grand college theater stages.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────

export default function Franchising() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Franchising%20Opportunity/hero-franchising-opportunity.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/65" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Scale Your Edupreneurship
            <br />
            Impact with Ebright
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            Partner with Malaysia&apos;s #1 kids&apos; public speaking academy to launch a
            low-risk, high-reward educational enterprise backed by a decade of proven market
            success.
          </p>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="bg-[var(--brand)] py-8 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-extrabold leading-none">{s.value}</p>
                  <p className="mt-0.5 text-xs leading-4 text-white/80">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Battle-Tested Blueprint ───────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/Franchising%20Opportunity/ebright-activity.png"
                    alt="Ebright students in action"
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                The Battle-Tested Blueprint
              </h2>
              <div className="mt-8 space-y-6">
                {blueprint.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--brand)]">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{b.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--ink-soft)]">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Government Endorsed. Parent Approved. ─────────────── */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr]">
            {/* Kevin Khoo photo */}
            <div className="flex justify-center">
              <div className="relative h-80 w-64 overflow-hidden rounded-3xl md:h-96 md:w-80">
                <Image
                  src="/Franchising%20Opportunity/ceo-ebright-kevin-khoo.png"
                  alt="Kevin Khoo, Founder and CEO of Ebright"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-bold text-white">Kevin Khoo</p>
                  <p className="text-xs text-white/80">Founder and CEO of Ebright</p>
                </div>
              </div>
            </div>

            {/* Text + logos */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Government Endorsed.{" "}
                <span className="text-[var(--brand)]">Parent Approved.</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--ink-soft)]">
                Ebright is proudly recognized as Malaysia&apos;s top choice for youth public
                speaking, fully endorsed by the Malaysian Franchise Association (MFA). Our
                award-winning track record includes back-to-back Parents&apos; Choice Awards,
                alongside prestigious corporate honors like SOBA and TOYM.
              </p>

              {/* Logos */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <div className="relative h-16 w-20">
                  <Image
                    src="/Franchising%20Opportunity/ministry-of-domestic-trade-and-consumer-affairs.png"
                    alt="Ministry of Domestic Trade and Consumer Affairs"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="relative h-16 w-20">
                  <Image
                    src="/Franchising%20Opportunity/malaysian-franchise-association.png"
                    alt="Malaysian Franchise Association"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="relative h-16 w-20">
                  <Image
                    src="/Franchising%20Opportunity/francais-malaysia.png"
                    alt="Francais Malaysia"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included In Your Partnership ──────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            What&apos;s{" "}
            <span className="text-[var(--brand)]">Included</span> In Your Partnership
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {partnershipIncludes.slice(0, 3).map((p) => (
              <article
                key={p.title}
                className="rounded-3xl p-6 ring-1 ring-[var(--brand)]/20"
              >
                <div className="mb-3 text-[var(--foreground)]">{p.icon}</div>
                <h3 className="font-extrabold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {partnershipIncludes.slice(3).map((p) => (
              <article
                key={p.title}
                className="rounded-3xl p-6 ring-1 ring-[var(--brand)]/20"
              >
                <div className="mb-3 text-[var(--foreground)]">{p.icon}</div>
                <h3 className="font-extrabold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Adores Kids? ─────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--cream)]">
        <Image
          src="/Franchising%20Opportunity/franchising-opportunity-cta-background.jpg"
          alt=""
          fill
          className="-z-10 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-white/80" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* Kids photo */}
          <div className="flex justify-center">
            <div className="relative h-72 w-full max-w-sm overflow-hidden rounded-3xl md:h-96">
              <Image
                src="/Career%20Opportunity/hero-child.png"
                alt="Ebright students with microphones"
                fill
                className="object-cover object-top"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Adores Kids? Help Us Build Their Confidence.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--ink-soft)]">
              Join a team dedicated to inspiring children and watching them grow into
              confident leaders. As our network expands, we are looking for passionate
              individuals to join our management and operations teams. Apply today to build
              a career with real impact!
            </p>
            <Link
              href="/join-the-team"
              className="mt-7 inline-flex items-center rounded-lg bg-[var(--brand)] px-7 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-strong)]"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
