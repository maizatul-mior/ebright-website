import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ebright Referral Program — Spread the Gift of Confidence",
  description:
    "Refer a friend to Ebright and earn tuition credits. It's a simple way to empower other young speakers while getting rewarded for your next term.",
};

// ── Data ────────────────────────────────────────────────────────────────

const branches = [
  { name: "Subang HQ", number: "016-9698351" },
  { name: "Setia Alam", number: "011-31503493" },
  { name: "Sri Petaling", number: "010-9898351" },
  { name: "Kota Damansara", number: "010-8820274" },
  { name: "Putrajaya", number: "010-2989478" },
  { name: "Ampang", number: "016-3488127" },
  { name: "Cyberjaya", number: "010-2784833" },
  { name: "Klang", number: "010-2867833" },
  { name: "Denai Alam", number: "016-2852379" },
  { name: "Online", number: "010-2138351" },
];

const terms = [
  "Vouchers are strictly not transferable or to be monetized (Eg: selling it to other parents)",
  "Vouchers can be redeemed for your next term fee",
  "Vouchers are not convertible to cash",
  "For the RM10 voucher, your friend must join & complete the free trial class",
  "For the RM100 / RM200 voucher, your friend must enroll and pay for the weekly programme. If your friend enrolls into physical classes, you will receive a RM200 voucher. If your friend enrolls into online classes, you will receive a RM100 voucher.",
  "Ebright reserves the right to change these terms and conditions at any time without prior notice",
];

// ── Page ────────────────────────────────────────────────────────────────

export default function EbrightReferral() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--foreground)] text-white">
        <Image
          src="/Ebright%20Referral%20Program/hero-ebright-referral-program.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/65" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Spread the Gift of Confidence &amp;
            <br />
            Get Rewarded
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            If your child has benefited from our public speaking program, help us share that
            transformation with your family and friends. It&apos;s a simple way to empower
            other young speakers while earning massive tuition credits for your next term.
          </p>
        </div>
      </section>

      {/* ── How It Works? ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            How It <span className="text-[var(--brand)]">Works?</span>
          </h2>

          {/* Illustration */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/Ebright%20Referral%20Program/illustration-ebright-referral-program.png"
              alt="Referral program illustration: refer friends, they get free class, you get RM10 voucher"
              width={600}
              height={220}
              className="h-auto w-full max-w-lg object-contain"
            />
          </div>

          {/* Reward explanation */}
          <div className="mt-10 space-y-5 text-base leading-7">
            <div>
              <p className="font-semibold">
                When you refer your friend to our online / physical trial class
              </p>
              <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm text-[var(--foreground)]">
                <li>You will get an RM10 Ebright voucher</li>
                <li>Your friend will get one FREE online / physical trial class</li>
              </ol>
            </div>
            <div>
              <p className="font-semibold">
                When your referral enrols into our weekly program
              </p>
              <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm text-[var(--foreground)]">
                <li>
                  You will get an additional gift worth RM100 (Online) or RM200 (Physical)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Earn Rewards In 3 Steps ───────────────────────────── */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Earn Rewards{" "}
            <span className="text-[var(--brand)]">Just In 3 Steps</span>
          </h2>

          <div className="mt-10 space-y-8">
            {/* Step 1 */}
            <div>
              <div className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-bold text-white">
                Step 1: Copy the following message
              </div>
              <div className="mt-4 rounded-2xl border border-black/8 bg-white p-5">
                <p className="text-sm italic leading-7 text-[var(--foreground)]">
                  Hi, I have recently enrolled my child on this public speaking programme
                  and my child has improved his speaking confidence. If you would like to
                  give it a try, you may register your child for a FREE trial class (Online
                  / Physical) from this link at{" "}
                  <span className="underline">https://www.ebright.my/trial-classes</span>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-bold text-white">
                Step 2: Share the message
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground)]">
                You can share it on your social media platforms such as FB, IG, TikTok or
                WhatsApp.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-bold text-white">
                Step 3: WhatsApp Ebright
              </div>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--foreground)]">
                <p>Inform us via WhatsApp (pick the right branch number)</p>
                <ul className="list-disc space-y-1 pl-6">
                  {branches.map((b) => (
                    <li key={b.name}>
                      <span className="font-semibold">{b.name}:</span> {b.number}
                    </li>
                  ))}
                </ul>
                <p>with the following message:</p>
                <div className="rounded-2xl border border-black/8 bg-white p-5">
                  <p className="italic">
                    &ldquo;Hi Ebright, I have referred my friends with the following details:
                    <br />
                    a. Parents Name: XXX
                    <br />
                    b. Contact: XXX
                    <br />
                    Kindly take note and update me their status after this. Thanks&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Terms and Condition ───────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Terms and Condition
          </h2>
          <ol className="mt-8 list-decimal space-y-3 pl-6 text-sm leading-7 text-[var(--foreground)]">
            {terms.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
