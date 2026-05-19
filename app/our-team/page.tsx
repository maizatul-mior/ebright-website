export const metadata = {
  title: "Our Team — Ebright",
  description: "Meet the advisors and coaches behind Ebright's public speaking programmes.",
};

const advisors = [
  {
    name: "Mary Ann Tear",
    role: "Senior Examiner, Trinity College London",
    bio: "Senior examiner and trainer at Trinity College London. Also a choreographer, director, Performing Arts lecturer and practitioner, and a British Federation Adjudicator. Former UK lecturer in Performing Arts for the Universities of Hertfordshire and Middlesex, where she helped create the Performing Arts courses at Diploma and BA levels. Holds a Certificate in TESOL, was a judge on the ESU Public Speaking Competition in 2008, and currently coaches the Worlds School Debate team in Singapore. She is currently the advisor for Ebright's communication skills.",
  },
  {
    name: "Prof. TS. Dr. Nor Badrul Anuar",
    role: "Professor, Universiti Malaya",
    bio: "Professor at the Department of Computer Systems & Technology within the Faculty of Computer Science and Information Technology at Universiti Malaya. Head of the Centre of Research for Cyber Security & Network (CSNET), leading research in cybersecurity and networking. Primary research interests include network intrusion and prevention systems, network and computer security, cloud/edge computing security, and the Internet of Things. Recognized by Stanford University as one of the world's top 2% scientists.",
  },
  {
    name: "Dr. Muhammad Faiz Zaki",
    role: "Senior Lecturer, Universiti Malaya",
    bio: "Senior Lecturer in Computer Networking at Universiti Malaya and Director of its Data and Information Management Centre. PhD from Universiti Malaya, MSc from University College London. Expertise at the intersection of computer networking, big data analytics, and cybersecurity. Research focuses on network traffic classification using real-time analytics with edge computing and federated learning. Core member of CSNET, holds multiple professional networking certifications, and has published extensively in high-impact journals.",
  },
];

export default function OurTeam() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Our Team</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            The people behind Ebright
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            World-class advisors and a coaching team backed by TESL, English Literature, and
            Toastmasters credentials.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Advisors</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {advisors.map((a) => (
              <article
                key={a.name}
                className="flex flex-col rounded-3xl bg-[var(--cream)] p-7 shadow-sm ring-1 ring-black/5"
              >
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-[var(--brand)] text-xl font-bold text-white">
                  {a.name.split(" ").slice(-1)[0][0]}
                </div>
                <h3 className="text-lg font-semibold">{a.name}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--brand)]">{a.role}</p>
                <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">{a.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Coaches</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Our coaches hold backgrounds in TESL and English Literature with strong language
            command. Many also have Toastmasters qualifications and World Scholars Cup experience.
            UK native coaches lead our online classes, exposing students to various cultures.
          </p>
          <p className="mt-6 text-sm text-[var(--ink-soft)]">
            Coach profile photos coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
