import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join the Team — Ebright Public Speaking Academy",
  description:
    "Build your career at Ebright. Help children conquer stage fright and grow alongside a passionate, fast-expanding team.",
};

// ── Data ────────────────────────────────────────────────────────────────

const whyCards = [
  {
    icon: (
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.2 4.16-3 5.2V17H9v-2.8C7.2 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
        <path d="M9 17h6" />
      </svg>
    ),
    title: "Inspire Young Minds",
    body: "Help children conquer stage fright and realize their full potential. You will equip the next generation with life-long communication skills and unstoppable confidence.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l4-4 4 4 4-6 4 4" />
        <path d="M21 21H3" />
        <path d="M21 3v4h-4" />
        <path d="M21 3l-5 5" />
      </svg>
    ),
    title: "Grow with Elite Team",
    body: "Work alongside a highly motivated, collaborative, and emotionally intelligent team. Gain valuable educational insights and accelerate your career within a rapidly expanding academy.",
  },
];

const jobs = [
  {
    title: "Public Speaking Coach",
    type: "Part-time / Full Time",
    duties: [
      "Conduct enganging public speaking classes",
      "Guide student's speaking development",
      "Track progress & give constructive feedback",
    ],
  },
  {
    title: "Facilitator",
    type: "Part-time",
    duties: [
      "Assist senior coaches in public speaking classes",
      "Support student engagement during interactive games",
      "Maintain a high-energy, positive classroom environment",
    ],
  },
  {
    title: "Operational Admin",
    type: "Part-time",
    duties: [
      "Handle daily branch admin and parent inquiries",
      "Maintain student enrollment and attendance records",
      "Coordinate scheduling updates with center management",
    ],
  },
  {
    title: "Event Crew",
    type: "Part-time",
    duties: [
      "Set up stage logistics and audio-visual equipment",
      "Manage on-site guest registration and audience flow",
      "Support behind-the-scenes showcase coordination",
    ],
  },
  {
    title: "Business Admin Executive",
    type: "Full Time",
    duties: [
      "Oversee daily center operations and administrative workflows",
      "Manage student billing, documentation, and database systems",
      "Lead customer relations and streamline the enrollment pipeline",
    ],
  },
  {
    title: "Internship Students",
    type: "Internship",
    duties: [
      "Gain hands-on experience across teaching and admin tracks",
      "Assist the core team with day-to-day tasks",
      "Contribute fresh ideas to social media campaigns",
    ],
  },
];

// ── Page ────────────────────────────────────────────────────────────────

export default function JoinTeam() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Career%20Opportunity/hero-career_opportunity.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Shape the Future
            <br />
            of Young Voice
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            Join an award-winning educational center where passionate individuals collaborate
            to inspire children and build lifelong confidence.
          </p>
        </div>
      </section>

      {/* ── Why Build Your Career With Us? ────────────────────── */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr]">
            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Why Build
              <br />
              Your Career
              <br />
              With Us?
            </h2>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {whyCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl bg-[var(--brand)] p-7 text-white"
                >
                  <div className="mb-4">{c.icon}</div>
                  <h3 className="text-lg font-extrabold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Opportunities ─────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Current Opportunities
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="flex flex-col rounded-3xl p-6 ring-1 ring-[var(--brand)]/20"
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--brand)]">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-7 9a7 7 0 0 0 14 0h2a9 9 0 0 1-8 8.94V23h-2v-2.06A9 9 0 0 1 3 12h2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold leading-snug text-[var(--brand)]">{job.title}</h3>
                    <p className="mt-0.5 text-xs text-[var(--ink-soft)]">{job.type}</p>
                  </div>
                </div>

                {/* Duties */}
                <div className="mt-5 flex-1">
                  <p className="text-sm font-bold">What You&apos;ll Do:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--ink-soft)]">
                    {job.duties.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href="mailto:sales@ebright.my?subject=Career%20Application%20-%20{job.title}"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--brand-strong)]"
                  >
                    Apply Now
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
