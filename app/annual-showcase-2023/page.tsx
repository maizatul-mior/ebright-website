export const metadata = {
  title: "Annual Showcase 2023 — Ebright",
};

export default function Showcase2023() {
  return <ShowcasePage year="2023" />;
}

function ShowcasePage({ year }: { year: string }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">
          Annual Showcase {year}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Where our students shine on stage
        </h1>
        <p className="mt-6 text-lg text-[var(--ink-soft)]">
          Every year we close with a flagship showcase — hundreds of students taking the stage
          to demonstrate what they&apos;ve learned. {year}&apos;s event continued our tradition
          of celebrating young voices.
        </p>
        <p className="mt-12 inline-block rounded-full bg-[var(--cream)] px-5 py-2 text-sm font-medium text-[var(--ink-soft)]">
          Highlights and photos coming soon
        </p>
      </div>
    </section>
  );
}
