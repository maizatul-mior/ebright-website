import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import FindAClassSection from "./components/FindAClass";
import GrowingHistoryCta from "./components/GrowingHistoryCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Programs />
      <VideoTestimonials />
      <Experts />
      <FindAClassSection />
      <GrowingHistoryCta />
    </>
  );
}

/* ---------------------------------------------------------------- Hero ---- */

function Hero() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            From Shy Kids
            <br />
            to <span className="text-[var(--brand)]">Confident</span>
            <br />
            <span className="text-[var(--brand)]">Speakers</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-7 text-[var(--ink-soft)]">
            Empower your child with the confidence and skills to speak up and shine! Our engaging
            public speaking classes for kids foster creativity, communication, and leadership.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/trial-class"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
            >
              <CalendarIcon className="h-5 w-5" />
              Book A Trial Class
            </Link>
            <Link
              href="/testimonial"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-6 py-3 text-base font-semibold transition hover:border-black/30"
            >
              <PlayIcon className="h-5 w-5 text-[var(--brand)]" />
              View A Video
            </Link>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <Image
              src="/home/hero-parents.png"
              alt="Happy Ebright parents"
              width={528}
              height={187}
              className="h-9 w-auto"
            />
            <div>
              <div className="flex text-[var(--accent)]">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-sm font-medium text-[var(--ink-soft)]">
                Trusted by 20,000+ parents
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/home/hero-girl.png"
            alt="Confident young Ebright speaker holding a microphone"
            width={1910}
            height={2000}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Stats bar ---- */

