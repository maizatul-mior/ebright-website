import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Programmes — Ebright Public Speaking Academy",
  description:
    "Explore Ebright's core communication tracks — Weekly Classes, Interactive Online Classes, Holiday Camps, and Live Showcases — designed for individual students and school-wide partnerships.",
};

const details = [
  {
    titleBefore: "",
    titleBrand: "Weekly Core",
    titleAfter: " Classes (Physical Classes)",
    body: "Every week, we bring the fun with multiple classes happening at different times and venues across Klang Valley! Kids will dive into exciting activities that boost their confidence and presentation skills, setting the stage for a lively and energetic learning experience!",
    image: "/programmes/weekly-core-classes.jpg",
    href: "/programmes/weekly-classes",
  },
  {
    titleBefore: "Public Speaking ",
    titleBrand: "School Holiday",
    titleAfter: " Workshops",
    body: "Our special school collaboration program is sparking excitement across Malaysia! We're bringing dynamic public speaking classes to an ever-growing number of students from schools nationwide. This initiative is all about sharing our passion and expertise, making sure young speakers everywhere get the chance to shine.",
    image: "/programmes/public-speaking-school-workshop.jpg",
    href: "/programmes/weekly-classes",
  },
  {
    titleBefore: "School ",
    titleBrand: "Workshop",
    titleAfter: " and School Engagement",
    body: "With this program, we're expanding our reach and empowering students to discover their voices. Get ready for a wave of enthusiasm and confidence as we nurture the next generation of stellar speakers and leaders!",
    image: "/programmes/school-workshop-and-engagement.jpg",
    href: "/programmes/weekly-classes",
  },
  {
    titleBefore: "",
    titleBrand: "",
    titleAfter: "Trinity College London",
    body: "Ebright Public Speaking is collaborating with the well-known Trinity College London which is specialized in certified international English examinations. We offer one-to-one training for students preparing for the Trinity College London Communication Skills assessment.",
    image: "/programmes/trinity-college-london.jpg",
    href: "/programmes/trinity-college-london",
  },
];

export default function Programmes() {
  return (
    <>
      {/* Hero — photo background with dark overlay */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/programmes/hero-programmes.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Pathways to Unstoppable Confidence
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Explore our 4 core communication tracks, designed for individual students and
            school-wide partnerships.
          </p>
        </div>
      </section>

      {/* Programme cards — alternating layout */}
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {details.map((d, i) => (
            <article
              key={i}
              className="grid items-center overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] md:grid-cols-2"
            >
              <div className={`relative min-h-[300px] ${i % 2 === 0 ? "md:order-2" : ""}`}>
                <Image
                  src={d.image}
                  alt={d.titleBefore + d.titleBrand + d.titleAfter}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                  {d.titleBefore}
                  {d.titleBrand && (
                    <span className="text-[var(--brand)]">{d.titleBrand}</span>
                  )}
                  {d.titleAfter}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">{d.body}</p>
                <Link
                  href={d.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  Learn More
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}

