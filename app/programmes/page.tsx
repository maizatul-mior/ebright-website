import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Programmes — Ebright Public Speaking Academy",
  description:
    "Explore Ebright's core communication tracks — Weekly Classes, Interactive Online Classes, Holiday Camps, and Live Showcases — designed for individual students and school-wide partnerships.",
};

const cards = [
  {
    title: "Weekly Classes",
    body: "Flagship physical campus public speaking training tailored for steady, long-term confidence building.",
    href: "/programmes/weekly-classes",
  },
  {
    title: "Interactive Online Classes (Zoom)",
    body: "High-energy public speaking programs delivered live on Zoom, led by experienced and native-speaking coaches.",
    href: "/programmes/online-classes",
  },
  {
    title: "Holiday Camps",
    body: "Fast-paced, intensive school break programs covering debate, emceeing, and leadership.",
    href: "/programmes/weekly-classes",
  },
  {
    title: "Live Showcases",
    body: "Regular opportunities for students to speak on real stages in front of live audiences.",
    href: "/gallery",
  },
];

const details = [
  {
    title: "Weekly Core Classes (Physical Classes)",
    body: "Held across our 20+ locations, this flagship program is built for consistent development. We ditch dry academic lectures and replace them with high-energy, interactive games that help children master vocal projection, strong body language, and impromptu thinking.",
    image: "/home/prog-weekly.png",
    href: "/programmes/weekly-classes",
  },
  {
    title: "Interactive Online Classes (Zoom)",
    body: "Premium training without the travel. Small, interactive Zoom classrooms — including sessions led by UK native-speaking coaches — connect children across Malaysia and the region in a safe, supportive space to overcome shyness and find their voice.",
    image: "/home/prog-workshops.png",
    href: "/programmes/online-classes",
  },
  {
    title: "Holiday Camps",
    body: "Make the school holidays count. Our intensive break programs pack debate, emceeing, and leadership into fun, confidence-building workshops that keep young minds engaged and growing.",
    image: "/home/prog-camps.png",
    href: "/programmes/weekly-classes",
  },
  {
    title: "Live Showcases",
    body: "Confidence is built on real stages. Through monthly showcases and national events at malls and auditoriums, students put their skills into practice in front of live audiences — the moments parents never forget.",
    image: "/home/prog-showcases.jpg",
    href: "/gallery",
  },
];

export default function Programmes() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--foreground)] text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Pathways to <span className="text-[var(--accent)]">Unstoppable Confidence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Explore our 4 core communication tracks, designed for individual students and
            school-wide partnerships.
          </p>
        </div>
      </section>

      {/* Program cards grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Programs</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-3xl bg-[var(--cream)] p-6 ring-1 ring-black/5 transition hover:shadow-md hover:ring-[var(--brand)]/30"
              >
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[var(--ink-soft)]">{c.body}</p>
                <Link
                  href={c.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:underline"
                >
                  Learn More
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed program sections */}
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {details.map((d, i) => (
            <article
              key={d.title}
              className="grid items-center gap-8 overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 md:grid-cols-2"
            >
              <div className={`relative min-h-[280px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image src={d.image} alt={d.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--brand)]">{d.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">{d.body}</p>
                <Link
                  href={d.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:underline"
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
