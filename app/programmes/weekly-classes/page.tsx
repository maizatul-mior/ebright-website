import Link from "next/link";

export const metadata = {
  title: "Weekly Classes — Ebright",
  description: "In-person weekly public speaking classes across the Klang Valley.",
};

export default function WeeklyClasses() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Programmes</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Weekly Classes</h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)]">
            Every week, we bring the fun with multiple classes happening at different times and
            venues across Klang Valley! Kids will dive into exciting activities that boost their
            confidence and presentation skills, setting the stage for a lively and energetic
            learning experience.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">What a weekly class looks like</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: "🎲", title: "Games & warm-ups", body: "Energizers and ice-breakers that get every kid talking and laughing within the first ten minutes." },
              { emoji: "📝", title: "Topic-specific worksheets", body: "Custom worksheets aligned with the Trinity College London communication syllabus." },
              { emoji: "🎤", title: "Speech practice", body: "Kids deliver 2-minute speeches using main points — not memorization." },
              { emoji: "💬", title: "Constructive feedback", body: "Coaches give actionable feedback so kids improve week over week." },
              { emoji: "🎥", title: "Filmed presentations", body: "Performances filmed in front of the group so students can review their own progress." },
              { emoji: "🏆", title: "Monthly showcases", body: "Real performance opportunities at malls, auditoriums, and Ebright events." },
            ].map((c) => (
              <article key={c.title} className="rounded-3xl bg-[var(--cream)] p-6 ring-1 ring-black/5">
                <span className="text-3xl">{c.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">The essentials</h2>
          <dl className="mt-8 space-y-4 text-base">
            {[
              ["Ages", "7–16 years old"],
              ["Class size", "Small groups — 1 coach to 6 students"],
              ["Duration", "12 weeks per grade (programme is continuous)"],
              ["Levels", "Grade 1 through Grade 8 (Trinity-aligned)"],
              ["Locations", "All 22 in-person branches across Klang Valley + KL"],
              ["When to start", "Anytime — classes are batchless"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 rounded-2xl bg-white p-5 ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between">
                <dt className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">{k}</dt>
                <dd className="text-base text-[var(--foreground)]">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 text-center">
            <Link
              href="/trial-class"
              className="inline-flex rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            >
              Register for a trial class!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
