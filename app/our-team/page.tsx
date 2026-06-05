import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team — Ebright Public Speaking Academy",
  description:
    "Meet Ebright's leadership & management team and the global educational authorities who vet our standards — ensuring educational excellence across every branch.",
};

const advisors = [
  {
    src: "/home/expert-maryann.png",
    name: "Mary Ann Tear",
    role: "Senior Examiner & Trainer, Trinity College London",
  },
  {
    src: "/home/expert-badrul.png",
    name: "Prof. Ts. Dr. Nor Badrul Anuar",
    role: "Professor, Dept. of Computer Systems & Technology, Universiti Malaya",
  },
  {
    src: "/home/expert-faiz.png",
    name: "Dr. Muhammad Faiz Zaki",
    role: "Senior Lecturer in Computer Networking, Universiti Malaya",
  },
];

export default function OurTeam() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image src="/our-team/img-02.png" alt="The Ebright team" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center text-white md:py-32">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Meet Our Leadership &amp; Management Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
            From strategic central operations to dedicated local campus management, meet the
            professionals ensuring standard educational excellence across every Ebright branch.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Image
            src="/our-team/img-05.png"
            alt="Kevin — Managing Director; Athirah — Head of Academy; Fazween — Head of Industrial & Organisational Psychologist"
            width={1919}
            height={1079}
            className="mx-auto h-auto w-full"
          />
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--brand)]">Our Advisor</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Backed by <span className="text-[var(--brand)]">Global Educational Authority</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              Our operational team works hand-in-hand with leading international examiners and
              university professors to vet our standards.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {advisors.map((a) => (
              <article key={a.name} className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
                <div className="relative aspect-[4/5] w-full">
                  <Image src={a.src} alt={a.name} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12 text-white">
                    <h3 className="text-lg font-bold">{a.name}</h3>
                    <p className="mt-1 text-xs leading-4 text-white/85">{a.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 py-14 text-white sm:px-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Adores Kids? Help Us Build Their Confidence.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/85">
                  Join a team dedicated to inspiring children and watching them grow into confident
                  leaders. As our network expands, we are looking for passionate individuals to join
                  our management and operations teams. Apply today to build a career with real impact!
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/join-the-team"
                    className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-[var(--foreground)] transition hover:brightness-95"
                  >
                    Apply Today
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-lg border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden shrink-0 items-end gap-2 md:flex">
                <Image src="/our-team/img-03.png" alt="" width={180} height={300} className="h-56 w-auto object-contain" />
                <Image src="/our-team/img-04.png" alt="" width={180} height={300} className="h-64 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
