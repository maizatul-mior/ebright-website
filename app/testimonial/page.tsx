import Link from "next/link";

export const metadata = {
  title: "Testimonials — Ebright",
  description: "What parents and students say about Ebright's public speaking classes.",
};

const testimonials = [
  {
    quote:
      "My son has been joining Ebright Online since pandemic. He looks forward to his online lesson where he meets new friends and supports one another. Coach is also very encouraging and engaging students in a positive manner!",
    author: "Ebright Parent",
    context: "Ebright Online",
  },
  {
    quote:
      "Absolutely phenomenal public speaking class for kids! My little one has transformed from a shy speaker to a confident communicator, all thanks to this fantastic programme!",
    author: "Ebright Parent",
    context: "Weekly Classes",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Testimonials</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Parents and students, in their own words
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Nearly 20,000 students have trained with us since 2016. Here&apos;s what some of
            their families have shared.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-3xl bg-[var(--cream)] p-8 shadow-sm ring-1 ring-black/5"
              >
                <span className="text-5xl text-[var(--brand)]">&ldquo;</span>
                <blockquote className="mt-2 flex-1 text-lg leading-7">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-black/10 pt-4 text-sm">
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-[var(--ink-soft)]">{t.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Want to share your story?</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            We&apos;d love to hear how Ebright has helped your child. Send us a note any time.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
