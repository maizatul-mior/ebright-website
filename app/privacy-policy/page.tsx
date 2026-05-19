export const metadata = {
  title: "Privacy Policy — Ebright",
};

export default function Privacy() {
  return (
    <>
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[var(--ink-soft)]">Effective Date: February 7, 2023</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-base leading-7 text-[var(--ink-soft)]">
          <p>
            <strong>Your privacy is important to us.</strong> Ebright operates under Ebright Sdn.
            Bhd. and maintains this privacy policy for information collected across social media,
            the website{" "}
            <a className="text-[var(--brand)] hover:underline" href="https://www.ebright.my/">
              https://www.ebright.my/
            </a>
            , and related properties.
          </p>

          <Section title="Data Collection">
            We only ask for personal information when we truly need it to provide a service to
            you. We collect it by fair and lawful means, with your knowledge and consent.
          </Section>

          <Section title="Retention &amp; Protection">
            We keep information only as long as necessary for service delivery. Data receives
            protection within commercially acceptable means to prevent loss and theft, as well
            as unauthorized access, disclosure, copying, use, or modification.
          </Section>

          <Section title="Data Sharing">
            We don&apos;t share any personally identifying information publicly or with third
            parties, except when required to by law.
          </Section>

          <Section title="External Links">
            Our website may connect to outside sites beyond Ebright&apos;s control, and we
            cannot accept responsibility for their privacy practices.
          </Section>

          <Section title="User Rights">
            Individuals may decline providing personal information, though this may limit
            available services.
          </Section>

          <Section title="Acceptance">
            Continued website use indicates acceptance of these privacy practices.
          </Section>

          <Section title="Questions">
            Users experiencing concerns should contact us directly at{" "}
            <a className="text-[var(--brand)] hover:underline" href="mailto:sales@ebright.my">
              sales@ebright.my
            </a>
            .
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[var(--foreground)]">{title}</h2>
      <p className="mt-3">{children}</p>
    </div>
  );
}
