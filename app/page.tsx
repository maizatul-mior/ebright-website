export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Programmes />
        <WhyEbright />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--brand)] text-white">
            E
          </span>
          <span>Ebright</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-[var(--ink-soft)] md:flex">
          <a href="#programmes" className="hover:text-[var(--foreground)]">Programmes</a>
          <a href="#why" className="hover:text-[var(--foreground)]">Why Ebright</a>
          <a href="#contact" className="hover:text-[var(--foreground)]">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
        >
          Book a Trial
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(60% 80% at 20% 0%, var(--cream) 0%, transparent 60%), radial-gradient(45% 60% at 90% 20%, rgba(255,210,63,0.35) 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--brand-strong)] ring-1 ring-[var(--brand)]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            Trinity College London accredited
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Empower your child to <span className="text-[var(--brand)]">speak up</span> and{" "}
            <span className="text-[var(--brand)]">shine</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--ink-soft)]">
            Engaging public speaking classes for kids that build confidence, creativity, and
            leadership — in person across Malaysia or online via Zoom.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
            >
              Book a Trial Class
            </a>
            <a
              href="#programmes"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-base font-semibold text-[var(--foreground)] transition hover:border-black/30"
            >
              See Programmes
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <HeroCard emoji="🎤" title="Confidence" tint="bg-[var(--cream)]" />
            <HeroCard emoji="🌟" title="Creativity" tint="bg-white" rotate="rotate-2" />
            <HeroCard emoji="🧠" title="Critical thinking" tint="bg-white" rotate="-rotate-2" />
            <HeroCard emoji="👑" title="Leadership" tint="bg-[var(--cream)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({
  emoji,
  title,
  tint,
  rotate = "",
}: {
  emoji: string;
  title: string;
  tint: string;
  rotate?: string;
}) {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl p-6 text-center shadow-sm ring-1 ring-black/5 ${tint} ${rotate}`}
    >
      <span className="text-5xl">{emoji}</span>
      <span className="text-sm font-semibold text-[var(--foreground)]">{title}</span>
    </div>
  );
}

function Stats() {
  const items = [
    { value: "4,400+", label: "Active students" },
    { value: "~20,000", label: "Trained since 2016" },
    { value: "23", label: "Branches across Malaysia" },
    { value: "Trinity", label: "College London approved" },
  ];
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-3xl font-bold tracking-tight text-[var(--brand)] sm:text-4xl">
              {item.value}
            </div>
            <div className="mt-2 text-sm font-medium text-[var(--ink-soft)]">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Programmes() {
  const programmes = [
    {
      emoji: "📅",
      title: "Weekly Classes",
      body: "In-person classes across Klang Valley locations — consistent practice in a supportive environment.",
    },
    {
      emoji: "💻",
      title: "Online via Zoom",
      body: "Live, interactive online sessions for kids anywhere in Malaysia and beyond.",
    },
    {
      emoji: "🎓",
      title: "Trinity College London",
      body: "Externally recognized communication skill assessments through Trinity College London (UK).",
    },
    {
      emoji: "🌈",
      title: "School Holiday Programs",
      body: "Intensive workshops including debate, emcee training, and monthly showcases.",
    },
  ];
  return (
    <section id="programmes" className="bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Programmes for every child</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            From weekly classes to internationally recognized assessments, our programmes meet
            your child where they are.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:ring-[var(--brand)]/30"
            >
              <span className="text-3xl">{p.emoji}</span>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm leading-6 text-[var(--ink-soft)]">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEbright() {
  const reasons = [
    {
      title: "Trinity-accredited curriculum",
      body: "Our programmes are approved by Trinity College London (UK), giving students globally recognized credentials.",
    },
    {
      title: "Monthly showcases",
      body: "Real performance opportunities — students grow by speaking in front of real audiences, not just classmates.",
    },
    {
      title: "Free school workshops",
      body: "Collaborative programmes with schools nationwide, bringing public speaking to thousands of students each year.",
    },
  ];
  return (
    <section id="why" className="bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Ebright</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Since 2016, nearly 20,000 students have trained with us. Here&apos;s what sets our
            classes apart.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--foreground)]">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[var(--foreground)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--brand)] text-white">
              E
            </span>
            <span>Ebright</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Public speaking classes that help kids find their voice — across 23 branches in
            Malaysia and online via Zoom.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Headquarters
          </h4>
          <address className="mt-3 not-italic text-sm leading-6 text-white/80">
            No. 21-2, Jalan USJ 10/1D
            <br />
            Taipan Business Centre
            <br />
            47620 Subang Jaya, Selangor
            <br />
            Malaysia
          </address>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Follow us
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {["Facebook", "Instagram", "WhatsApp", "YouTube", "TikTok"].map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="inline-flex w-full items-center rounded-full bg-white/10 px-3 py-1.5 text-white/80 transition hover:bg-white/20 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ebright Sdn. Bhd. (1430604-A). All rights reserved.</p>
          <p>Made with care in Malaysia.</p>
        </div>
      </div>
    </footer>
  );
}
