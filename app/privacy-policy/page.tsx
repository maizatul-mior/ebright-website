import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ebright Public Speaking Academy",
};

export default function Privacy() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policies
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-soft)]">Last Update: 2026, June 6</p>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-base leading-8 text-[var(--foreground)]">
          <p>
            Your privacy is important to us. Ebright is a branding under the name of Ebright
            Sdn. Bhd. It is EBright&apos;s policy to respect your privacy regarding any
            information we may collect from you across our social media platforms, website,{" "}
            <a
              href="https://www.ebright.my/"
              className="text-[var(--brand)] hover:underline"
            >
              https://www.ebright.my/
            </a>
            , and other sites we own and operate.
          </p>
          <p>
            We only ask for personal information when we truly need it to provide a service to
            you. We collect it by fair and lawful means, with your knowledge and consent. We
            also let you know why we&apos;re collecting it and how it will be used.
          </p>

          <p>
            We only retain collected information for as long as necessary to provide you with
            your requested service. What data we store, we&apos;ll protect within commercially
            acceptable means to prevent loss &amp; theft, as well as unauthorized access,
            disclosure, copying, use, or modification.
          </p>
          <p>
            We don&apos;t share any personally identifying information publicly or with third
            parties, except when required to by law.
          </p>

          <p>
            Our website may link to external sites that are not operated by us. Please be
            aware that we have no control over the content and practices of these sites, and
            cannot accept responsibility or liability for their respective privacy policies.
          </p>

          <p>
            You are free to refuse our request for your personal information, with the
            understanding that we may be unable to provide you with some of your desired
            services.
          </p>
          <p>
            Your continued use of our website will be regarded as an acceptance of our
            practices around privacy and personal information. If you have any questions about
            how we handle user data and personal information, feel free to contact us.
          </p>

          <p>This policy is effective as of 7th February 2023.</p>
        </div>
      </section>
    </>
  );
}
