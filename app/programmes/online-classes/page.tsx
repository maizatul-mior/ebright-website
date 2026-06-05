import Link from "next/link";

export const metadata = {
  title: "Online Classes — Ebright",
  description: "Live, interactive public speaking classes for kids via Zoom — taught by UK native coaches.",
};

export default function OnlineClasses() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Programmes</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Online Classes</h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)]">
            Live, interactive Zoom classes for kids — anywhere in Malaysia or beyond. Our online
            programme is led by UK native coaches who expose students to a variety of cultures and
            communication styles.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Why online works</h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-[var(--ink-soft)]">
                {[
                  "Same Trinity-aligned curriculum as our in-person weekly classes.",
                  "Small groups with a 1-to-6 coach-to-student ratio — every kid speaks every session.",
                  "UK native coaches lead the sessions, expanding students' exposure to global English.",
                  "Flexible from anywhere — no traffic, no travel, just a laptop and an idea.",
                  "Filmed presentations so families can review progress together.",
                ].map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--brand)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[var(--cream)] p-8 ring-1 ring-black/5">
              <h3 className="text-xl font-bold">What you&apos;ll need</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--ink-soft)]">
                <li>📹 A device with a working camera and microphone</li>
                <li>🌐 Stable internet connection</li>
                <li>📺 Zoom installed (link sent before each class)</li>
                <li>📓 The Ebright worksheet (digital + optional printed)</li>
                <li>🪑 A quiet space where your child can stand and speak freely</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Try a class online</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Book a trial session and we&apos;ll show you exactly how it works on the day.
          </p>
          <Link
            href="/trial-class"
            className="mt-8 inline-flex rounded-lg bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
          >
            Register for an online trial
          </Link>
        </div>
      </section>
    </>
  );
}