function StatsBar() {
  const stats = [
    { icon: UsersIcon, value: "20,000+", label: "Young Lives Trained Since 2016" },
    { icon: CapIcon, value: "4,400+", label: "Active Students Worldwide" },
    { icon: BuildingIcon, value: "20+", label: "Convenient Physical & Online Branches" },
    { icon: AwardIcon, value: "10+", label: "Years of Experience in Kids Training" },
  ];
  return (
    <section className="bg-[var(--brand)] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-8 px-6 py-10 lg:flex-nowrap lg:gap-x-0">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <Fragment key={label}>
            <div className="flex items-center gap-4 lg:flex-1 lg:justify-center lg:px-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white">
                <Icon className="h-8 w-8 text-[var(--brand)]" />
              </span>
              <div>
                <div className="text-3xl font-extrabold leading-none">{value}</div>
                <div className="mt-1.5 max-w-[11rem] text-sm leading-snug text-white/90">{label}</div>
              </div>
            </div>
            {i < stats.length - 1 && <span className="hidden h-14 w-px bg-white/50 lg:block" />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- About ---- */

function About() {
  const awards = [
    { src: "/home/award-soba.png", alt: "Star Outstanding Business Awards", w: 1010, h: 392 },
    { src: "/home/award-toym.png", alt: "JCI TOYM 2025", w: 624, h: 392 },
    { src: "/home/award-choice-2024.png", alt: "Parents' Choice Awards 2024 Winner", w: 596, h: 596 },
    { src: "/home/award-choice-2025.png", alt: "Parents' Choice Awards 2025 Winner", w: 666, h: 596 },
  ];
  return (
    <section className="bg-[var(--cream)] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <CollageImg src="/home/about-1.png" alt="Ebright community event" className="aspect-square" />
          <CollageImg src="/home/about-2.png" alt="Ebright class in session" className="row-span-2 aspect-[3/5]" />
          <CollageImg src="/home/about-3.png" alt="Student speaking on stage" className="aspect-[4/3]" />
          <CollageImg src="/home/about-4.png" alt="Ebright monthly showcase" className="aspect-[16/9]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Malaysia&apos;s Most Prominent Public Speaking Academy for Kids
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--ink-soft)]">
            Ebright boasts a highly structured, systemized curriculum with a fun, interactive
            learning environment. We are proud to be one of the few centers in Malaysia approved by
            Trinity College London (UK) to run internationally recognized communication skill
            assessments for our students.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
            Our Awards
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            {awards.map((a) => (
              <Image
                key={a.src}
                src={a.src}
                alt={a.alt}
                width={a.w}
                height={a.h}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CollageImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ring-1 ring-black/5 ${className ?? ""}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
    </div>
  );
}

/* ------------------------------------------------------------ Programs ---- */

function Programs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Programs Designed to <span className="text-[var(--brand)]">Unlocking Your Child&apos;s Potential</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            From weekly foundational growth to high-energy holiday camps, find the perfect fit for
            your child&apos;s schedule.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <ProgramCard
            className="lg:row-span-2 lg:min-h-[460px]"
            src="/home/prog-weekly.png"
            title="Weekly Classes"
            blurb="Consistent, step-by-step confidence building via physical campuses or Zoom."
            href="/programmes/weekly-classes"
          />
          <ProgramCard
            src="/home/prog-workshops.png"
            title="School Workshops"
            blurb="High-impact public speaking and leadership programs brought directly to classrooms nationwide."
            href="/programmes/weekly-classes"
          />
          <ProgramCard
            src="/home/prog-camps.png"
            title="Holiday Camps"
            blurb="Fun-focused, intensive school break programs covering debate, emceeing, and leadership."
            href="/programmes/weekly-classes"
          />
          <ProgramCard
            className="lg:col-span-2"
            src="/home/prog-showcases.jpg"
            title="Live Showcases"
            blurb="Regular opportunities for students to speak on real stages in front of live audiences."
            href="/gallery"
          />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  src,
  title,
  blurb,
  href,
  className,
}: {
  src: string;
  title: string;
  blurb: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white ring-1 ring-black/5 ${className ?? ""}`}
    >
      <Image src={src} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 50vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="relative">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 max-w-sm text-sm leading-5 text-white/85">{blurb}</p>
        <span className="mt-3 inline-flex items-center gap-1 rounded-md bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur transition group-hover:bg-white/30">
          Learn More <ArrowIcon className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

/* ------------------------------------------------- Video testimonials ---- */

function VideoTestimonials() {
  const videos = [
    { src: "/home/video-1.png", quote: "Absolutely phenomenal public speaking class for kids!" },
    { src: "/home/video-2.png", quote: "Absolutely phenomenal public speaking class for kids!" },
    { src: "/home/video-3.png", quote: "Absolutely phenomenal public speaking class for kids!" },
  ];
  return (
    <section className="bg-[var(--cream)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Parents. <span className="text-[var(--brand)]">Proven by Kids.</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Hear directly from the supportive parents and talented young ambassadors who make up the
            Ebright family.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <Link key={i} href="/testimonial" className="group block">
              <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/5">
                <Image src={v.src} alt={`Parent testimonial ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 grid place-items-center bg-black/10 transition group-hover:bg-black/20">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[var(--brand)] shadow-lg transition group-hover:scale-110">
                    <PlayIcon className="h-6 w-6" />
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-medium italic text-[var(--ink-soft)]">
                &ldquo;{v.quote}&rdquo;
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Experts ---- */

function Experts() {
  const experts = [
    {
      src: "/home/expert-maryann.png",
      name: "Mary Ann Tear",
      role: "Senior Examiner & Trainer, Trinity College London",
    },
    {
      src: "/home/expert-badrul.png",
      name: "Prof. Ts. Dr. Nor Badrul Anuar",
      role: "Professor, Dept. of Computer Systems & Technology, Universiti Malaya",
    },
    {
      src: "/home/expert-faiz.png",
      name: "Dr. Muhammad Faiz Zaki",
      role: "Senior Lecturer in Computer Networking, Universiti Malaya",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Guided by <span className="text-[var(--brand)]">World-Class Academic Experts</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Our curriculum and standards are overseen by top-tier educators, university professors,
            and international examiners.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experts.map((e) => (
            <article key={e.name} className="overflow-hidden rounded-3xl bg-[var(--cream)] ring-1 ring-black/5">
              <div className="relative aspect-[4/5] w-full">
                <Image src={e.src} alt={e.name} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-12 text-white">
                  <h3 className="text-lg font-bold">{e.name}</h3>
                  <p className="mt-1 text-xs leading-4 text-white/85">{e.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Icons ---- */

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="4" y="3" width="16" height="18" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.2 14.3 6.5 21l5.5-3 5.5 3-1.7-6.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6v3l2 1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
