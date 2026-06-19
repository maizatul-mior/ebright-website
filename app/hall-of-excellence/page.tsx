import type { Metadata } from "next";
import Image from "next/image";
import GrowingHistoryCta from "../components/GrowingHistoryCta";
import StoriesFilter from "./StoriesFilter";

export const metadata: Metadata = {
  title: "Hall of Excellence — Ebright Public Speaking Academy",
  description:
    "Celebrating the outstanding milestones, academic distinctions, and real-world triumphs of our brilliant students who use the power of speech to lead.",
};

// ── Student spotlight data ───────────────────────────────────────────────

const students = [
  {
    name: "Alyssa Derek",
    achievement: "Singer-songwriter",
    image: "/hall-of-excellence/img-00.png",
  },
  {
    name: "Nur Ayesha Azzalea",
    achievement: "Distinction in Trinity Communication Skills",
    image: "/hall-of-excellence/img-01.png",
  },
  {
    name: "Ara Aziz",
    achievement: "Kids TV Host",
    image: "/Hall%20of%20Excellence/ebright-brand-ambassador-1.png",
  },
  {
    name: "Olivia Janna",
    achievement: "Distinction in Trinity Grade 6",
    image: "/Hall%20of%20Excellence/ebright-brand-ambassador-2.png",
  },
  {
    name: "Sharvini Vijayakumar",
    achievement: "Distinction in Ebright Examinations",
    image: "/Hall%20of%20Excellence/hall-of-excellence-vyshnavi.png",
  },
  {
    name: "Low Shuun",
    achievement: "Lead Ebright Student since 2021",
    image: "/Hall%20of%20Excellence/ebright-brand-ambassador-3.png",
  },
  {
    name: "Dhya Humaira",
    achievement: "Distinction in Trinity Communication Skills",
    image: "/Hall%20of%20Excellence/hall-of-excellence-dhiya-humaira.jpg",
  },
  {
    name: "Chui Chee Hui",
    achievement: "Distinction in Trinity Communications 2023",
    image: "/Hall%20of%20Excellence/hall-of-excellence-chee-hui.png",
  },
  {
    name: "Cinta Summayah",
    achievement: "Ebright Ambassador since 2023",
    image: "/Hall%20of%20Excellence/hall-of-excellence-arishya-putri.png",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────

export default function HallOfExcellence() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Hall%20of%20Excellence/hall-of-excellence-hero.png"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            The Hall of Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            Celebrating the outstanding milestones, academic distinctions, and real-world
            triumphs of our brilliant students who use the power of speech to lead.
          </p>
        </div>
      </section>

      {/* ── Student spotlight grid ────────────────────────────── */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            {students.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5"
              >
                <div className="relative aspect-[3/4] bg-[var(--cream)]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width:640px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-extrabold text-[var(--foreground)]">{s.name}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                    {s.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real-World Triumphs & Success Stories ─────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Real-World Triumphs &amp;{" "}
            <span className="text-[var(--brand)]">Success Stories</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">
            Explore how our students use their script-free communication foundations to
            conquer national broadcasting, elite sports, and prestigious international
            academic stages.
          </p>

          <StoriesFilter />
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}
