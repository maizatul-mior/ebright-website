import type { Metadata } from "next";
import Image from "next/image";
import GrowingHistoryCta from "../../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Trinity College London — Ebright Public Speaking Academy",
  description:
    "Elevate your child's communication skills with internationally certified English examinations from Trinity College London that build elite academic portfolios.",
};

export default function TrinityCollegeLondon() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--brand)] text-white">
        <Image
          src="/Trinity%20College%20London/hero-background-trinity-college-london.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover opacity-40"
          sizes="100vw"
        />

        <div className="mx-auto grid max-w-7xl items-center px-6 py-16 md:min-h-[460px] md:grid-cols-2 md:py-20">
          {/* Left: text */}
          <div className="z-10">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Global Speech Credentials with Trinity College London
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/85">
              Elevate your child&apos;s communication skills with internationally certified English
              examinations that build elite academic portfolios.
            </p>
          </div>

          {/* Right: image + badge */}
          <div className="relative mt-10 flex justify-center md:mt-0 md:justify-end">
            {/* Trinity badge */}
            <div className="absolute right-4 top-4 z-10 rounded-xl bg-[#5b21b6] px-5 py-3 shadow-xl">
              <p className="text-xl font-black uppercase tracking-widest text-white">TRINITY</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                COLLEGE LONDON
              </p>
            </div>

            <Image
              src="/Trinity%20College%20London/hero-image-trinity-college-london.png"
              alt="Ebright student with microphone"
              width={480}
              height={520}
              className="h-auto w-full max-w-xs object-contain drop-shadow-2xl md:max-w-sm"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── About The Program ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-2">
          {/* Left: photos */}
          <div>
            <Image
              src="/Trinity%20College%20London/photos-of-trinity-college-london.png"
              alt="Trinity College London programme photos"
              width={600}
              height={640}
              className="h-auto w-full rounded-3xl"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

          {/* Right: content */}
          <div className="pt-2">
            <h2 className="text-2xl font-extrabold text-[var(--brand)] sm:text-3xl">
              About The Program
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
              Trinity College London, one of Ebright Public Speaking&apos;s esteemed collaborators,
              specializes in certified international English examinations. Ebright has successfully
              trained over 50 students to excel in these exams. Our programs are specifically
              designed to boost confidence while enhancing both spoken and written English skills
              for children and teenagers.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Suitable for teenagers aged 7–16.",
                "Syllabus emphasizes on professional topics and speeches.",
                "Assessment Levels: Grade 1–8.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-base text-[var(--foreground)]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--foreground)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}
