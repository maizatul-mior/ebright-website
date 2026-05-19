export const metadata = {
  title: "Hall Of Excellence — Ebright",
  description: "Celebrating our students' achievements in public speaking.",
};

export default function HallOfExcellence() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Hall Of Excellence</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Celebrating our brightest speakers
        </h1>
        <p className="mt-6 text-lg text-[var(--ink-soft)]">
          Our students have spoken on stages across Malaysia and beyond — from local competitions
          to international showcases. Their stories of growth and achievement are what drive us.
        </p>
        <p className="mt-12 inline-block rounded-full bg-[var(--cream)] px-5 py-2 text-sm font-medium text-[var(--ink-soft)]">
          Student achievement gallery coming soon
        </p>
      </div>
    </section>
  );
}
