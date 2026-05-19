import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <BranchesPreview />
      <WhatWeOffer />
      <Advisors />
      <Ambassadors />
    </>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(60% 80% at 20% 0%, var(--cream) 0%, transparent 60%), radial-gradient(45% 60% at 90% 20%, rgba(255,210,63,0.35) 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--brand-strong)] ring-1 ring-[var(--brand)]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            Trinity College London accredited
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Empower your child with the confidence and skills to{" "}
            <span className="text-[var(--brand)]">speak up</span> and{" "}
            <span className="text-[var(--brand)]">shine!</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--ink-soft)]">
            Our engaging public speaking classes for kids foster creativity, communication, and
            leadership.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/trial-class"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
            >
              I want my child to shine on stage!
            </Link>
            <Link
              href="/programmes/weekly-classes"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-base font-semibold text-[var(--foreground)] transition hover:border-black/30"
            >
              See Programmes
            </Link>
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
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
}

function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Ebright</h2>
        <div className="mt-6 space-y-4 text-lg leading-8 text-[var(--ink-soft)]">
          <p>
            Ebright is one of Malaysia&apos;s most prominent public speaking centres, with more
            than 4,400 active students attending our weekly physical and online classes.
          </p>
          <p>
            Our strength lies in our ability to structure our program systematically in a fun and
            interactive manner. In addition, we are one of the very few centres in Malaysia
            approved by Trinity College London (UK) to run an internationally recognized
            communication skill assessment for our students.
          </p>
          <p>Since 2016, we have trained nearly 20,000 young lives in the art of public speaking.</p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/trial-class"
            className="inline-flex rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
          >
            Register for a trial class!
          </Link>
          <Link
            href="/our-story"
            className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-base font-semibold transition hover:border-black/30"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "4,400+", label: "Active students weekly" },
    { value: "~20,000", label: "Young lives trained since 2016" },
    { value: "Trinity", label: "College London approved" },
  ];
  return (
    <section className="border-y border-black/5 bg-[var(--cream)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
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

function Testimonials() {
  const list = [
    {
      quote:
        "My son has been joining Ebright Online since pandemic. He looks forward to his online lesson where he meets new friends and supports one another. Coach is also very encouraging and engaging students in a positive manner!",
      author: "Ebright Parent",
    },
    {
      quote:
        "Absolutely phenomenal public speaking class for kids! My little one has transformed from a shy speaker to a confident communicator, all thanks to this fantastic programme!",
      author: "Ebright Parent",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What parents are saying</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((t, i) => (
            <figure
              key={i}
              className="rounded-3xl bg-[var(--cream)] p-8 shadow-sm ring-1 ring-black/5"
            >
              <span className="text-4xl text-[var(--brand)]">&ldquo;</span>
              <blockquote className="mt-2 text-lg leading-7 text-[var(--foreground)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-[var(--ink-soft)]">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/testimonial" className="text-sm font-semibold text-[var(--brand)] hover:underline">
            Read more testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
}

function BranchesPreview() {
  const branches = [
    "Subang Taipan HQ", "Setia Alam", "Putrajaya", "Kota Damansara",
    "Sri Petaling", "Ampang", "Cyberjaya", "Denai Alam",
    "Klang", "Danau Kota", "Shah Alam", "Bandar Seri Putra",
    "Kajang TTDI Grove", "Bandar Baru Bangi", "Bandar Tun Hussein Onn", "Bandar Rimbayu",
    "Taman Sri Gombak", "Eco Grandeur", "Kota Warisan", "Tropicana Sungai Buloh",
    "Puncak Jalil", "Puchong Utama", "Online (Zoom)",
  ];
  return (
    <section className="bg-[var(--background)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Branches</h2>
            <p className="mt-3 text-lg text-[var(--ink-soft)]">
              23 locations across Malaysia, plus online via Zoom.
            </p>
          </div>
          <Link
            href="/our-branches"
            className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold transition hover:border-black/30"
          >
            View all branches →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {branches.map((b) => (
            <div
              key={b}
              className="rounded-xl bg-white px-4 py-3 text-sm font-medium ring-1 ring-black/5"
            >
              <span className="mr-2 text-[var(--brand)]">●</span>
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeOffer() {
  const offerings = [
    {
      emoji: "📅",
      title: "Weekly Classes",
      body:
        "Every week, we bring the fun with multiple classes happening at different times and venues across Klang Valley! Kids dive into exciting activities that boost their confidence and presentation skills.",
    },
    {
      emoji: "🏫",
      title: "Free School Workshop",
      body:
        "Our special school collaboration program is sparking excitement across Malaysia! We bring dynamic public speaking classes to students from schools nationwide.",
    },
    {
      emoji: "🌈",
      title: "School Holiday Programmes",
      body:
        "Nothing to do during school holidays? Join our intensive workshops featuring confidence-building activities like Debate and Emcee training.",
    },
    {
      emoji: "🎤",
      title: "Monthly Showcases",
      body:
        "We're expanding our reach and empowering students to discover their voices — nurturing the next generation of stellar speakers and leaders.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Programmes that meet your child where they are.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <article
              key={o.title}
              className="flex flex-col gap-3 rounded-3xl bg-[var(--cream)] p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:ring-[var(--brand)]/30"
            >
              <span className="text-3xl">{o.emoji}</span>
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="text-sm leading-6 text-[var(--ink-soft)]">{o.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advisors() {
  const advisors = [
    {
      name: "Mary Ann Tear",
      role: "Senior Examiner, Trinity College London",
      bio: "Choreographer, director, Performing Arts lecturer and British Federation Adjudicator. Former UK lecturer in Performing Arts at the Universities of Hertfordshire and Middlesex, judge at the ESU Public Speaking Competition 2008, and currently coaches the Worlds School Debate team in Singapore. She is currently the advisor for Ebright's communication skills.",
    },
    {
      name: "Prof. TS. Dr. Nor Badrul Anuar",
      role: "Professor, Universiti Malaya",
      bio: "Head of the Centre of Research for Cyber Security & Network (CSNET) at Universiti Malaya. Research focuses on network intrusion and prevention systems, cybersecurity, cloud/edge computing security, and IoT. Recognized by Stanford University as one of the world's top 2% scientists.",
    },
    {
      name: "Dr. Muhammad Faiz Zaki",
      role: "Senior Lecturer, Universiti Malaya",
      bio: "Director of UM's Data and Information Management Centre. PhD from Universiti Malaya, MSc from University College London. Expertise in computer networking, big data analytics, and cybersecurity, focusing on network traffic classification using real-time analytics with edge computing and federated learning.",
    },
  ];
  return (
    <section className="bg-[var(--cream)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Advisors</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {advisors.map((a) => (
            <article key={a.name} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-[var(--brand)] text-xl font-bold text-white">
                {a.name.split(" ").slice(-1)[0][0]}
              </div>
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--brand)]">{a.role}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{a.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ambassadors() {
  const list = [
    { name: "Aisy Mateen", note: "Son of Malaysia's well-known actress Yana Samsudin. Known as a bright child for his exquisite Malay." },
    { name: "Nur Ayeesha Azzaleea", note: "Popularly known as Zaza. Her TikTok videos with her teacher mother have garnered millions of views." },
    { name: "Arishya Putri", note: "One of our most supportive Ebright Online students. National Fencer winning multiple awards." },
    { name: "Alyssa Dezek", note: "Singer and actress whose YouTube channel has over 4.5M subscribers — youngest YouTuber in Malaysia's Top 10." },
    { name: "Dhiya Humaira", note: "Loyal Ebright student. TikToks of her speeches have reached over 10k views." },
    { name: "Ara Mysara Wan", note: "Youngest sibling of Adam's Autism Family, featuring awareness on living with an autistic child." },
    { name: "Cinta Sumayyah", note: "Elder daughter of Malaysian pop song icon and actress Elyana Emrizal. Avid sports enthusiast." },
    { name: "Ara Aziz", note: "Daughter of Malaysian actor/director Aziz M. Osman. Hosts 'No Gadget No Problem' — a kids show." },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Ambassadors</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <div key={p.name} className="rounded-2xl bg-[var(--cream)] p-5 ring-1 ring-black/5">
              <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[var(--brand)] text-base font-bold text-white">
                {p.name[0]}
              </div>
              <h3 className="text-base font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
