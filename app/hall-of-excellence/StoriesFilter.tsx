"use client";

import Image from "next/image";
import { useState } from "react";

type Category = "All" | "Exam Distinction" | "Competitions" | "Media & TV";

const stories: {
  category: Exclude<Category, "All">;
  image: string;
  title: string;
  body: string;
}[] = [
  {
    category: "Exam Distinction",
    image: "/Hall%20of%20Excellence/hall-of-excellence-chee-hui.png",
    title: "Chee Hui, Our Most Loyal Ebright Student!",
    body: "On the year 2023, Chee Hui has received the High Scorer Award on her Trinity London Examinations for her Grade 4 and a Distinction for her Grade 6 examinations! Thanks to her hardwork, she was able to make it this far. Amazing job Chee Hui!",
  },
  {
    category: "Media & TV",
    image: "/hall-of-excellence/img-01.png",
    title: "Zaza's Appearance on RTV",
    body: "Our brilliant orator Zaza made a high-profile appearance on national television during the Bulan Keluarga Kebangsaan broadcast. The feature highlighted her rapid transformation into a confident, leading voice for her generation.",
  },
  {
    category: "Competitions",
    image: "/Hall%20of%20Excellence/hall-of-excellence-vyshnavi.png",
    title: "Klang & Online Duo Sweep District Speech Awards",
    body: "Vyshravi captured an incredible 2nd place trophy representing our Klang campus, while online student Athisya proudly secured 3rd place at the competitive Ikon Keraya Speech Peringkat Daerah competition.",
  },
  {
    category: "Competitions",
    image: "/Hall%20of%20Excellence/hall-of-excellence-world-scholar.png",
    title: "World Scholar's Cup Team Advances to Global Rounds",
    body: "Our elite academic delegation dominated the regional debate and collaborative writing modules, capturing a staggering total of 18 medals. Their stellar performance officially punches their ticket to the international stage in Bangkok.",
  },
  {
    category: "Competitions",
    image: "/Hall%20of%20Excellence/hall-of-excellence-arishya-putri.png",
    title: "Arishya Putri Dominates USJ Fencing Championship",
    body: "Proving that elite public speaking trains the mind for intense sports focus, Arishya captured Gold in the U10 category and Bronze in U12. She continued her athletic streak at the Subang Parade open by taking home dual Silver and Bronze medals.",
  },
  {
    category: "Competitions",
    image: "/Hall%20of%20Excellence/hall-of-excellence-dhiya-humaira.jpg",
    title: "Dhya Humaira Shines on the International Stage!",
    body: 'Congratulations to Dhya Humaira for winning the "YouAceIt" Award in Storytelling at the Youth Entrepreneur XFactor in Jakarta! This international competition recognizes young entrepreneurs aged 8 to 17 for their creativity and innovation. Dhya Humaira wowed the judges with her storytelling skills. We are incredibly proud of her achievement and can\'t wait to see where her journey takes her next!',
  },
  {
    category: "Competitions",
    image: "/Hall%20of%20Excellence/hall-of-excellence-umar.jpg",
    title: "Umar Wins Silver at World Youth STEM Innovation in Medan!",
    body: "Our Darus Kota student, Umar, joined the World Youth STEM Invention Innovation in Medan, Indonesia, representing Alam Shah Science School to present his Project – ViruFame! He got the silver medal, beating up to 70 schools from Malaysia and Indonesia. His mom said he got his confidence to present by attending Ebright classes and he followed what the coach taught him. We are so proud of him!",
  },
];

const CATEGORY_ICON: Record<Exclude<Category, "All">, React.ReactNode> = {
  "Exam Distinction": (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
    </svg>
  ),
  Competitions: (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4M7 4H4l3 9h10l3-9h-3" /><path d="M7 4a5 5 0 0 0 10 0" />
    </svg>
  ),
  "Media & TV": (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" /><path d="M17 2l-5 5-5-5" />
    </svg>
  ),
};

const TABS: Category[] = ["All", "Exam Distinction", "Competitions", "Media & TV"];

export default function StoriesFilter() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? stories : stories.filter((s) => s.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === tab
                ? "bg-[var(--brand)] text-white shadow"
                : "bg-[var(--cream)] text-[var(--foreground)] hover:bg-[var(--brand)]/10"
            }`}
          >
            {tab !== "All" && CATEGORY_ICON[tab]}
            {tab}
          </button>
        ))}
      </div>

      {/* Stories */}
      <div className="mt-8 space-y-5">
        {filtered.map((s) => (
          <article
            key={s.title}
            className="grid overflow-hidden rounded-3xl ring-1 ring-black/8 sm:grid-cols-[220px_1fr]"
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] bg-[var(--cream)] sm:aspect-auto sm:min-h-[180px]">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                sizes="(max-width:640px) 100vw, 220px"
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                  s.category === "Exam Distinction"
                    ? "bg-blue-50 text-blue-700"
                    : s.category === "Media & TV"
                    ? "bg-purple-50 text-purple-700"
                    : "bg-[var(--brand)]/10 text-[var(--brand)]"
                }`}
              >
                {CATEGORY_ICON[s.category]}
                {s.category}
              </span>
              <h3 className="mt-3 text-lg font-extrabold leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
