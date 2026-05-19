export const metadata = {
  title: "Gallery — Ebright",
  description: "Photos from Ebright classes, showcases, and events.",
};

export default function Gallery() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Gallery</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Life at Ebright</h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Classes, showcases, school workshops, holiday programmes, and the moments in between.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-2xl bg-[var(--cream)] ring-1 ring-black/5"
              >
                <span className="text-4xl opacity-30">🖼️</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[var(--ink-soft)]">
            Photo gallery coming soon. Send us your favourite Ebright moments and we&apos;ll
            feature them here.
          </p>
        </div>
      </section>
    </>
  );
}
