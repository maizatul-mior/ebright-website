import type { Metadata } from "next";
import Image from "next/image";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Annual Showcase — Ebright Public Speaking Academy",
  description:
    "Our Annual Grand Showcase is Malaysia's premier youth public speaking event, bringing together hundreds of students to command professional stages before prominent corporate icons and national leaders.",
};

// ── Data ────────────────────────────────────────────────────────────────

const showcases = [
  {
    year: "2025",
    title: "Ebright Festival: Dare To Dream",
    paragraphs: [
      "Our landmark event celebrated young dreams on a grand corporate stage hosted in partnership with Top Glove Corporation Bhd.",
      "We were deeply honored to welcome distinguished guest speakers YB Tuan Haji Aziz Yusuf and Tan Sri Dr. Lim Wee Chai, who inspired our young orators to speak boldly with true confidence.",
      "The festival successfully showcased our students' growth alongside massive support from elite national partners like Alliance Bank, Mercy Mission, and Universiti Malaya.",
    ],
    photos: [
      "/Annual%20Showcase/ebright-festival-2025-1.png",
      "/Annual%20Showcase/ebright-festival-2025-2.png",
      "/Annual%20Showcase/ebright-festival-2025-3.jpg",
    ],
  },
  {
    year: "2024",
    title: "Ebright Carnival: Hope for the Future",
    paragraphs: [
      "This massive annual showcase broke records by bringing together over 300 confident student speakers and more than 3,000 live audience members.",
      "A major highlight of the event was our meaningful partnership with the Malaysian Association for the Blind (MAB), giving a powerful public platform to inclusive, diverse young voices.",
      "The carnival gained immense momentum and widespread community acclaim through sponsorships from trusted brands like DoubleTree by Hilton, Avisena, and Zus Coffee.",
    ],
    photos: [
      "/Annual%20Showcase/ebright-carnival-2024-1.jpg",
      "/Annual%20Showcase/ebright-carnival-2024-2.jpg",
    ],
  },
  {
    year: "2023",
    title: "Wonders of the World",
    paragraphs: [
      "Held at the prestigious Damansara Performing Arts Centre (DPAC), this showcase officially established our annual program as one of the biggest youth public speaking events in Malaysia.",
      "More than 250 participants stepped up to the microphone, commanding a live theater audience of over 1,000 family members and community leaders. The high energy evening served as the main flagship event across all Ebright branches to prove that any child can conquer stage fright when given the right platform.",
    ],
    photos: [
      "/Annual%20Showcase/wonders-of-the-world-1.png",
      "/Annual%20Showcase/wonders-of-the-world-2.jpg",
    ],
  },
];

// ── Page ────────────────────────────────────────────────────────────────

export default function AnnualShowcase() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Annual%20Showcase/hero-background-annual-showcase.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:min-h-[500px] md:py-20">
          {/* Text */}
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              The Grand Stage:
              <br />
              <span className="text-[var(--accent)]">
                Where Young
                <br />
                Leaders Shine
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/80">
              Our Annual Grand Showcase is Malaysia&apos;s premier youth public speaking event,
              bringing together hundreds of students to command professional stages before
              prominent corporate icons and national leaders.
            </p>
          </div>

          {/* Hero image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Annual%20Showcase/hero-image-annual-showcase.png"
              alt="Ebright students on stage"
              width={540}
              height={520}
              className="h-auto w-full max-w-sm object-contain drop-shadow-2xl md:max-w-md"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[var(--brand)]/20 md:left-10" />

            <div className="space-y-10">
              {showcases.map((s) => (
                <div key={s.year} className="relative pl-24 md:pl-28">
                  {/* Year badge */}
                  <div className="absolute left-0 top-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-extrabold text-white shadow-md md:h-20 md:w-20 md:text-base">
                    {s.year}
                  </div>

                  {/* Card */}
                  <article className="grid items-start gap-6 overflow-hidden rounded-3xl bg-[#fef5f5] p-6 ring-1 ring-[var(--brand)]/10 md:grid-cols-[3fr_2fr] md:p-8">
                    {/* Text */}
                    <div>
                      <h2 className="text-2xl font-extrabold leading-snug text-[var(--brand)] sm:text-3xl">
                        {s.title}
                      </h2>
                      <span className="mt-3 inline-block rounded-lg bg-[var(--accent)] px-3 py-1 text-xs font-bold text-[var(--foreground)]">
                        The Milestone Story:
                      </span>
                      <div className="mt-4 space-y-3">
                        {s.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm leading-7 text-[var(--ink-soft)]">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Photos */}
                    <div className="flex flex-col gap-2">
                      {/* First photo — video-style with play overlay */}
                      <div className="group relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/5">
                        <Image
                          src={s.photos[0]}
                          alt={s.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-105"
                          sizes="(max-width:768px) 100vw, 35vw"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
                          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-[var(--brand)] shadow-lg transition group-hover:scale-110">
                            <svg className="h-5 w-5 pl-0.5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Remaining photos */}
                      {s.photos.length > 1 && (
                        <div
                          className={`grid gap-2 ${s.photos.length >= 3 ? "grid-cols-2" : "grid-cols-1"}`}
                        >
                          {s.photos.slice(1).map((photo, i) => (
                            <div
                              key={i}
                              className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/5"
                            >
                              <Image
                                src={photo}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width:768px) 50vw, 18vw"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
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
