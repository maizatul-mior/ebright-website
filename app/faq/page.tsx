export const metadata = {
  title: "FAQ — Ebright",
  description: "Frequently asked questions about Ebright's public speaking classes for kids.",
};

const faqs = [
  {
    q: "What is the focus of your public speaking program?",
    a: "The program aims to unleash children's hidden potential through a Trinity College London-aligned curriculum using play-based teaching methods for ages 7–16, organized by grades (12 weeks each).",
  },
  {
    q: "How does your public speaking program work?",
    a: "Through interactive lessons and custom worksheets, students gradually build confidence and communication skills, eventually delivering 2-minute speeches using main points rather than memorization.",
  },
  {
    q: "How long is your program?",
    a: "The program is continuous. Positive changes typically emerge after 2 grades (6 months), with full mastery developing over longer periods.",
  },
  {
    q: "What are they learning in your weekly class?",
    a: "Classes include games, warm-ups, topic-specific worksheets, speech practice, constructive feedback, and filmed presentations before the group.",
  },
  {
    q: "What are the coaches' qualifications?",
    a: "Coaches hold backgrounds in TESL and English Literature with strong language command. Some possess Toastmasters qualifications and World Scholars Cup experience.",
  },
  {
    q: "What is your syllabus?",
    a: "Based on original worksheets aligned with Trinity College London assessments, covering speech delivery techniques, vocal modulation, body language, persuasive communication, and critical thinking.",
  },
  {
    q: "How many students are in a class?",
    a: "Small groups maintain a 1-coach-to-6-students ratio, ensuring adequate individual guidance.",
  },
  {
    q: "Is there any event that allows the students to showcase their public speaking skills?",
    a: "Yes — monthly premium showcases, mandatory Foundation Appraisal sessions, mini showcases, competitions, and speech contests in public venues like auditoriums and shopping malls.",
  },
  {
    q: "How soon can I enrol my child in the program?",
    a: "Enrollment is batchless — students can start anytime since each weekly class features independent topics.",
  },
  {
    q: "Do you have any programmes during the school holiday?",
    a: "Yes. Holiday programs are available at the Subang Taipan headquarters. Contact our marketing team for details.",
  },
  {
    q: "Where are your public speaking classes available?",
    a: "Online classes via Zoom plus 22 physical locations across the Klang Valley and Kuala Lumpur (full list on our Branches page).",
  },
  {
    q: "Do you have native speaking coaches?",
    a: "Yes — UK native coaches lead our online classes to expose students to various cultures.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">FAQ</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently asked questions
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl bg-[var(--cream)] p-6 ring-1 ring-black/5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold">
                {f.q}
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-[var(--brand)] text-white transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
