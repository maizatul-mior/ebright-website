export const metadata = {
  title: "Blog — Ebright",
  description: "Tips, stories, and updates from Ebright Public Speaking.",
};

export default function Blog() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Blog</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Stories, tips, and updates
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Insights on raising confident communicators, behind-the-scenes from showcases, and
            advice from our coaches.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="inline-block rounded-full bg-[var(--cream)] px-5 py-2 text-sm font-medium text-[var(--ink-soft)]">
            Blog posts coming soon
          </p>
        </div>
      </section>
    </>
  );
}
