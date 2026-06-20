import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Ebright in the Spotlight — Ebright Public Speaking Academy",
  description:
    "Exploring Ebright's talk show legacy, international achievements, and key partnerships in youth leadership and academic excellence.",
};

// ── Data ────────────────────────────────────────────────────────────────

type MediaItem = {
  titleBefore: string;
  titleBrand: string;
  titleAfter: string;
  image: string | null;
  body: string;
};

const tvItems: MediaItem[] = [
  {
    titleBefore: "Ebright Talk ",
    titleBrand: "Show",
    titleAfter: "",
    image: "/Media%20Exposure/media-cta.jpg",
    body: "The Ebright Talks Show is a special program by Ebright Public Speaking Academy that gives our students a platform to speak on a live talk-show setting. Open to Ebright Academy students, this program includes expressing, discussing, and self-identifying while interviewing peers in English — producing real stories about theatre performance, creative settings, culture, and other engaging topics that make learning memorable.",
  },
  {
    titleBefore: "",
    titleBrand: "RakitaMY",
    titleAfter: " Radio Station Feature",
    image: "/Media%20Exposure/media-rakitamy.png",
    body: "Ebright was proudly featured by RakitaMY during our Annual Public Speaking Showcase. Industry representatives spotlighted our programs as some of Malaysia's most effective public speaking platforms for youth. This broadcast coverage reinforces our continuous mission to empower the next generation with articulate, confident voices.",
  },
];

const pressItems: MediaItem[] = [
  {
    titleBefore: "The Star Outstanding ",
    titleBrand: "Business Awards",
    titleAfter: " (SOBA)",
    image: "/Media%20Exposure/media-soba.png",
    body: "Ebright was honored as the Rising Star Grand Winner at the prestigious SOBA awards. This recognition celebrates our outstanding dedication to boosting children's confidence through dynamic public speaking frameworks. Following our corporate growth, we remain highly focused on our long-term vision of expanding our public presence.",
  },
  {
    titleBefore: "Toastmaster ",
    titleBrand: "International",
    titleAfter: " Club",
    image: "/Media%20Exposure/media-toastmaster.png",
    body: "Toastmaster provides a highly supportive platform for both youth and adults to sharpen their public speaking and leadership skills. As part of the global Toastmasters International network, members practice impromptu speaking and deliver prepared speeches under the guidance of experienced mentors. This structured environment actively builds long-term communication clarity, confidence, and real-world impact.",
  },
  {
    titleBefore: "The Star ",
    titleBrand: "Education Fair",
    titleAfter: " Features",
    image: "/Media%20Exposure/media-star-education-fair.png",
    body: "Across multiple features at the Star Education Fair, Ebright was highlighted as a premier platform for future-ready learning and youth development. Managing Director Kevin Khoo emphasised our unique framework that allows children to speak English without fear of judgement or constant correction. The events successfully connected thousands of parents and students with active confidence-building opportunities.",
  },
  {
    titleBefore: "",
    titleBrand: "Parenthood Magazine",
    titleAfter: " & Bernama Features",
    image: "/Media%20Exposure/media-parenthood-magazine.png",
    body: "Our steady growth has been spotlighted nationally, recognizing that we now help over 1,050 students become confident communicators each week. Press outlets like Bernama have praised our interactive, script-free syllabus and public showcases for nurturing future-ready leaders. This media attention reaffirms our reputation as a vibrant, trusted community where young voices are celebrated.",
  },
  {
    titleBefore: "Elite ",
    titleBrand: "Institutional",
    titleAfter: " Collaborations",
    image: "/Media%20Exposure/media-elite-institutional.png",
    body: "Ebright has partnered with prominent organizations like Universiti Malaya, First City University, and Toastmasters International to conduct high-impact communication workshops. We also collaborated with the Malaysian Association for the Blind to host a grand inclusive showcase uniting over 250 participants. These initiatives successfully create diverse spaces for language building, professional networking, and social inclusivity.",
  },
];

