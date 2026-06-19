import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "FAQ — Ebright Public Speaking Academy",
  description:
    "Frequently asked questions about Ebright's public speaking classes, coaches, schedules, and enrolment for children aged 6–16.",
};

// ── Data ────────────────────────────────────────────────────────────────

const faqs: { q: string; a: string | string[] }[] = [
  {
    q: "What Are Your Coaches' Qualifications?",
    a: "Our coaches hold backgrounds in TESL and English Literature with strong command of the language. Many also have Toastmasters qualifications and World Scholar's Cup experience, and our online classes are led by UK native-speaking coaches.",
  },
  {
    q: "Can I See My Kids Improve Within 3 Months?",
    a: "Positive changes typically begin to emerge after 2 grades (around 6 months), though many parents notice improvements in confidence and willingness to speak even sooner. Full mastery develops with continued practice.",
  },
  {
    q: "Are Online Classes Effective When It Comes To Overcoming Shyness?",
    a: "Yes. Our online classes are small, interactive, and led by experienced coaches — including UK native speakers — creating a safe, supportive space where shy children gradually open up and build confidence.",
  },
  {
    q: "How Can We Monitor Our Kids' Progress?",
    a: [
      "We provide weekly video updates and Parents-Coach Meetups so parents can monitor their kids' learning progress. The report card also contains feedback and tools for parents to further assist the kids' learning.",
      "Parents who would like to play a more active role can witness their child shine on stage through our monthly showcase. (You might want to prepare some tissue paper around as many parents tear up when seeing their once shy kid express themselves on camera.)",
    ],
  },
  {
    q: "My Child Is Very Young, Will This Work For Him/Her?",
    a: "Our programmes are designed for ages 7–16 and organized by grade, so younger children start with age-appropriate, play-based lessons that meet them exactly where they are.",
  },
  {
    q: "My Child Is Extremely Shy, Will This Work For Him/Her?",
    a: "Absolutely — many of our students start out very shy. Our pressure-free, game-based approach and small class sizes (1 coach to 6 students) gently build confidence at a comfortable pace.",
  },
  {
    q: "My Child Requires More Attention? Is This Program Suitable?",
    a: "Our small-group ratio of one coach to six students ensures every child receives meaningful individual guidance. Speak to our team about your child's needs and we'll advise the best fit.",
  },
  {
    q: "My Child Is Not Very Proficient In English, Can He/She Be Able To Handle Class?",
    a: "Yes. Coaches adapt to each student's level and use interactive, supportive methods so children build both their English and their speaking confidence together over time.",
  },
  {
    q: "Can I Register Later?",
    a: "Enrollment is batchless — students can start anytime, since each weekly class features an independent topic. That said, slots fill up quickly, so we recommend securing your trial early.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────

export default function FAQ() {
  return (
    <>
      {/* ── FAQ Section ───────────────────────────────────────── */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Question
          </h1>

          <div className="mt-10 divide-y divide-black/10">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group [&>summary::-webkit-details-marker]:hidden [&>summary::marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-[var(--foreground)]">
                  {f.q}
                  <span className="shrink-0 text-[var(--ink-soft)] transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>

                <div className="pb-5 text-sm leading-7 text-[var(--ink-soft)]">
                  {Array.isArray(f.a) ? (
                    <div className="space-y-3">
                      {f.a.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  ) : (
                    <p>{f.a}</p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still Got Question? ───────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-[var(--cream)] p-8 md:grid-cols-[3fr_2fr] md:p-12">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Still{" "}
                <span className="text-[var(--brand)]">Got Question?</span>
              </h2>
              <p className="mt-4 max-w-xs text-base leading-7 text-[var(--ink-soft)]">
                Our friendly team is always ready to guide you and clear up any doubts about
                our public speaking tracks.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
              >
                Contact Us
              </Link>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/FAQ/contact-us.png"
                alt="Contact Ebright customer centre"
                width={360}
                height={360}
                className="h-auto w-full max-w-[280px] object-contain md:max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}
