import type { Metadata } from "next";
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

      {/* Announcement bar with live countdown */}
      <CountdownBar />

      {/* Landing-page navbar */}
      <header className="mkt-nav">
        <div className="mkt-nav-inner">
          <Logo width={140} height={46} className="h-9 w-auto" />
          <a href="#register" className="mkt-nav-cta">
            Register Now →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mkt-hero">
        <div className="mkt-hero-inner">
          <div className="mkt-hero-left">
            <h1 className="mkt-hero-title">
              Help Your Child Speak With Confidence
            </h1>
            <p className="mkt-hero-sub">
              Turn shyness into self-assurance. Book an Ebright public speaking
              trial class (worth RM150) and watch your child find their voice.
            </p>

            <div className="mkt-hero-photo-wrap">
              <Image
                src="/trial-class/hero-photo.png"
                alt="Young student speaking confidently with a microphone"
                width={480}
                height={380}
                className="mkt-hero-photo"
                priority
              />
              <div
                className="mkt-ribbon"
                aria-label="Special Offer RM80 Trial Class"
              >
                <span className="mkt-ribbon-tag">SPECIAL OFFER</span>
                <div className="mkt-ribbon-price">
                  <span className="mkt-ribbon-rm">RM</span>
                  <span className="mkt-ribbon-num">80</span>
                </div>
                <span className="mkt-ribbon-sub">Trial Class</span>
              </div>
            </div>

            <div className="mkt-hero-trust">
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
              If you recognised your child in any of these, the RM80 trial is
              the perfect first step.
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
    </div>
  );
}
