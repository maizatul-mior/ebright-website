export const metadata = {
  title: "Terms and Conditions — Ebright",
};

export default function Terms() {
  return (
    <>
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Terms and Conditions</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-6 text-base leading-7 text-[var(--ink-soft)]">
          <Section title="Student Pickup Policy">
            Once your child has been released, they will no longer be under the supervision of
            Ebright staff. Parents must consent to children departing unaccompanied, and Ebright
            disclaims liability for incidents after dismissal.
          </Section>

          <Section title="Social Media Consent">
            Ebright may photograph or record students for use on our official social media
            platforms (e.g., Facebook, Instagram), website, and marketing or promotional
            materials. Names will not be disclosed publicly without additional consent.
          </Section>

          <Section title="Money Back Guarantee (First 6 Classes)">
            Eligible new students receive refunds if they complete all 6 initial weekly sessions
            without absences and remain unsatisfied. Physical materials (RM100) and transaction
            fees aren&apos;t refundable. This doesn&apos;t apply to online classes, short
            courses, or showcases.
          </Section>

          <Section title="Class Replacement &amp; Freeze Policy">
            Students may request makeup classes via the AOne app with 2 days&apos; notice.
            Packages range from 6–12 months with validity periods. Class freezing is allowed
            for up to 3 months with valid reasons (holidays, health, exams, travel).
          </Section>

          <p className="text-sm">
            For any questions about these terms, please contact us at{" "}
            <a className="text-[var(--brand)] hover:underline" href="mailto:sales@ebright.my">
              sales@ebright.my
            </a>
            .
          </p>
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
