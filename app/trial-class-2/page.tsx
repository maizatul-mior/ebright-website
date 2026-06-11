import type { Metadata } from "next";
import Script from "next/script";
import TrialClassForm from "../components/TrialClassForm";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Trial Class — Ebright Public Speaking Academy",
  description:
    "Register your child for an Ebright public speaking trial class for only RM80. Fun, script-free, pressure-free learning that builds real confidence.",
  // Backup of the previous /trial-class design. The marketing landing page at
  // /trial-class is the primary, promoted page — keep this one out of search.
  robots: { index: false, follow: true },
};

const benefits = [
  "Real confidence in front of a live audience",
  "Fun & interactive — zero boring memorising",
  "Coached by UK-trained speaking mentors",
];

const reasons = [
  {
    icon: "🎲",
    title: "Fun, Script-Free Learning",
    body: "Interactive games that teach kids to think fast and speak naturally without memorizing scripts.",
  },
  {
    icon: "🎓",
    title: "Trinity-Approved Curriculum",
    body: "A rigorous, internationally recognized Trinity College London framework delivered in a fun, age-appropriate way.",
  },
  {
    icon: "🎤",
    title: "Real-Stage Experience",
    body: "Regular live showcases at malls and auditoriums give students genuine, real-world speaking confidence.",
  },
  {
    icon: "📈",
    title: "Weekly Progress Updates",
    body: "Video updates, report cards, and Parent-Coach meetups so you can watch your child grow every step of the way.",
  },
];

const faqs = [
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
    a: "We provide weekly video updates and Parents-Coach Meetups so parents can monitor their kid's learning progress. The report card also contains feedback and tools for parents to further assist the kid's learning. Parents who would like to play a more active role can witness their child shine on stage through our monthly showcase. (You might want to prepare some tissue paper around as many parents tear up when seeing their once shy kid express themselves on camera.)",
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

export default function TrialClass() {
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      {/* Hero + form */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Your Child, Too, Can Be Our Next <span className="text-[var(--brand)]">Success Story</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
              We don&apos;t just practice in closed classrooms. Our students build real-world
              confidence by performing at live public venues.
            </p>
            {/* RM80 price card */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border-2 border-dashed border-white/70 bg-[var(--brand)] px-7 py-4">
              <div className="flex items-start font-extrabold leading-none text-[var(--accent)]">
                <span className="mt-1 mr-0.5 text-lg">RM</span>
                <span className="text-4xl">80</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">Trial Class</span>
                <span className="text-sm text-white/70 line-through">Worth RM150</span>
              </div>
            </div>

            {/* Benefits checklist */}
            <ul className="mt-7 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 font-bold">
                  <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--accent)]">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#1a1d20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <TrialClassForm />
        </div>
      </section>

      {/* Why Parents Trust Ebright */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Parents <span className="text-[var(--brand)]">Trust Ebright?</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              We ditch the dry academic lectures and replace them with immersive, pressure-free
              learning.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <article key={r.title} className="rounded-3xl bg-[var(--cream)] p-6 ring-1 ring-black/5">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Question</h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              We ditch the dry academic lectures and replace them with immersive, pressure-free
              learning.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold">
                  {f.q}
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-[var(--brand)] text-white transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GrowingHistoryCta />
    </>
  );
}
