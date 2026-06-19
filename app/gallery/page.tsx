import type { Metadata } from "next";
import Image from "next/image";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Gallery — Ebright Public Speaking Academy",
  description:
    "A visual journey through Ebright's grand annual showcases, live public events, and high-energy holiday bootcamps.",
};

const showcasePhotos = [
  "/Gallery/showcase-event-1.jpg",
  "/Gallery/showcase-event-2.jpg",
  "/Gallery/showcase-event-3.jpg",
  "/Gallery/showcase-event-5.png",
  "/Gallery/showcase-event-6.png",
  "/Gallery/showcase-event-7.png",
  "/Gallery/showcase-event-8.png",
  "/Gallery/showcase-event-9.png",
];

const weeklyPhotos = [
  "/Gallery/class-activity.jpg",
  "/Gallery/class-activity-1.jpg",
  "/Gallery/class-activity-2.jpg",
  "/Gallery/class-activity-3.jpg",
  "/Gallery/class-activity-4.png",
  "/Gallery/class-activity-5.jpg",
  "/Gallery/class-activity-6.jpg",
  "/Gallery/class-activity-7.jpg",
];

const workshopPhotos = [
  "/Gallery/school-workshop-1.jpg",
  "/Gallery/school-workshop-2.png",
  "/Gallery/school-workshop-3.jpg",
  "/Gallery/school-workshop-4.png",
  "/Gallery/school-workshop-5.jpg",
  "/Gallery/school-workshop-6.jpg",
  "/Gallery/school-workshop-7.jpg",
];

export default function Gallery() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[var(--cream)]">
        {/* Photo strip */}
        <div className="flex h-52 overflow-hidden md:h-64">
          {showcasePhotos.slice(0, 4).map((src) => (
            <div key={src} className="relative flex-1 overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Confidence <span className="text-[var(--brand)]">in Action</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--ink-soft)]">
            A visual journey through our grand annual showcases, live public events, and
            high-energy holiday bootcamps.
          </p>
        </div>
      </section>

      {/* ── Showcase Event ────────────────────────────────────── */}
      <GallerySection
        titleBefore=""
        titleBrand="Showcase"
        titleAfter=" Event"
        description="Capturing the spectacular moments where our students command grand public stages and Kitten mascot to celebrate their major milestones."
        photos={showcasePhotos}
        bg="white"
      />

      {/* ── Weekly Public Speaking Class ──────────────────────── */}
      <GallerySection
        titleBefore=""
        titleBrand="Weekly"
        titleAfter=" Public Speaking Class"
        description="High energy, real-time snapshots of our everyday heroes conquering stage fright through interactive classroom games and activities."
        photos={weeklyPhotos}
        bg="cream"
      />

      {/* ── School Workshop ───────────────────────────────────── */}
      <GallerySection
        titleBefore="School "
        titleBrand="Workshop"
        titleAfter=""
        description="Highlights from our dynamic partnerships bringing speech and confidence-building programs directly to campuses nationwide."
        photos={workshopPhotos}
        bg="white"
      />

      <GrowingHistoryCta />
    </>
  );
}

function GallerySection({
  titleBefore,
  titleBrand,
  titleAfter,
  description,
  photos,
  bg,
}: {
  titleBefore: string;
  titleBrand: string;
  titleAfter: string;
  description: string;
  photos: string[];
  bg: "white" | "cream";
}) {
  return (
    <section className={`py-16 ${bg === "cream" ? "bg-[var(--cream)]" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {titleBefore}
            <span className="text-[var(--brand)]">{titleBrand}</span>
            {titleAfter}
          </h2>
          <p className="max-w-xs text-sm leading-6 text-[var(--ink-soft)]">{description}</p>
        </div>

        {/* Masonry photo grid */}
        <div className="columns-2 gap-3 md:columns-3">
          {photos.map((src) => (
            <div key={src} className="mb-3 overflow-hidden rounded-2xl break-inside-avoid">
              <Image
                src={src}
                alt=""
                width={600}
                height={450}
                className="h-auto w-full object-cover"
                sizes="(max-width:768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
