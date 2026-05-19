export const metadata = {
  title: "Contact Us — Ebright",
  description: "Get in touch with Ebright Public Speaking. Email, WhatsApp, or visit our HQ in Subang Jaya.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Contact Us</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Questions, partnership ideas, or just want to chat about how we can help your child
            shine on stage? Reach out below.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="space-y-8">
            <ContactBlock
              title="Headquarters"
              lines={[
                "No. 21-2, Jalan USJ 10/1D",
                "Taipan Business Centre",
                "47620 Subang Jaya, Selangor D.E",
                "Malaysia",
              ]}
            />
            <ContactBlock
              title="New York Liaison Office"
              lines={[
                "71-45 160 Street Apt 1A",
                "Fresh Meadows, NY 11365",
                "United States",
              ]}
            />
            <div className="rounded-3xl bg-[var(--cream)] p-7 ring-1 ring-black/5">
              <h2 className="text-lg font-bold">Get in touch</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[var(--brand)]">Phone</dt>
                  <dd className="mt-1">
                    <a href="tel:+60169698351" className="text-base font-semibold hover:underline">016-9698351</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[var(--brand)]">WhatsApp</dt>
                  <dd className="mt-1">
                    <a href="https://wa.me/60169698351" target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:underline">
                      +60 16-969 8351
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-[var(--brand)]">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:sales@ebright.my" className="text-base font-semibold hover:underline">sales@ebright.my</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <form className="space-y-5 rounded-3xl bg-[var(--cream)] p-8 ring-1 ring-black/5">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <Field label="Parent's Full Name" name="parent" type="text" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone (with WhatsApp)" name="phone" type="tel" required />
            <div>
              <label htmlFor="inquiry" className="block text-sm font-semibold">
                Inquiry type
              </label>
              <select
                id="inquiry"
                name="inquiry"
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base focus:border-[var(--brand)] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select…</option>
                <option>Book a trial class</option>
                <option>Programme questions</option>
                <option>School workshop / collaboration</option>
                <option>Franchising</option>
                <option>Careers</option>
                <option>Media / partnership</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base focus:border-[var(--brand)] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            >
              Send message
            </button>
            <p className="text-center text-xs text-[var(--ink-soft)]">
              Form submissions aren&apos;t wired up yet — please email or WhatsApp us directly.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl bg-[var(--cream)] p-7 ring-1 ring-black/5">
      <h2 className="text-lg font-bold">{title}</h2>
      <address className="mt-3 not-italic text-base leading-7 text-[var(--ink-soft)]">
        {lines.map((l, i) => (
          <span key={i}>
            {l}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </address>
    </div>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold">
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
