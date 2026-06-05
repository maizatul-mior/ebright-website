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
      {/* Hero — photo background with dark overlay */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/home/cta-bg.png"
          alt=""
          fill
          priority
          className="-z-10 object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[var(--foreground)]/75" />
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

      {/* Program cards — bento grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <BentoCard
              className="lg:row-span-2 lg:min-h-[460px]"
              img="/home/prog-weekly.png"
              title="Weekly Classes"
              body="Flagship physical campus public speaking training tailored for steady, long-term confidence building."
              href="/programmes/weekly-classes"
            />
            <BentoCard
              dark
              title="Interactive Online Classes (Zoom)"
              body="High-energy public speaking programs delivered live on Zoom, led by experienced and native-speaking coaches."
              href="/programmes/online-classes"
            />
            <BentoCard
              img="/home/prog-camps.png"
              title="Holiday Camps"
              body="Fast-paced, intensive school break programs covering debate, emceeing, and leadership."
              href="/programmes/weekly-classes"
            />
            <BentoCard
              className="lg:col-span-2"
              img="/home/prog-showcases.jpg"
              title="Live Showcases"
              body="Regular opportunities for students to speak on real stages in front of live audiences."
              href="/gallery"
            />
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

function BentoCard({
  img,
  title,
  body,
  href,
  dark,
  className,
}: {
  img?: string;
  title: string;
  body: string;
  href: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white ring-1 ring-black/5 ${
        dark ? "bg-[var(--foreground)]" : ""
      } ${className ?? ""}`}
    >
      {img && (
        <>
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </>
      )}
      <div className="relative">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 max-w-sm text-sm leading-5 text-white/85">{body}</p>
        <span className="mt-3 inline-flex items-center gap-1 rounded-md border border-white/40 px-3 py-1 text-xs font-semibold transition group-hover:bg-white/15">
          Learn More
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
