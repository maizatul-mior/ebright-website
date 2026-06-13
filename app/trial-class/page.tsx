import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Logo from "../components/Logo";
import TrialClassMarketingForm from "./TrialClassMarketingForm";
import "./marketing.css";

export const metadata: Metadata = {
  title: "Improve Your Child's Confidence in 12 Weeks — Ebright Trial Class (RM80)",
  description:
    "Shy and quiet, or talkative but all over the place? Book your child's Ebright public speaking trial class for just RM80. Real speaking practice, structured confidence training, fun and interactive lessons.",
};

const STATS = [
  {
    num: "20,000+",
    label: "Young Lives Trained Since 2016",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    num: "4,400+",
    label: "Active Students Worldwide",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 6h-2.95a15.7 15.7 0 00-1.38-3.56A8.03 8.03 0 0118.93 8zM12 4c.83 1.2 1.48 2.53 1.91 4h-3.82c.43-1.47 1.08-2.8 1.91-4zM4.26 14a7.96 7.96 0 010-4h3.38a16.6 16.6 0 000 4H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 015.07 16zm2.95-8H5.07a8.03 8.03 0 014.33-3.56A15.7 15.7 0 008.02 8zM12 20c-.83-1.2-1.48-2.53-1.91-4h3.82A13.7 13.7 0 0112 20zm2.34-6H9.66a14.6 14.6 0 010-4h4.68a14.6 14.6 0 010 4zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14a16.6 16.6 0 000-4h3.38a7.96 7.96 0 010 4h-3.38z" />
    ),
  },
  {
    num: "20+",
    label: "Convenient Physical & Online Branches",
    icon: (
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    ),
  },
  {
    num: "10+",
    label: "Years of Experience In Kids Training",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7z" />
    ),
  },
];

const PILLS = [
  { text: "Lacks confidence when talking to others", emoji: "😓" },
  { text: "Avoids speaking in class", emoji: "😶" },
  { text: "Talks… but struggles to express clearly", emoji: "😵" },
  { text: "Gets nervous when attention is on them", emoji: "😟" },
];

const TESTIMONIALS = [
  {
    photo: "/trial-class/testimonial-1.jpg",
    text: "My son has been joining Ebright Online since pandemic. He looks forward to his online lesson where he meets new friends and support one another. Coach is also very encouraging and engaging students in a positive manner!",
  },
  {
    photo: "/trial-class/testimonial-2.jpg",
    text: "Absolutely phenomenal public speaking class for kids! My little one has transformed from a shy speaker to a confident communicator, all thanks to this fantastic programme!",
  },
];

const EXPERIENCE = [
  {
    title: "Real Speaking Practice",
    body: "Your child will speak, present, and build confidence in every session.",
  },
  {
    title: "Structured Confidence Training",
    body: "Step-by-step guidance designed to develop clarity and self expression.",
  },
  {
    title: "Fun & Interactive Learning",
    body: "Engaging activities that make kids enjoying learning and participating.",
  },
];

const AWARDS = [
  { src: "/trial-class/award-soba.png", alt: "SOBA Award", w: 520, h: 202 },
  { src: "/trial-class/award-toym.png", alt: "JCI TOYM 2025 Award", w: 360, h: 226 },
  { src: "/trial-class/award-parents-choice.png", alt: "Parents' Choice Award", w: 320, h: 320 },
  {
    src: "/trial-class/award-parents-choice-2025.png",
    alt: "Parents' Choice Award 2025 Winner",
    w: 360,
    h: 322,
  },
];

const STAR_PATH = (
  <path d="M12 17.27l5.18 3.13-1.37-5.9 4.58-3.96-6.04-.52L12 4.5 9.65 9.02l-6.04.52 4.58 3.96-1.37 5.9z" />
);
const STAR = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    {STAR_PATH}
  </svg>
);

const STEPS = [
  {
    label: "Fill the form",
    icon: (
      <path d="M19 3h-4.18A3 3 0 009 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 0a1 1 0 110 2 1 1 0 010-2zm-2 14l-3-3 1.4-1.4L10 14.2l4.6-4.6L16 11l-6 6z" />
    ),
  },
  {
    label: "We WhatsApp you",
    icon: (
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm4.52 13.86c-.25.7-1.46 1.34-2.02 1.42-.54.08-1.21.11-1.95-.12-.45-.14-1.03-.33-1.77-.65-3.12-1.35-5.16-4.49-5.31-4.7-.16-.21-1.27-1.69-1.27-3.22 0-1.53.8-2.28 1.09-2.59.28-.31.62-.39.82-.39h.59c.19 0 .45-.07.7.53.25.62.85 2.13.92 2.28.08.16.13.34.02.55-.1.21-.16.34-.31.52-.16.18-.33.4-.47.54-.16.16-.32.33-.14.64.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.16.49.13.67-.08.18-.21.77-.9.98-1.21.21-.31.41-.26.7-.16.28.11 1.79.85 2.1 1 .31.16.51.23.59.36.08.13.08.74-.17 1.45z" />
    ),
  },
  { label: "Watch them shine!", icon: STAR_PATH },
];

