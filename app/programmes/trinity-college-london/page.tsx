import Link from "next/link";

export const metadata = {
  title: "Trinity College London — Ebright",
  description: "Certified international English assessments through Trinity College London.",
};

export default function Trinity() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Programmes</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Trinity College London — Certified Assessments
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)]">
            Trinity College London, one of Ebright Public Speaking&apos;s esteemed collaborators,
            specializes in certified international English examinations. Ebright has successfully
            trained over 50 students to excel in these exams.
          </p>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Our programs are specifically designed to boost confidence while enhancing both
            spoken and written English skills for children and teenagers.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Ages", value: "7–16 years old", body: "Children and teenagers aged 7 to 16 are eligible for the Communication Skills programme." },
              { title: "Levels", value: "Grade 1–8", body: "Eight progressive grades, each building toward more nuanced and persuasive communication." },
              { title: "Focus", value: "Professional topics", body: "Syllabus emphasizes professional topics and speeches — preparing students for real audiences." },
            ].map((c) => (
              <article key={c.title} className="rounded-3xl bg-[var(--cream)] p-8 ring-1 ring-black/5">
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">{c.title}</p>
                <h3 className="mt-2 text-2xl font-bold">{c.value}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">What students walk away with</h2>
          <ul className="mt-6 space-y-3 text-base leading-7 text-[var(--ink-soft)]">
            {[
              "An internationally recognized certificate from Trinity College London (UK).",
              "Sharper speech delivery, vocal modulation, and body language.",
              "Confidence speaking on topics they haven't memorized in advance.",
              "A measurable benchmark of progress, grade by grade.",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--brand)]" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/trial-class"
              className="inline-flex rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            >
              Start your child&apos;s Trinity journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
