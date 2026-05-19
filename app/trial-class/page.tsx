export const metadata = {
  title: "Trial Class — Ebright",
  description: "Register your child for a trial public speaking class with Ebright.",
};

const branches = [
  "Subang Taipan HQ", "Setia Alam", "Putrajaya", "Kota Damansara", "Cyberjaya",
  "Sri Petaling", "Denai Alam", "Ampang", "Klang", "Danau Kota",
  "Bandar Baru Bangi", "Shah Alam", "Bandar Tun Hussein Onn", "Eco Grandeur",
  "Bandar Seri Putra", "Bandar Rimbayu", "Taman Sri Gombak", "Kota Warisan",
  "Kajang TTDI Grove", "Online (Zoom)",
];

export default function TrialClass() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Trial Class</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Book your child&apos;s first class
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)]">
            Fill in the form below and our team will reach out within one working day to confirm
            your trial session at the branch you select.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <form className="space-y-5 rounded-3xl bg-[var(--cream)] p-8 ring-1 ring-black/5">
            <Field label="Parent's Full Name" name="parent" type="text" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Parent's Phone (with WhatsApp)" name="phone" type="tel" required />
            <div>
              <label htmlFor="branch" className="block text-sm font-semibold text-[var(--foreground)]">
                Preferred Location
              </label>
              <select
                id="branch"
                name="branch"
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base focus:border-[var(--brand)] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select a branch…</option>
                {branches.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="source" className="block text-sm font-semibold text-[var(--foreground)]">
                How did you find out about us?
              </label>
              <select
                id="source"
                name="source"
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base focus:border-[var(--brand)] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select…</option>
                <option>Friend / Family referral</option>
                <option>Google search</option>
                <option>Facebook / Instagram</option>
                <option>TikTok</option>
                <option>School event</option>
                <option>News / Media</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--foreground)]">
                Anything else? (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base focus:border-[var(--brand)] focus:outline-none"
                placeholder="Tell us about your child's age, interests, or any questions you have."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
            >
              I want my child to shine on stage!
            </button>
            <p className="text-center text-xs text-[var(--ink-soft)]">
              Form submissions aren&apos;t wired up yet. Contact us directly at{" "}
              <a className="font-semibold text-[var(--brand)] hover:underline" href="mailto:sales@ebright.my">
                sales@ebright.my
              </a>{" "}
              or{" "}
              <a className="font-semibold text-[var(--brand)] hover:underline" href="https://wa.me/60169698351">
                WhatsApp 016-9698351
              </a>.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-[var(--foreground)]">
        {label} {required && <span className="text-[var(--brand)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base focus:border-[var(--brand)] focus:outline-none"
      />
    </div>
  );
}
