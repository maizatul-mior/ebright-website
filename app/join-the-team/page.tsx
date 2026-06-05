import Link from "next/link";

export const metadata = {
  title: "Join The Team — Ebright",
  description: "Careers at Ebright Public Speaking. Become a coach and help kids find their voice.",
};

export default function JoinTeam() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Join The Team</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Help kids find their voice
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)]">
            We&apos;re always looking for passionate educators and operators to join Ebright. If
            you love working with kids and believe communication changes lives, we&apos;d love
            to meet you.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Who we&apos;re looking for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-[var(--cream)] p-7 ring-1 ring-black/5">
              <h3 className="text-xl font-bold">Public Speaking Coaches</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Strong command of English. Background in TESL, English Literature, Toastmasters,
                or World Scholars Cup is a plus. Love working with kids aged 7–16.
              </p>
            </article>
            <article className="rounded-3xl bg-[var(--cream)] p-7 ring-1 ring-black/5">
              <h3 className="text-xl font-bold">Branch & Operations Roles</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Help us run smooth class schedules, coordinate parents, and create amazing
                experiences for our students. Strong communication and organization required.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Apply now</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Send us your CV and a short note about why you want to join Ebright. We read every
            application.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:sales@ebright.my?subject=Career%20Application"
              className="inline-flex rounded-lg bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            >
              Email your CV
            </a>
            <Link
              href="/contact-us"
              className="inline-flex rounded-lg border border-black/10 bg-white px-6 py-3 text-base font-semibold transition hover:border-black/30"
            >
              Or send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
