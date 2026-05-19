export const metadata = {
  title: "Our Branches — Ebright",
  description: "23 branches across Malaysia plus online classes via Zoom.",
};

const branches = [
  { name: "Subang Taipan HQ", address: "21-2, Jalan USJ 10/1d, Taipan Business Centre, 47620 Subang Jaya, Selangor", phone: "010-235 8351" },
  { name: "Setia Alam", address: "E-2-37, Sunsuria Forum, Seksyen U13, 1, Jln Setia Dagang AL U13/AL, Setia Alam, 40170 Shah Alam, Selangor", phone: "011-3150 3493" },
  { name: "Putrajaya", address: "10A, Pusat Komersil Nadi, 15, Jalan Pahang, Presint Diplomatik, 62050 Putrajaya", phone: "010-298 9478" },
  { name: "Kota Damansara", address: "69-2, Jalan PJU 5/20 The Strand, Kota Damansara, 47810 Petaling Jaya, Selangor", phone: "010-882 0274" },
  { name: "Cyberjaya", address: "FR-04-08, Tamarind Square, Persiaran Multimedia, Cyber 10, 63000 Cyberjaya, Selangor", phone: "010-278 4833" },
  { name: "Sri Petaling", address: "16-3, Jalan Radin Tengah, Bandar Baru Sri Petaling, 57000 Kuala Lumpur", phone: "010-989 8351" },
  { name: "Denai Alam", address: "J U16/J, Seksyen U16, 27-3, Jln Elektron U16/E, Denai Alam, 40160 Shah Alam, Selangor", phone: "016-285 2379" },
  { name: "Ampang", address: "C10-3, Jalan Ampang Utama 1/1, Off Jln Ampang, Ampang Utama, 68000 Ampang, Selangor", phone: "016-234 8127" },
  { name: "Klang", address: "113-1, Jalan Mahogani 5/KS7, Bandar Botanic, 41200 Klang, Selangor", phone: "010-286 7833" },
  { name: "Danau Kota", address: "D-03-03, StarParc Point, Taman Danau Ibu Kota, 53100 Kuala Lumpur", phone: "011-1636 0883" },
  { name: "Bandar Baru Bangi", address: "6-31, 03, Jln Medan Pusat Bandar 8A, Seksyen 9, 43650 Bandar Baru Bangi, Selangor", phone: "016-286 0883" },
  { name: "Shah Alam", address: "No. 6-3, Jalan Tengku Ampuan Zabedah D 9/D, 40100 Shah Alam, Selangor", phone: "010-295 8351" },
  { name: "Bandar Tun Hussein Onn", address: "No 19C (Tingkat 2), Jalan Suarasa 8/5, Bandar Tun Hussein Onn, 43200 Cheras", phone: "010-279 8351" },
  { name: "Eco Grandeur", address: "1/3D, Eco Grandeur, 42300 Bandar Puncak Alam, Selangor", phone: "016-417 8351" },
  { name: "Bandar Seri Putra", address: "No.43-2, Jalan Seri Putra 1/10, Bandar Seri Putra, 43000 Kajang, Selangor", phone: "011-1605 8351" },
  { name: "Bandar Rimbayu", address: "5-1, Jalan Aman Sinaria 2, Bandar Tropicana Aman, 42500 Telok Panglima Garang, Selangor", phone: "011-1639 8351" },
  { name: "Taman Sri Gombak", address: "90-1, Jalan Prima SG 3, Prima Seri Gombak, 68100 Batu Caves, Selangor", phone: "016-969 8351" },
  { name: "Kota Warisan", address: "Jln Warisan Sentral 1, Kota Warisan, 43900 Sepang, Selangor", phone: "011-3143 8351" },
  { name: "Kajang TTDI Grove", address: "Jalan TTDI Grove 1/1, 43000 Kajang, Selangor", phone: "011-1679 8351" },
  { name: "Online (Zoom)", address: "Platform: Zoom — for students anywhere in Malaysia and beyond", phone: "010-213 8351" },
];

export default function Branches() {
  return (
    <>
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">Our Branches</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Find an Ebright branch near you
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {branches.length} locations across Malaysia, plus online classes via Zoom.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <article
                key={b.name}
                className="flex flex-col rounded-2xl bg-[var(--cream)] p-6 ring-1 ring-black/5"
              >
                <h2 className="text-lg font-semibold text-[var(--foreground)]">{b.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-[var(--ink-soft)]">{b.address}</p>
                <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3 text-sm">
                  <a
                    href={`tel:${b.phone.replace(/\s/g, "")}`}
                    className="font-semibold text-[var(--brand)] hover:underline"
                  >
                    {b.phone}
                  </a>
                  <a
                    href={`https://wa.me/6${b.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-semibold text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
