import type { Metadata } from "next";
import Image from "next/image";
import FindAClass from "../components/FindAClass";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Our Story — Ebright Public Speaking Academy",
  description:
    "Nurturing the next generation of confident leaders. Discover Ebright's vision, mission, journey since 2016, and the methodology behind Malaysia's most prominent kids' public speaking academy.",
};

const journey = [
  {
    year: "2016",
    title: "The Foundation",
    body: "Ebright launches its first specialized public speaking curriculum for children in Malaysia.",
  },
  {
    year: "2020",
    title: "The Digital Pivot",
    body: "When the world changed, Ebright expanded online, connecting children across Malaysia and Southeast Asia in interactive virtual classes.",
  },
  {
    year: "2024",
    title: "National Recognition",
    body: "Celebrated as a household name in kids' education, earning the prestigious Parents' Choice Award.",
  },
  {
    year: "2026",
    title: "A Thriving Community",
    body: "Ebright is trusted by families across 20+ physical and online branches, with over 4,400+ active students and 20,000+ successful alumni.",
  },
];

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

export default function OurStory() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Nurturing the Next Generation of <span className="text-[var(--brand)]">Confident Leaders</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
            Our journey began with a simple belief: every child has a voice that deserves to be heard
            on stage and in life.
          </p>
        </div>
      </section>

      {/* Vision & Mission — full-bleed red band */}
      <section className="bg-[var(--brand)] text-white">
        <div className="mx-auto grid max-w-7xl gap-y-12 px-6 py-16 md:grid-cols-2 md:gap-x-0 md:divide-x md:divide-white/30">
          <div className="flex items-center gap-6 md:pr-12">
            <span className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-white">
              <TargetIcon className="h-14 w-14 text-[var(--brand)]" />
            </span>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide">Our Vision</h2>
              <p className="mt-3 text-base leading-7 text-white/90">
                To unleash every child&apos;s hidden potential and help them discover their
                life&apos;s purpose by giving them a stage to shine on through our fun, energetic,
                and innovative learning platform.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:pl-12">
            <span className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-white">
              <RocketIcon className="h-14 w-14 text-[var(--brand)]" />
            </span>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide">Our Mission</h2>
              <p className="mt-3 text-base leading-7 text-white/90">
                To train 1,000 inspiring youth coaches and empower 20 dedicated edupreneurs who are
                collectively committed to instilling absolute self-confidence, transforming young
                lives, and making a lasting regional impact by the year 2027 and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About + Journey */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
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
                students who&apos;ve been exposed to professional public speaking may discover certain
                hidden talents that have never surfaced prior to their training. We&apos;ve also
                realized that while some may already know their talents, however, there is a lack of
                suitable environments where they can fully utilize them.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#f8f9fa] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-bold uppercase tracking-wide">Our Journey</h2>
            <ol className="relative mt-8 space-y-8 before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--brand)]">
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

      {/* Methodology */}
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

/* Icons */
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 8-10c2.5 0 5 2.5 5 5a22 22 0 0 1-10 8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