const studentItems: MediaItem[] = [
  {
    titleBefore: "Nur Ayeesha (Zaza): ",
    titleBrand: "International",
    titleAfter: " Orator",
    image: "/Media%20Exposure/media-zaza.png",
    body: "At just 10 years old, Ebright student Zaza completely mesmerised international business leaders at the Indo-Pacific Economy Framework dinner. Her poised delivery and fluent English earned a standing ovation and went viral on TikTok with over 1.3 million views. She has also delivered successful presentation highlights to fully adult audiences in Terengganu, proving how early training builds fearless presence.",
  },
  {
    titleBefore: "World Scholar's Cup ",
    titleBrand: "Global",
    titleAfter: " Qualifiers",
    image: "/Media%20Exposure/media-world-scholars-cup.png",
    body: "Our brilliant student scholars achieved a historic milestone by winning 18 total medals at the regional rounds. This winning team performance officially qualified Ebright's very first representatives to attend the Global Rounds in Bangkok. Years of dedication to intense debates and collaborative challenges truly paid off on the international stage.",
  },
  {
    titleBefore: "Dhiya Humaira: Jakarta Storytelling ",
    titleBrand: "Champion",
    titleAfter: "",
    image: "/Media%20Exposure/media-dhiya-humaira.png",
    body: "Competing on an international stage, Dhiya captured the prestigious 'You Aced It' Award in Storytelling at the Youth Entrepreneur XFactor in Jakarta. This major regional competition recognises highly creative young entrepreneurs aged 8 to 17 for their innovation. Dhiya completely wowed the international panel of judges with her exceptional, confident communication skills.",
  },
  {
    titleBefore: "Umar: World Youth STEM Innovation ",
    titleBrand: "Silver",
    titleAfter: "",
    image: "/Media%20Exposure/media-umar.jpg",
    body: "Umar clinched the silver medal at the World Youth STEM Innovation competition in Medan, Indonesia. Competing against young innovators from across Southeast Asia, Umar delivered a polished and compelling presentation that showcased not only technical expertise but exceptional communication skills — a proud testament to what confident young Malaysians can accomplish.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────

export default function MediaExposure() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Media%20Exposure/hero-media-exposure.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Ebright in the Spotlight:
            <br />
            <span className="text-[var(--accent)]">Celebrating Global Success</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            Exploring our talk show legacy, international achievements, and key partnerships
            in youth leadership and academic excellence.
          </p>
        </div>
      </section>

      {/* ── Collapsible Sections ───────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <CollapsibleSection
            icon={<TvIcon />}
            title="TV & Broadcast Features"
            subtitle="Experts and students sharing insights on national TV and radio"
            items={tvItems}
          />
          <CollapsibleSection
            icon={<NewspaperIcon />}
            title="Press & Publication"
            subtitle="Ebright featured in leading newspaper and online publications."
            items={pressItems}
          />
          <CollapsibleSection
            icon={<TrophyIcon />}
            title="Student Achievement"
            subtitle="Ebright students shining on national and international stage."
            items={studentItems}
          />
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────

function CollapsibleSection({
  icon,
  title,
  subtitle,
  items,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  items: MediaItem[];
}) {
  return (
    <details
      open
      className="group overflow-hidden rounded-3xl ring-1 ring-black/5 [&>summary::-webkit-details-marker]:hidden [&>summary::marker]:hidden"
    >
      <summary className="flex cursor-pointer select-none items-center gap-4 bg-[var(--cream)] px-8 py-6">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
          {icon}
        </span>
        <div className="flex-1">
          <h2 className="text-xl font-extrabold">{title}</h2>
          <p className="mt-0.5 text-sm text-[var(--ink-soft)]">{subtitle}</p>
        </div>
        <span className="hidden text-sm font-semibold text-[var(--brand)] group-open:inline">
          Collapse All
        </span>
        <span className="text-sm font-semibold text-[var(--brand)] group-open:hidden">
          Expand All
        </span>
      </summary>

      <div className="divide-y divide-black/5 bg-white px-8">
        {items.map((item, i) => (
          <MediaItemCard key={i} item={item} />
        ))}
      </div>
    </details>
  );
}

function MediaItemCard({ item }: { item: MediaItem }) {
  return (
    <div className="grid items-start gap-6 py-8 md:grid-cols-[2fr_3fr]">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--cream)] ring-1 ring-black/5">
        {item.image && (
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 40vw"
          />
        )}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-bold leading-snug">
          {item.titleBefore}
          {item.titleBrand && (
            <span className="text-[var(--brand)]">{item.titleBrand}</span>
          )}
          {item.titleAfter}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{item.body}</p>
      </div>
    </div>
  );
}

// ── Icons ────────────────────────────────────────────────────────────────

function TvIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22m10-8v2.34c0 .55.47.98.97 1.21C19.15 18.75 20 20.24 20 22" />
      <path d="M6 4v7a6 6 0 0 0 12 0V4" />
    </svg>
  );
}
