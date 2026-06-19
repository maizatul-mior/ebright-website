import type { Metadata } from "next";
import Image from "next/image";
import FindAClass from "../components/FindAClass";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Our Story — Ebright Public Speaking Academy",
  description:
    "Nurturing the next generation of confident leaders. Discover Ebright's vision, mission, journey since 2016, and the methodology behind Malaysia's most prominent kids' public speaking academy.",
};

/* ─── Hero collage images ──────────────────────────────────────────────────── */
const heroLeftCol1 = [
  "/our-story/img-03.png",
  "/our-story/img-05.png",
  "/our-story/img-07.jpg",
];
const heroLeftCol2 = [
  "/our-story/img-01.jpg",
  "/our-story/img-04.png",
  "/our-story/img-06.png",
];
const heroRightCol1 = [
  "/our-story/img-09.png",
  "/our-story/img-10.png",
  "/our-story/img-11.png",
];
const heroRightCol2 = [
  "/our-story/img-08.png",
  "/our-story/img-14.png",
  "/our-story/img-15.png",
];

/* ─── Journey ──────────────────────────────────────────────────────────────── */
const journey = [
  {
    year: "2016",
    title: "The Foundation",
    body: "Ebright launches its first specialized public speaking curriculum for children in Malaysia.",
  },
  {
    year: "2020",
    title: "The Digital Pivot",
    body: "When the world changed, Ebright expanded online, connecting children across Malaysia and Southeast Asia in interactive virtual classrooms.",
  },
  {
    year: "2024",
    title: "National Recognition",
    body: "Celebrated as a household name in kids' public speaking, earning the prestigious Parents' Choice Award.",
  },
  {
    year: "2026",
    title: "A Thriving Community",
    body: "Ebright is trusted by families across 20+ physical and online branches, with over 4,400+ active students and 20,000+ successful alumni.",
  },
];

/* ─── Methodology ──────────────────────────────────────────────────────────── */
const methodology = [
  {
    title: "Systemized Fun",
    body: "We balance a rigorous, internationally approved Trinity College London curriculum with high-energy, interactive games.",
    img: "/home/prog-weekly.png",
  },
  {
    title: "Real World Experience",
    body: "We don't just practice in classrooms. We give students regular opportunities to speak at live showcases and national events.",
    img: "/home/prog-showcases.jpg",
  },
  {
    title: "Live Long Confidence",
    body: "Public speaking is a gateway skill. The confidence built on our stages follows children into their academic and adult lives.",
    img: "/home/about-3.png",
  },
];

/* ─── Hero collage helper ──────────────────────────────────────────────────── */
function Collage({
  col1,
  col2,
  staggerFirst,
}: {
  col1: string[];
  col2: string[];
  staggerFirst?: boolean;
}) {
  return (
    <div className="hidden xl:flex w-[270px] shrink-0 gap-2 px-3 py-12">
      <div className={`flex flex-1 flex-col gap-2${staggerFirst ? " pt-7" : ""}`}>
        {col1.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
            <Image src={src} alt="" fill className="object-cover" sizes="120px" />
          </div>
        ))}
      </div>
      <div className={`flex flex-1 flex-col gap-2${staggerFirst ? "" : " pt-7"}`}>
        {col2.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
            <Image src={src} alt="" fill className="object-cover" sizes="120px" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function OurStory() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center">
          <Collage col1={heroLeftCol1} col2={heroLeftCol2} />
          <div className="flex-1 px-8 py-20 text-center">
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
              Nurturing the Next Generation of{" "}
              <span className="block text-[var(--brand)]">Confident Leaders</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
              Our journey began with a simple belief: every child has a voice that deserves to be
              heard on stage and in life.
            </p>
          </div>
          <Collage col1={heroRightCol1} col2={heroRightCol2} staggerFirst />
        </div>
      </section>

      {/* ── Vision & Mission ──────────────────────────────────────────── */}
      <section className="bg-[var(--brand)] text-white">
        <div className="mx-auto grid max-w-7xl gap-y-12 px-6 py-16 md:grid-cols-2 md:gap-x-0 md:divide-x md:divide-white/30">
          <div className="flex items-center gap-6 md:pr-12">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white">
              <TargetIcon className="h-12 w-12 text-[var(--brand)]" />
            </span>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest">Our Vision</h2>
              <p className="mt-3 text-sm leading-7 text-white/90">
                To unleash every child&apos;s hidden potential and help them discover their
                life&apos;s purpose by giving them a stage to shine on through our fun, energetic,
                and innovative learning platform.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:pl-12">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white">
              <RocketIcon className="h-12 w-12 text-[var(--brand)]" />
            </span>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest">Our Mission</h2>
              <p className="mt-3 text-sm leading-7 text-white/90">
                To train 1,000 inspiring youth coaches and empower 20 dedicated edupreneurs who are
                collectively committed to instilling absolute self-confidence, transforming young
                lives, and making a lasting regional impact by the year 2027 and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About + Journey ───────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* About text + image */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Ebright Public Speaking Academy
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-[var(--ink-soft)]">
              <p>
                Ebright Kids Public Speaking has a rich history in helping children develop their
                speaking confidence through professional public speaking training. Our story begins
                in 2016 where our two founders, one of which is Mr. Kevin Khoo, came together to
                create the company. Formerly known as SF Training Provider, we now go by the name
                Ebright Sdn. Bhd.
              </p>
              <p>
                Ebright was founded with only one objective in mind: to provide professional public
                speaking training to children so that they can improve their confidence. Indeed,
                students who&apos;ve been exposed to professional public speaking may discover
                certain hidden talents that have never surfaced prior to their training. We&apos;ve
                also realized that while some may already know their talents, however, there is a
                lack of suitable environments where they can fully utilize them.
              </p>
            </div>
            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/our-story/img-12.png"
                alt="Ebright students at a showcase"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Journey */}
          <div className="rounded-3xl bg-[#f8f9fa] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-bold uppercase tracking-widest">Our Journey</h2>
            <ol className="relative mt-8 space-y-8 before:absolute before:bottom-3 before:left-[7px] before:top-3 before:w-0.5 before:bg-[var(--brand)]">
              {journey.map((j) => (
                <li key={j.year} className="relative pl-9">
                  <span className="absolute left-0 top-2.5 z-10 h-4 w-4 rounded-full bg-[var(--brand)]" />
                  <span className="inline-flex items-center gap-3 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white">
                    {j.year}
                    <span className="h-4 w-px bg-white/50" />
                    {j.title}
                  </span>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{j.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            The Ebright Methodology
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {methodology.map(({ title, body, img }) => (
              <article
                key={title}
                className="relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-3xl p-8 text-white"
              >
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand)] from-[30%] via-[var(--brand)]/70 via-[55%] to-transparent to-[78%]" />
                <div className="relative">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/90">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FindAClass />
      <GrowingHistoryCta />
    </>
  );
}

/* ─── Icons ────────────────────────────────────────────────────────────────── */
function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 12 19 5M16 5h3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 8-10c2.5 0 5 2.5 5 5a22 22 0 0 1-10 8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
