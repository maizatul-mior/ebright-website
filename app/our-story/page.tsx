import Link from "next/link";

export const metadata = {
  title: "Our Story — Ebright",
  description: "How Ebright was founded to nurture future leaders through public speaking.",
};

export default function OurStory() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Our Story</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            About Ebright Kids Public Speaking
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-lg leading-8 text-[var(--ink-soft)]">
          <p>
            Ebright was founded to help nurture the future leaders of the world by providing
            what we firmly believe is a solid foundation and a great platform for children to
            take advantage of.
          </p>
          <p>
            To excel, our children need to think beyond the school curriculum and look further
            beyond what they have grown accustomed to in school in order to build self-confidence,
            creative thinking and resilience.
          </p>
          <p>
            Ebright Kids Public Speaking provides soft skill training services to children in a
            fun environment with an interactive voice. With our public speaking courses, your
            child will learn how to express in a more open manner, become more confident, conquer
            fear for public speaking and so much more!
          </p>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-[var(--brand)]">Vision</h2>
              <p className="mt-4 text-lg leading-7 text-[var(--ink-soft)]">
                Train 1,000 inspiring coaches, creating 20 edupreneurs who are dedicated to instill
                confidence, transform lives and make an impact on children by the year 2027.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-[var(--brand)]">Mission</h2>
              <p className="mt-4 text-lg leading-7 text-[var(--ink-soft)]">
                Unleash children&apos;s hidden potential to life&apos;s purpose, by giving them an
                opportunity to shine through our fun, energetic and innovative platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Core Values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { emoji: "🎉", title: "Fun is a must!", body: "Learning sticks when kids are enjoying themselves. Every class is designed to be energetic and engaging." },
              { emoji: "🤝", title: "Relationships are important!", body: "Strong relationships between coaches, students, and parents create the trust kids need to take risks on stage." },
              { emoji: "🧩", title: "Blended teaching approach", body: "We combine games, worksheets, performance, feedback, and showcase opportunities — not just one method." },
            ].map((v) => (
              <article key={v.title} className="rounded-3xl bg-[var(--cream)] p-7 shadow-sm ring-1 ring-black/5">
                <span className="text-3xl">{v.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to see Ebright in action?</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Book a trial class and watch your child take their first step onto the stage.
          </p>
          <Link
            href="/trial-class"
            className="mt-8 inline-flex rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
          >
            Register for a trial class!
          </Link>
        </div>
      </section>
    </>
  );
}
