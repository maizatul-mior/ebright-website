import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hall of Excellence — Ebright Public Speaking Academy",
  description:
    "Celebrating Ebright students in the spotlight — media appearances, competition wins, and proud moments on national stages.",
};

const features = [
  {
    title: "Zaza's Appearance on RTV",
    image: "/hall-of-excellence/img-01.png",
    body: "On the 8th of November, Nur Ayeesha Azzaleea A.K.A Zaza makes an appearance in RTV channel! In conjunction of 'Bulan Keluarga Kebangsaan', her mother speaks of Zaza's progress in becoming the brilliant speaker she is today and the dedication she holds just for her child. This truly shows the importance of our family members' support to become a better version of ourself.",
  },
];

export default function HallOfExcellence() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-[var(--brand)]">Hall of Excellence</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Our Stars in the <span className="text-[var(--brand)]">Spotlight</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
            From national television to live stages, our students are making their voices heard.
            Here are some of the proud moments worth celebrating.
          </p>
        </div>
      </section>

      {/* Media features */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          {features.map((f, i) => (
            <article
              key={i}
              className={`grid items-center gap-8 overflow-hidden rounded-3xl bg-[var(--cream)] ring-1 ring-black/5 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[320px] bg-[var(--foreground)]">
                <Image src={f.image} alt={f.title} fill className="object-contain p-4" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold tracking-tight">{f.title}</h2>
                <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[var(--brand)] px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Give Your Child Stage Confidence
          </h2>
          <p className="mt-4 text-base text-white/85">
            Book a quick trial class at any of our 20+ locations or online via Zoom.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/trial-class"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-[var(--foreground)] transition hover:brightness-95"
            >
              Book Trial Class
            </Link>
            <Link
              href="/programmes"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              View Our Core Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
