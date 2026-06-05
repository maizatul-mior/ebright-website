import Link from "next/link";

export const metadata = {
  title: "Franchising Opportunity — Ebright",
  description: "Bring Ebright Public Speaking to your community. Franchising opportunities across Malaysia and beyond.",
};

export default function Franchising() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Franchising Opportunity</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Bring Ebright to your community
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)]">
            Ebright has grown from one centre to 23 branches across Malaysia. We&apos;re
            now opening doors for passionate edupreneurs who want to share our mission of helping
            kids find their voice.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Why franchise with Ebright?</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { emoji: "📚", title: "Proven curriculum", body: "Trinity College London-aligned syllabus refined over 8 years of teaching." },
              { emoji: "🎓", title: "Training & support", body: "Coach training, operational playbooks, and marketing materials provided." },
              { emoji: "🌟", title: "Established brand", body: "Featured in The Star, Bernama, Parenthood Magazine, and at international competitions." },
              { emoji: "👥", title: "Active community", body: "4,400+ students and a thriving parent community across our network." },
              { emoji: "🚀", title: "Growing demand", body: "Public speaking is rapidly becoming a must-have skill — parents are looking for trusted programmes." },
              { emoji: "🤝", title: "Mission-driven team", body: "Our vision: train 1,000 coaches and create 20 edupreneurs by 2027." },
            ].map((b) => (
              <article key={b.title} className="rounded-3xl bg-[var(--cream)] p-7 ring-1 ring-black/5">
                <span className="text-3xl">{b.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Interested in franchising?</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            We&apos;d love to start a conversation. Reach out and our team will share full details
            on requirements, investment, and onboarding.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex rounded-lg bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
          >
            Contact our franchising team
          </Link>
        </div>
      </section>
    </>
  );
}
