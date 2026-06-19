import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GrowingHistoryCta from "../components/GrowingHistoryCta";
import Logo from "../components/Logo";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Trial Class — Ebright Public Speaking Academy",
  description:
    "Register your child for an Ebright public speaking trial class for only RM80. Fun, script-free, pressure-free learning that builds real confidence.",
  robots: { index: false, follow: true },
};

const testimonials = [
  {
    src: "/trial-class/testimonial-1.jpg",
    quote: "Absolutely phenomenal public speaking class for kids!",
  },
  {
    src: "/trial-class/testimonial-2.jpg",
    quote: "Absolutely phenomenal public speaking class for kids!",
  },
  {
    src: "/trial-class/testimonial-1.jpg",
    quote: "Absolutely phenomenal public speaking class for kids!",
  },
];

const features = [
  {
    title: "Certified Coaches",
    body: "Our qualified, certified coaches are expertly trained to bring out the absolute best in kids.",
    icon: (
      <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm-7 13c0-2.7 4.5-4 7-4s7 1.3 7 4v1H5v-1zM9 8.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "No Scripts (Please)",
    body: "We absolutely do not force kids to memorize written scripts because that is for robots.",
    icon: (
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Fun Based Learning",
    body: "We use a fun learning process to help shy kids easily overcome their stage fright.",
    icon: (
      <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Platform To Perform",
    body: "We promise exciting physical events like our Monthly Public Speaking Showcases for real-world practice.",
    icon: (
      <path d="M19 11a7 7 0 0 1-7 7m0 0a7 7 0 0 1-7-7m7 7v4m0 0H8m4 0h4M12 4a7 7 0 0 0-7 7" strokeLinecap="round" strokeLinejoin="round" />
    ),
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
    a: "We provide weekly video updates and Parents-Coach Meetups so parents can monitor their kids' learning progress. The report card also contains feedback and tools for parents to further assist the kids' learning. Parents who would like to play a more active role can witness their child shine on stage through our monthly showcase. (You might want to prepare some tissue paper around as many parents tear up when seeing their once shy kid express themselves on camera.)",
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

export default function TrialClass2() {
  return (
    <div>
      {/* ── Custom Navbar ───────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[var(--brand)] text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <Logo white width={130} height={44} className="h-9 w-auto" />

          <nav className="hidden items-center gap-1 lg:flex">
            {[
              { label: "Testimonial", href: "#testimonial" },
              { label: "What Your Child Get", href: "#why-ebright" },
              { label: "How It Works", href: "#faq" },
              { label: "Awards", href: "#awards" },
              { label: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-bold text-[var(--foreground)] shadow-sm transition hover:brightness-95"
          >
            Register Now
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8l4 4-4 4M3 12h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section id="register" className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          {/* Microphone image */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/trial-class-2/hero-mic.png"
              alt="Ebright branded microphone"
              width={520}
              height={580}
              className="h-auto w-full max-w-sm lg:max-w-none"
              priority
            />
          </div>

          {/* Registration form */}
          <RegistrationForm />
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section id="testimonial" className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Child, Too, <span className="text-[var(--brand)]">Can Be Our Next Success Story</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              We don&apos;t just practice in closed classrooms. Our students build real-world
              confidence by performing at live public venues.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/5">
                  <Image
                    src={t.src}
                    alt={`Parent testimonial ${i + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[var(--brand)] shadow-lg transition group-hover:scale-110">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-center text-sm font-medium italic text-[var(--ink-soft)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Parents Trust Ebright ────────────────────────────── */}
      <section id="why-ebright" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          {/* Family photo */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/trial-class-2/family.png"
              alt="Happy Ebright family"
              width={580}
              height={520}
              className="h-auto w-full object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Parents{" "}
              <span className="text-[var(--brand)]">Trust Ebright?</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              We ditch the dry academic lectures and replace them with immersive, pressure-free
              learning.
            </p>
            <div id="awards" className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 rounded-2xl border border-black/5 bg-[var(--cream)] p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--brand)]/10">
                    <svg
                      className="h-5 w-5 text-[var(--brand)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      {f.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-[var(--ink-soft)]">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Question
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white ring-1 ring-black/5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--brand)] text-white transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-7 text-[var(--ink-soft)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GrowingHistoryCta />
    </div>
  );
}
