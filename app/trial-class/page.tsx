import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Script from "next/script";
import Logo from "../components/Logo";
import TrialClassMarketingForm from "./TrialClassMarketingForm";
import CountdownBar from "./CountdownBar";
import "./marketing.css";

const GTM_ID = "GTM-NG56JV9F";

export const metadata: Metadata = {
  title: "Book A Trial Class (RM80) | Ebright Public Speaking",
  description:
    "Turn shyness into self-assurance. Book your child's Ebright public speaking trial class for just RM80. Real speaking practice, structured confidence training, fun and interactive lessons.",
  icons: {
    icon: "/ebright-logomark.ico",
    apple: "/ebright-logomark.png",
  },
};

const STATS = [
  {
    num: "15,000+",
    label: "Young Lives Trained Since 2016",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    num: "2,800+",
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
    text: "My son has been joining Ebright and he really looks forward to the online lessons where he made new friends and supports one another. Coach is also very encouraging and engaging students to participate.",
    by: "– Ebright Parents –",
  },
  {
    text: "Absolutely phenomenal public speaking class for kids! My little one was transformed from a shy speaker to a confident communicator, all thanks to this fantastic programme!",
    by: "– Ebright Parents –",
  },
  {
    text: "Such an amazing place, the tutors are brilliant and amazing. Keep up the good work and I hope this class also runs after school holiday programs.",
    by: "– Siti Marikar, Baru Bangi –",
  },
];

const STEPS = [
  {
    label: "Fill the form",
    icon: (
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    ),
  },
  {
    label: "We WhatsApp you",
    icon: (
      <path fillRule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.84 9.84 0 0019.05 4.9 9.79 9.79 0 0012.04 2M8.53 7.33c.16 0 .32.01.46.01.15.01.36-.06.56.43.21.5.71 1.73.77 1.85.06.13.1.28.02.45-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.92.82 1.7 1.07 1.94 1.19.24.12.38.1.52-.06.14-.16.58-.68.74-.91.16-.23.32-.19.54-.11.22.08 1.38.65 1.62.77.24.12.4.18.46.28.06.1.06.58-.14 1.14-.2.54-1.16 1.03-1.62 1.07-.46.04-.89.22-3.01-.63-2.56-1.02-4.18-3.62-4.31-3.79-.13-.17-.99-1.32-.99-2.52 0-1.2.63-1.79.85-2.03.22-.24.48-.3.64-.3h.46Z" />
    ),
  },
  {
    label: "Watch them shine!",
    icon: (
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94C8.03 14.46 9.37 15.5 11 15.9V18H8v2h8v-2h-3v-2.1c1.63-.41 2.97-1.44 3.61-2.96C19.08 10.63 21 8.55 21 6V5c0-1.1-.9-2-2-2zM7 10.82V7h2v3.82C7.84 10.4 7 9.22 7 8v2.82zM19 8c0 1.22-.84 2.4-2 2.82V7h2v1zm-7 5c-1.65 0-3-1.35-3-3V5h6v5c0 1.65-1.35 3-3 3z" />
    ),
  },
];

const FAQS = [
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

const STAR_PATH = (
  <path d="M12 17.27l5.18 3.13-1.37-5.9 4.58-3.96-6.04-.52L12 4.5 9.65 9.02l-6.04.52 4.58 3.96-1.37 5.9z" />
);
const STAR = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    {STAR_PATH}
  </svg>
);

