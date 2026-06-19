import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GrowingHistoryCta from "../../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Weekly Classes — Ebright Public Speaking Academy",
  description:
    "Consistent weekly public speaking training for children aged 6–16. Physical classes, online classes, and advanced debate across Malaysia.",
};

// ── Data ────────────────────────────────────────────────────────────────

const stats = [
  {
    icon: <ClockIcon />,
    label: "Duration",
    value: "1 Hour & 15 Minutes per session",
  },
  {
    icon: <SpeechIcon />,
    label: "Languages",
    value: "100% Conducted in English",
  },
  {
    icon: <GroupIcon />,
    label: "Class Size",
    value: "Small, supportive groups for maximum stage time",
  },
  {
    icon: <AgeIcon />,
    label: "Age Group",
    value: "Specialized tracks for ages 6 to 16",
  },
];

const classes = [
  {
    title: "Physical Public Speaking Class",
    body: "Our physical public speaking classes, designed for children aged 7 to 16, cover everyday topics while encouraging students to express themselves and present their thoughts with confidence.",
    href: "/our-branches",
    cta: "Our Branches",
    image: "/Weekly%20Classes/physcial-public-speaking-class.png",
  },
  {
    title: "Online Public Speaking Class",
    body: "Our online public speaking classes, tailored for children aged 7 to 16, are conducted via Zoom, allowing students from Malaysia and Southeast Asia to learn the art of public speaking and boost their confidence from the comfort of their homes.",
    href: "/contact-us",
    cta: "Contact Us",
    image: "/Weekly%20Classes/online-public-speaking-class.png",
  },
  {
    title: "Advanced Debate Classes",
    body: "Our debate class empowers young minds to master the art of argumentation. Through engaging sessions, students develop critical thinking skills, learn the fundamentals of persuasive debate, and build confidence in their ability to articulate their opinions!",
    href: "/contact-us",
    cta: "Contact Us",
    image: "/Weekly%20Classes/advanced-debate-class.png",
  },
];

const stagePhotos = [
  "/Weekly%20Classes/showcase-1.jpg",
  "/Weekly%20Classes/showcase-2.png",
  "/Weekly%20Classes/weekly_classes_13.jpg",
];

// ── Page ────────────────────────────────────────────────────────────────

export default function WeeklyClasses() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Weekly%20Classes/hero-weekly-classes.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Consistent Weekly Training for Long–Term Confidence
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/80">
            Nurturing young speakers through regular, high-energy sessions that turn
            communication into a lifelong superpower.
          </p>
          <Link
            href="/trial-class"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-bold text-[var(--foreground)] shadow-lg transition hover:brightness-95"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book A Trial Class
          </Link>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="border-b border-black/5 bg-white py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                {s.icon}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
                  {s.label}
                </p>
                <p className="mt-0.5 text-sm leading-5 text-[var(--foreground)]">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Class Cards ───────────────────────────────────────── */}
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          {classes.map((c) => (
            <article
              key={c.title}
              className="grid overflow-hidden rounded-3xl bg-[var(--brand)] md:grid-cols-[3fr_2fr]"
            >
              {/* Text */}
              <div className="p-8 text-white md:p-12">
                <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl">{c.title}</h2>
                <p className="mt-4 text-base leading-7 text-white/85">{c.body}</p>
                <Link
                  href={c.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  {c.cta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className="relative min-h-60">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Real Stage Experience ─────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Weekly%20Classes/stage-background.jpg"
          alt=""
          fill
          className="-z-10 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/65" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-24">
          {/* Mic image */}
          <div className="flex justify-center">
            <Image
              src="/Weekly%20Classes/ebright-mic.png"
              alt="Ebright microphone"
              width={380}
              height={500}
              className="h-auto w-full max-w-xs object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Real Stage Experience!
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Every enrolled student gains direct, prioritized access to perform live at our
              community showcase events in premier public venues. These regular platforms let
              your child practice constantly in front of real audiences, turning nervous energy
              into genuine stage pride.
            </p>

            {/* Event photos */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stagePhotos.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}

// ── Icons ────────────────────────────────────────────────────────────────

function ClockIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function SpeechIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function GroupIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function AgeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    </svg>
  );
}
