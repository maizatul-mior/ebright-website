import type { Metadata } from "next";
import Image from "next/image";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Testimonials — Ebright Public Speaking Academy",
  description:
    "Hear directly from Malaysian parents who watched their children conquer stage fright, build lifelong social skills, and step into their true potential.",
};

const parentCards = [
  {
    photo: "/testimonial/parent-photo-1.png",
    quote:
      "My son has been joining Ebright Online since pandemic. He looks forward to his online lesson where he meets new friends and support one another. Coach is also very encouraging and engaging students in a positive manner!",
  },
  {
    photo: "/testimonial/parent-photo-2.png",
    quote:
      "Absolutely phenomenal public speaking class for kids! My little one has transformed from a shy speaker to a confident communicator, all thanks to this fantastic programme!",
  },
];

const videos = [
  { thumbnail: "/trial-class/testimonial-1.jpg", title: "Overcoming Deep Stage Fright" },
  { thumbnail: "/trial-class/testimonial-2.jpg", title: "“Nurturing Natural Eloquence”" },
  { thumbnail: "/trial-class/testimonial-1.jpg", title: "Overcoming Deep Stage Fright" },
  { thumbnail: "/trial-class/testimonial-2.jpg", title: "Overcoming Deep Stage Fright" },
  { thumbnail: "/trial-class/testimonial-1.jpg", title: "Overcoming Deep Stage Fright" },
  { thumbnail: "/trial-class/testimonial-2.jpg", title: "Overcoming Deep Stage Fright" },
];

export default function Testimonials() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/testimonial/hero-testimonial.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            From Shy Speakers to Fearless Leaders
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            Hear directly from Malaysian parents who watched their children conquer stage
            fright, build lifelong social skills, and step into their true potential.
          </p>
        </div>
      </section>

      {/* ── Real Stories, Real Impact ─────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Real Stories,{" "}
              <span className="text-[var(--brand)]">Real Impact</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--ink-soft)]">
              Hear directly from everyday parents who watched their children beat stage
              fright, unlock original thoughts, and build authentic life-long confidence.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {parentCards.map((t, i) => (
              <figure
                key={i}
                className="flex overflow-hidden rounded-3xl bg-[#fef5f5] ring-1 ring-[var(--brand)]/10"
              >
                {/* Photo */}
                <div className="relative w-36 shrink-0 self-stretch sm:w-44">
                  <Image
                    src={t.photo}
                    alt="Ebright parent"
                    fill
                    className="object-cover object-top"
                    sizes="180px"
                  />
                </div>

                {/* Quote */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  {/* Decorative quote */}
                  <div className="flex justify-end">
                    <span
                      className="select-none font-black leading-none text-[var(--brand)]"
                      style={{ fontSize: "3.5rem" }}
                    >
                      &ldquo;
                    </span>
                  </div>
                  <blockquote className="-mt-2 text-sm leading-6 text-[var(--foreground)]">
                    {t.quote}
                  </blockquote>
                  <p className="mt-4 text-xs font-medium text-[var(--ink-soft)]">
                    - Ebright Parents -
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Watch How We Make a Difference ───────────────────── */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Watch How We{" "}
              <span className="text-[var(--brand)]">Make a Difference</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--ink-soft)]">
              Click through real video transformations to see how our script-free,
              game-based coaching turns quiet students into fearless public speakers.
            </p>
          </div>

          {/* Video grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {videos.map((v, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/5">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[var(--brand)] shadow-lg transition group-hover:scale-110">
                      <svg className="h-6 w-6 pl-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}
