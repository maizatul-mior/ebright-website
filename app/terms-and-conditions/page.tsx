import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Condition — Ebright Public Speaking Academy",
};

export default function Terms() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms and Condition
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-soft)]">Last Update: 2026, June 6</p>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-12 px-6 text-base leading-7 text-[var(--foreground)]">

          {/* ── 1. Student Pickup Policy ─────────────────────────── */}
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold">Student Pickup Policy</h2>

            <div>
              <h3 className="font-bold text-[var(--brand)]">
                Parent Consent for Unaccompanied Departure After Class
              </h3>
              <p className="mt-3">
                At Ebright Sdn Bhd, we prioritize the safety and well-being of every child.
                To ensure clarity regarding children leaving class unaccompanied, we request
                parental consent for students to leave independently after class.
              </p>
              <p className="mt-3">
                By providing your consent, you acknowledge that your child will be released
                from class to meet you or another designated pickup location without an adult
                or guardian escort. Please be aware that once your child has been released,
                they will no longer be under the supervision of Ebright staff.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">Liability Waiver</h3>
              <p className="mt-3">
                Ebright Sdn Bhd, its staff, and affiliates will not be held responsible for
                any incidents or accidents that may occur once your child has been released.
                This includes any physical harm, loss of personal property, or unforeseen
                circumstances post-dismissal.
              </p>
              <p className="mt-3">
                By agreeing to this policy, you accept full responsibility for your child's
                safety and conduct after they leave class.
              </p>
              <p className="mt-3">
                If you have any questions or need further clarification, feel free to contact
                us. Thank you for your cooperation.
              </p>
            </div>
          </div>

          {/* ── 2. Social Media Consent ──────────────────────────── */}
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold">
              Parent/Guardian Consent for Social Media Use
            </h2>

            <div>
              <h3 className="font-bold text-[var(--brand)]">
                Parent/Guardian Consent for Social Media Use
              </h3>
              <p className="mt-3">
                By enrolling your child at Ebright, you grant consent for Ebright to
                photograph or record your child during classes, events, or activities for use
                on our official social media platforms (e.g., Facebook, Instagram), website,
                and marketing or promotional materials.
              </p>
              <p className="mt-3">
                We respect your privacy and assure you that your child&apos;s name will not
                be publicly disclosed without prior additional consent.
              </p>
              <p className="mt-3">
                If you have any concerns regarding this, please contact us for further
                clarification.
              </p>
            </div>
          </div>

          {/* ── 3. Money Back Guarantee ──────────────────────────── */}
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold">Money Back Guarantee Policy</h2>

            <div>
              <h3 className="font-bold text-[var(--brand)]">
                Money Back Guarantee (First 6 Classes)
              </h3>
              <p className="mt-3">
                We are confident that our public speaking class for kids will help your child
                develop essential communication skills and gain confidence in public speaking.
                If for any reason you or your child are not satisfied with the programme, we
                offer a money-back guarantee for the first 6 lessons.
              </p>
              <p className="mt-3">
                Please note that to be eligible for the Money Back Guarantee, your child:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                <li>Have attended at least 6 weekly classes</li>
                <li>Have attended all the weekly classes without skipping any.</li>
                <li>
                  Are new students who have not previously experienced any lessons at Ebright
                  prior enrolment.
                </li>
                <li>Are still in their first term.</li>
                <li>Joined us starting from 1st May 2023 (Based on Bank payment record)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">T&amp;Cs</h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-sm">
                <li>
                  Physical items such as bag, stationeries given are not refundable and will be
                  charged at RM100 per students
                </li>
                <li>
                  Cost incurred due to transactional cost will not be refunded. Eg: Credit card
                  payment service charge.
                </li>
                <li>
                  This policy does not apply to Weekly online classes, Ebright short courses,
                  showcases, school holiday programmes and is not to be used in conjunction with
                  any other promotion.
                </li>
                <li>Submit and fill in the refund form.</li>
              </ul>
              <p className="mt-4">
                If you meet all the above criterias, you are entitled for a full refund for
                your first 6 lessons. The balance week will be charged pro-ratedly. (If Any)
              </p>
            </div>

            {/* Scenarios */}
            <div className="space-y-4">
              {[
                {
                  label: "Scenario 1: Term 1 student completed their 6th Week, seeking for a refund",
                  rows: [
                    ["Payment Made", "RM 880"],
                    ["Materials Fee", "RM 100"],
                    ["Total Refund", "RM 780"],
                  ],
                },
                {
                  label: "Scenario 2: Term 1 student completed their 12th Week, seeking for a refund",
                  rows: [
                    ["Payment Made", "RM 880"],
                    ["1 – 6th Week", "No charges"],
                    ["7 – 12 Week", "RM 440"],
                    ["Materials Fee", "RM 100"],
                    ["Total Refund", "RM 340"],
                  ],
                },
                {
                  label: "Scenario 3: Term 2 students completed their 3rd Week, seeking for a refund",
                  rows: [["", "Not applicable"]],
                },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-[var(--cream)] p-5">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <dl className="mt-2 space-y-1 text-sm">
                    {s.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        {k && <dt className="w-36 shrink-0 text-[var(--ink-soft)]">{k}</dt>}
                        <dd className={`font-medium ${!k ? "pl-0" : ""}`}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            <p className="text-sm text-[var(--ink-soft)]">
              In the event of any grey area situations, where the eligibility for the Money
              Back Guarantee is unclear, we reserve the right to make the final decision. We
              will evaluate the circumstances on a case-by-case basis and make a fair and
              reasonable decision based on our policies and the best interest of all parties
              involved.
            </p>
            <p className="text-sm text-[var(--ink-soft)]">
              Thank you for considering our public speaking class for kids. We look forward
              to helping your child become a more confident and effective communicator.
            </p>
          </div>

          {/* ── 4. Replacement & Freeze Policy ───────────────────── */}
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold">
              Ebright Class Replacement &amp; Freeze Policy
            </h2>

            <div>
              <h3 className="font-bold text-[var(--brand)]">
                Ebright Class Replacement &amp; Freeze Policy
              </h3>
              <p className="mt-3">
                At Ebright, we understand that life can sometimes be unpredictable. Whether
                it&apos;s a missed class or the need to take a short break, our flexible Class
                Replacement &amp; Freeze Policy is designed to support your child&apos;s
                learning while accommodating your family&apos;s schedule.
              </p>
              <p className="mt-3">
                These policies ensure that students can stay on track in their learning
                journey — with room for rest, travel, or unexpected changes — without losing
                the momentum they&apos;ve built in class.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">Class Replacement Policy</h3>
              <h3 className="mt-3 font-bold text-[var(--brand)]">
                Replacement Request Guidelines
              </h3>
              <p className="mt-3">
                Replacement classes must be requested via the AOne app at least 2 days in
                advance.
              </p>
              <p className="mt-3">
                Students may attend more than one class a week if needed to make up for
                missed sessions, provided the topic is similar and they are comfortable.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">Package Breakdown &amp; Validity</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/10 text-left text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)]">
                      <th className="pb-2 pr-4">Package Duration</th>
                      <th className="pb-2 pr-4">Total Credits</th>
                      <th className="pb-2 pr-4">Validity Period</th>
                      <th className="pb-2">Allowed Replacement Extension</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {[
                      ["6 months", "24 credits", "26 weeks", "Up to 2 weeks"],
                      ["9 months", "36 credits", "39 weeks", "Up to 3 weeks"],
                      ["12 months", "48 credits", "52 weeks", "Up to 4 weeks"],
                    ].map(([d, c, v, e]) => (
                      <tr key={d}>
                        <td className="py-2 pr-4">{d}</td>
                        <td className="py-2 pr-4">{c}</td>
                        <td className="py-2 pr-4">{v}</td>
                        <td className="py-2">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-[var(--ink-soft)]">
                Each weekly class = 1 credit
              </p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Validity period = duration to utilise all credits, including the allowed
                extension for replacement.
              </p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Replacement across branches is currently not available.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">Important Notes</h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-[var(--ink-soft)]">
                <li>
                  All replacement classes must be completed within the same package
                  term&apos;s validity.
                </li>
                <li>Unused credits will be forfeited after the term expires.</li>
                <li>
                  Students are encouraged to attend weekly classes regularly for best results.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">Class Freezing Policy</h3>
              <p className="mt-3">
                We allow class freezing under specific conditions for students who need to
                temporarily pause classes and resume later. The freeze period must not exceed
                3 months, and a valid reason must be provided.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">Eligibility Criteria</h3>

              <p className="mt-4 font-semibold">A. Freeze After Completing a Term</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                <li>Student has completed the previous term.</li>
                <li>Parent has paid for the upcoming term.</li>
                <li>Student plans to resume within 3 months.</li>
                <li>A valid reason is provided.</li>
              </ul>

              <p className="mt-4 font-semibold">B. Freeze Mid-Term</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                <li>Student is currently in the middle of a paid term.</li>
                <li>4 or more credits remain in the package.</li>
                <li>Student plans to resume within 3 months.</li>
                <li>A valid reason is provided.</li>
                <li>
                  If the student has 1–3 credits left, we encourage them to complete their
                  remaining classes before requesting a freeze.
                </li>
              </ul>

              <p className="mt-4 font-semibold">Valid Reasons May Include:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                <li>Holiday season or family trip</li>
                <li>Study or exam preparation</li>
                <li>Travelling</li>
                <li>Health-related matters</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--brand)]">Summary</h3>
              <p className="mt-3">
                We&apos;re committed to making your child&apos;s learning journey as flexible
                and stress-free as possible. Whether through make-up classes or temporary
                freezing, our policies are designed to support your family&apos;s needs while
                maintaining structure and consistency.
              </p>
              <p className="mt-3">
                If you need to request a replacement or class freeze, please contact our
                centre staff or submit your request via the AOne app. We&apos;re here to
                help!
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
