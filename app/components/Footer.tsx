import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo href={null} width={150} height={50} className="h-10 w-auto" />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Public speaking classes that help kids find their voice. Trinity College London
            accredited — across 23 branches in Malaysia and online via Zoom.
          </p>
          <address className="mt-6 not-italic text-sm leading-6 text-white/80">
            <strong className="font-semibold text-white">Headquarters</strong>
            <br />
            No. 21-2, Jalan USJ 10/1D
            <br />
            Taipan Business Centre
            <br />
            47620 Subang Jaya, Selangor D.E
            <br />
            Malaysia
          </address>
          <div className="mt-4 space-y-1 text-sm text-white/80">
            <div>
              <span className="text-white/50">Phone: </span>
              <a href="tel:+60169698351" className="hover:text-white">016-9698351</a>
            </div>
            <div>
              <span className="text-white/50">Email: </span>
              <a href="mailto:sales@ebright.my" className="hover:text-white">sales@ebright.my</a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/our-story" className="text-white/80 hover:text-white">Our Story</Link></li>
            <li><Link href="/our-branches" className="text-white/80 hover:text-white">Our Branches</Link></li>
            <li><Link href="/trial-class" className="text-white/80 hover:text-white">Trial Class</Link></li>
            <li><Link href="/programmes/weekly-classes" className="text-white/80 hover:text-white">Programmes</Link></li>
            <li><Link href="/testimonial" className="text-white/80 hover:text-white">Testimonials</Link></li>
            <li><Link href="/media-exposure" className="text-white/80 hover:text-white">Media Exposure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">More</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/franchising-opportunity" className="text-white/80 hover:text-white">Franchising</Link></li>
            <li><Link href="/join-the-team" className="text-white/80 hover:text-white">Join The Team</Link></li>
            <li><Link href="/faq" className="text-white/80 hover:text-white">FAQ</Link></li>
            <li><Link href="/contact-us" className="text-white/80 hover:text-white">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="text-white/80 hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ebright Sdn. Bhd. No: 202101030304 (1430604-A). All Rights Reserved.</p>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "WhatsApp", "YouTube", "TikTok"].map((s) => (
              <a key={s} href="#" className="hover:text-white">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
