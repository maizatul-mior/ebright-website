export const metadata = {
  title: "Media Exposure — Ebright",
  description: "Ebright in the news: The Star, Bernama, Parenthood Magazine, international competitions, and more.",
};

const features = [
  {
    outlet: "The Star",
    items: [
      "Ebright Featured in The Star — recognition of our work in public speaking and personal growth.",
      "Public Speaker at the Age of 10 — coverage of Nur Ayeesha Azzaleea's speech at the Indo-Pacific Economic Framework dinner (Oct 19), which went viral on TikTok with over 1.3 million views.",
      "Call for Future Boost — Star Education Fair 2025 at IOI Grand Exhibition.",
      "Second Time in The Star — Star Education Fair 2025 coverage featuring students Dhiya Humaira, Seshasri Rajan, and Sathes Rajan.",
      "For the Third Time — Star Education Fair 2025 at IOI Grand Putrajaya.",
      "Outstanding Business Awards 2022 — Ebright named 'Rising Star Grand Winner'.",
      "Audience Spellbound by 10-Year-Old's Speech — feature on Nur Ayeesha Azzaleea's IPEF dinner.",
      "9-Year-Old Student Speaks Like Water — coverage of Zaza's presentation at Majlis Inspirasi Kerjaya in Terengganu.",
    ],
  },
  {
    outlet: "Bernama.com",
    items: [
      "Fluency and Confidence of a 10-Year-Old Wows the Audience — Annual Public Speaking Showcase 2023 at SK USJ 12.",
    ],
  },
  {
    outlet: "Parenthood Magazine",
    items: [
      "Feature on Ebright: \"At Ebright, children don't just learn to speak — they learn to shine.\"",
    ],
  },
  {
    outlet: "RakitaMY Radio",
    items: [
      "Video feature on Annual Public Speaking Showcase 2023. Abdul Azim of Suara Lit praised Ebright as 'one of Malaysia's most effective public speaking centres'.",
    ],
  },
  {
    outlet: "University & Event Partnerships",
    items: [
      "Universiti Malaya English Carnival — with GO International Group Dotcom, Khazanah Nasional, GRADUAN Aspire, TERAS Teknologi, and MoOne Academy.",
      "First City University — 'Public Speaking 101' workshop (8 February 2024).",
      "MAB × Ebright: Wonders of the World 2023 — October 2023 showcase at Damansara Performing Arts Centre with 250+ participants.",
      "TOYM Press Conference 2026 — leadership panel featuring founder Kevin Khoo.",
    ],
  },
  {
    outlet: "International Competitions",
    items: [
      "Youth Entrepreneur XFactor (Jakarta) — Dhiya Humaira won the 'You Aced It' Award in Storytelling.",
      "World Youth STEM Innovation (Medan) — Umar won a silver medal.",
      "World Scholar's Cup — Sathes, Seshasri, and Myra won 18 medals; qualified for Global Rounds in Bangkok.",
    ],
  },
];

export default function MediaExposure() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Media Exposure</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Ebright in the news</h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            From local press to international competitions, our students and team have been
            featured across Malaysia and beyond.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-6">
          {features.map((f) => (
            <article key={f.outlet} className="rounded-3xl bg-[var(--cream)] p-8 ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-[var(--brand)]">{f.outlet}</h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--ink-soft)]">
                {f.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
