"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "./Logo";

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/eBrightKidsPublicSpeaking",
    icon: (
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5 3z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ebrightpublicspeaking",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ebrightpublicspeaking/",
    icon: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38c.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ebrightpublicspeaking",
    icon: (
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-.46-5.13v-3.13a5.7 5.7 0 1 0 6.13 5.68V8.99a7.31 7.31 0 0 0 4.28 1.37V7.27a4.28 4.28 0 0 1-3.21-1.45z" />
    ),
  },
];

// The marketing trial-class landing page has no footer.
const NO_FOOTER_ROUTES = ["/trial-class", "/trial-class/", "/thankyou", "/thankyou/"];

export default function Footer() {
  const pathname = usePathname();
  if (NO_FOOTER_ROUTES.includes(pathname)) return null;

  return (
    <footer id="site-footer" className="bg-[var(--brand)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo href={null} white width={150} height={50} className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/80">
            Empowering kids aged 7&ndash;17 across Malaysia to speak with spark and lead with heart.
            15,000+ confident young speakers and counting.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wider">Programmes</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/programmes/weekly-classes" className="text-white/80 hover:text-white">Weekly Classes</Link></li>
            <li><Link href="/programmes/online-classes" className="text-white/80 hover:text-white">Online Classes</Link></li>
            <li><Link href="/programmes/trinity-college-london" className="text-white/80 hover:text-white">Trinity College London</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wider">Information</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/our-branches" className="text-white/80 hover:text-white">Our Branches</Link></li>
            <li><Link href="/testimonial" className="text-white/80 hover:text-white">Testimonial</Link></li>
            <li><Link href="/faq" className="text-white/80 hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-wider">Get In Touch</h4>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <div>
              WhatsApp:{" "}
              <a href="https://wa.me/60169698351" className="hover:text-white">016-969 8351</a>
            </div>
            <div>
              Email: <a href="mailto:sales@ebright.my" className="hover:text-white">sales@ebright.my</a>
            </div>
          </div>
          <Link
            href="/trial-class"
            className="mt-5 inline-flex rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-[var(--foreground)] transition hover:brightness-95"
          >
            Join Trial Class
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-white/70 sm:flex-row sm:items-center">
          <p>Copyright &copy; {new Date().getFullYear()} Ebright. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