export default function TrialClass() {
  return (
    <div className="mkt">
      {/* Landing-page navbar (the global site navbar is hidden on this route) */}
      <header className="mkt-nav">
        <div className="mkt-nav-inner">
          <Logo white width={140} height={46} className="h-9 w-auto" />
        </div>
      </header>

      {/* Hero */}
      <section className="mkt-hero">
        <div className="mkt-hero-inner">
          <div className="mkt-hero-left">
            <h1 className="mkt-hero-title">
              Improve Your Child Confidence in 12 Weeks!
            </h1>
            <p className="mkt-hero-sub">
              Shy and quiet? Or talkative but all over the place? Our trial class
              shows you what your child can do — in just one fun session.
            </p>
            <div className="mkt-hero-trust">
              <span className="mkt-stars" aria-hidden="true">
                {STAR}
                {STAR}
                {STAR}
                {STAR}
                {STAR}
              </span>
              <span>Trusted by 20,000+ parents</span>
            </div>
          </div>

          <TrialClassMarketingForm />
        </div>
      </section>

      {/* Stats bar */}
      <section className="mkt-stats" aria-label="Ebright by the numbers">
        <div className="mkt-stats-inner">
          {STATS.map((s) => (
            <div className="mkt-stat" key={s.num}>
              <span className="mkt-stat-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  {s.icon}
                </svg>
              </span>
              <div>
                <div className="mkt-stat-num">{s.num}</div>
                <div className="mkt-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Does This Sound Like Your Child? */}
      <section className="mkt-sound" id="pain-points">
        <div className="mkt-sound-inner">
          <div className="mkt-sound-left">
            <h2>Does This Sound Like Your Child?</h2>
            <p>If either of these is your child, the RM80 trial is the perfect first step.</p>
          </div>
          <div className="mkt-pills">
            {PILLS.map((p) => (
              <span className="mkt-pill" key={p.text}>
                <span className="mkt-emoji" aria-hidden="true">
                  {p.emoji}
                </span>
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories, Real Impact */}
      <section className="mkt-testimonials" id="testimonials">
        <div className="mkt-section-inner">
          <div className="mkt-section-head">
            <h2>
              Real Stories, <span className="mkt-hl">Real Impact</span>
            </h2>
            <p>
              Hear directly from everyday parents who watched their children beat stage
              fright, unlock original thoughts, and build authentic life-long confidence.
            </p>
          </div>
          <div className="mkt-tcards">
            {TESTIMONIALS.map((t, i) => (
              <div className="mkt-tcard" key={i}>
                <Image
                  className="mkt-tcard-photo"
                  src={t.photo}
                  alt="Ebright parent"
                  width={116}
                  height={116}
                />
                <div className="mkt-tcard-body">
                  <div className="mkt-tcard-quote" aria-hidden="true">
                    &ldquo;
                  </div>
                  <p className="mkt-tcard-text">{t.text}</p>
                  <div className="mkt-tcard-by">— Ebright Parents —</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your Child Will Experience */}
      <section className="mkt-experience" id="experience">
        <div className="mkt-section-inner">
          <div className="mkt-section-head">
            <h2>What Your Child Will Experience</h2>
          </div>
          <div className="mkt-xcards">
            {EXPERIENCE.map((c) => (
              <div className="mkt-xcard" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mkt-how" id="how-it-works">
        <div className="mkt-section-inner">
          <div className="mkt-section-head">
            <h2>
              How It <span className="mkt-hl">Works</span>
            </h2>
            <p>From sign-up to standing ovation — here&apos;s what happens next.</p>
          </div>
          <div className="mkt-steps">
            {STEPS.map((step, i) => (
              <Fragment key={step.label}>
                <div className="mkt-step">
                  <div className="mkt-step-circle">
                    <span className="mkt-step-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <svg width="58" height="58" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                      {step.icon}
                    </svg>
                  </div>
                  <div className="mkt-step-label">{step.label}</div>
                </div>
                {i < STEPS.length - 1 && <div className="mkt-step-line" aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Our Awards */}
      <section className="mkt-awards" id="awards">
        <div className="mkt-section-inner">
          <div className="mkt-section-head">
            <h2>
              Our <span className="mkt-hl">Awards</span>
            </h2>
            <p>
              Award-winning public speaking education, trusted by leading institutions
              across Malaysia.
            </p>
          </div>
          <div className="mkt-awards-logos">
            {AWARDS.map((a) => (
              <Image key={a.src} src={a.src} alt={a.alt} width={a.w} height={a.h} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mkt-cta">
        <div className="mkt-cta-inner">
          <h2>READY TO WATCH YOUR CHILD SHINE ON STAGE?</h2>
          <a className="mkt-cta-btn" href="#register">
            Claim Trial Class Only <strong>RM80!</strong>
          </a>
        </div>
      </section>
    </div>
  );
}