export default function TrialClass() {
  return (
    <div className="mkt">
      {/* Google Tag Manager (this page only) */}
      <Script id="gtm-base" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Landing-page navbar */}
      <header className="mkt-nav">
        <div className="mkt-nav-inner">
          <Logo width={140} height={46} className="h-9 w-auto" white />
          <a href="#register" className="mkt-nav-cta">
            Register Now →
          </a>
        </div>
      </header>

      {/* Announcement bar with live countdown */}
      <CountdownBar />

      {/* Hero */}
      <section className="mkt-hero">
        {/* Boy photo — decorative background, not part of content flow */}
        <Image
          src="/trial-class/hero-photo.png"
          alt=""
          aria-hidden="true"
          width={480}
          height={640}
          className="mkt-hero-bg-photo"
          priority
        />
        <div className="mkt-hero-inner">
          <div className="mkt-hero-left">
            <h1 className="mkt-hero-title">
              Help Your Child Speak With Confidence
            </h1>
            <p className="mkt-hero-sub">
              Turn shyness into self-assurance. Book an Ebright public speaking
              trial class (worth RM150) and watch your child find their voice.
            </p>
            <div
              className="mkt-ribbon"
              aria-label="Special Offer RM80 Trial Class"
            >
              <div className="mkt-ribbon-body">
                <div className="mkt-ribbon-price">
                  <span className="mkt-ribbon-rm">RM</span>
                  <span className="mkt-ribbon-num">80</span>
                </div>
                <span className="mkt-ribbon-sub">
                  <s>Worth RM 150</s>
                </span>
              </div>
              <span className="mkt-ribbon-tag">SPECIAL OFFER</span>
            </div>
            <div className="mkt-hero-trust">
              <div className="mkt-trust-avatars" aria-hidden="true">
                <Image
                  src="/trial-class/testimonial-1.jpg"
                  alt=""
                  width={34}
                  height={34}
                  className="mkt-trust-avatar"
                />
                <Image
                  src="/trial-class/testimonial-2.jpg"
                  alt=""
                  width={34}
                  height={34}
                  className="mkt-trust-avatar"
                />
                <Image
                  src="/trial-class/testimonial-1.jpg"
                  alt=""
                  width={34}
                  height={34}
                  className="mkt-trust-avatar"
                />
              </div>
              <span className="mkt-stars" aria-hidden="true">
                {STAR}
                {STAR}
                {STAR}
                {STAR}
                {STAR}
              </span>
              <span>
                Trusted by <strong>20,000+</strong> parents
              </span>
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
            <p>
              If you recognised your child in any of these situations, this
              trial class could be the first step towards positive change.
            </p>
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

      {/* Why Ebright Trial Class */}
      <section className="mkt-why" id="why-ebright">
        <div className="mkt-section-inner">
          <div className="mkt-section-head">
            <h2>
              Why <span className="mkt-hl">Ebright</span> Trial Class?
            </h2>
            <p>
              Your child won&apos;t simply &lsquo;sit and listen&rsquo;.
              They&apos;ll experience how Ebright builds confidence through
              engaging activities and guided coaching.
            </p>
          </div>
          <div className="mkt-why-cards">
            <Image
              src="/trial-class/why-speaking.png"
              alt="Real Speaking Practice — your child will speak, present, and build confidence in every session."
              width={420}
              height={520}
              className="mkt-why-card"
            />
            <Image
              src="/trial-class/why-training.png"
              alt="Structured Confidence Training — step-by-step guidance designed to develop clarity and self expression."
              width={420}
              height={520}
              className="mkt-why-card"
            />
            <Image
              src="/trial-class/why-interactive.png"
              alt="Fun & Interactive Learning — engaging activities that make kids enjoy learning and participating."
              width={420}
              height={520}
              className="mkt-why-card"
            />
          </div>
        </div>
      </section>

      {/* What Your Child Will Get */}
      <section className="mkt-offer">
        <div className="mkt-section-inner">
          <div className="mkt-section-head">
            <h2><span className="mkt-hl">What Your Child Will Get</span> In This RM 80 Trial</h2>
          </div>
          <div className="mkt-offer-card">
            <span className="mkt-offer-pill">
              A Complete Confidence-Building Experience
            </span>
            <ul className="mkt-offer-list">
              <li>Small classes for student to have better personalized coaching</li>
              <li>Detailed program feedback and learning roadmap</li>
              <li>1 to 1 parents coach consultation</li>
            </ul>
            <hr className="mkt-offer-divider" />
            <div className="mkt-offer-pricing">
              <div className="mkt-offer-row">
                <span className="mkt-offer-label">Total Real Value</span>
                <span className="mkt-offer-orig">RM 150</span>
              </div>
              <div className="mkt-offer-row">
                <span className="mkt-offer-label">You Pay Only</span>
                <div className="mkt-offer-price">
                  <span className="mkt-offer-rm">RM</span>
                  <span className="mkt-offer-amount">80</span>
                </div>
              </div>
            </div>
            <a href="#register" className="mkt-offer-cta">
              Claim This Deal!
            </a>
          </div>
        </div>
      </section>

      {/* Real Stories, Real Impact */}
      <section className="mkt-testimonials">
        <div className="mkt-section-inner">
          <div className="mkt-section-head">
            <h2>
              Real Stories, <span className="mkt-hl">Real Impact</span>
            </h2>
            <p>
              Hear directly from everyday parents who watched their children
              beat stage fright, unlock original thoughts, and build
              life-long confidence.
            </p>
          </div>
          <div className="mkt-tcards mkt-tcards--3">
            {TESTIMONIALS.map((t) => (
              <div className="mkt-tcard mkt-tcard--plain" key={t.by}>
                <div className="mkt-tcard-quote">&ldquo;</div>
                <p className="mkt-tcard-text">{t.text}</p>
                <div className="mkt-tcard-by">{t.by}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mkt-cta" aria-label="Register for RM80 trial class">
        <div className="mkt-cta-inner">
          <h2>
            Your Child&apos;s Confidence Starts Here
          </h2>
          <div className="mkt-cta-pricing">
            <span className="mkt-cta-price">
              <span className="mkt-cta-rm">RM</span>80
            </span>
            <span className="mkt-cta-orig">RM150</span>
          </div>
          <a href="#register" className="mkt-cta-btn">
            Register Now →
          </a>
          <p className="mkt-cta-note">
            No long-term commitment &bull; Loved by 5,000+ Malaysian families
          </p>
        </div>
      </section>
    </div>
  );
}
