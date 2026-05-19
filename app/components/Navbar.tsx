"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const nav = [
  { label: "Home", href: "/" },
  {
    label: "Our Story",
    href: "/our-story",
    children: [
      { label: "About Ebright", href: "/our-story" },
      { label: "Our Team", href: "/our-team" },
      { label: "Hall Of Excellence", href: "/hall-of-excellence" },
      { label: "Annual Showcase 2023", href: "/annual-showcase-2023" },
      { label: "Annual Showcase 2024", href: "/annual-showcase-2024" },
      { label: "Annual Showcase 2025", href: "/annual-showcase-2025" },
    ],
  },
  { label: "Our Branches", href: "/our-branches" },
  { label: "Trial Class", href: "/trial-class" },
  {
    label: "Programmes",
    href: "/programmes/weekly-classes",
    children: [
      { label: "Weekly Classes", href: "/programmes/weekly-classes" },
      { label: "Online Classes", href: "/programmes/online-classes" },
      { label: "Trinity College London", href: "/programmes/trinity-college-london" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Media Exposure", href: "/media-exposure" },
  { label: "Testimonial", href: "/testimonial" },
  { label: "Contact Us", href: "/contact-us" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Franchising Opportunity", href: "/franchising-opportunity" },
      { label: "Join The Team", href: "/join-the-team" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Logo width={130} height={44} className="h-9 w-auto" />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              {item.children ? (
                <>
                  <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-[var(--ink-soft)] transition hover:text-[var(--foreground)]">
                    {item.label}
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 8L2 4h8z" />
                    </svg>
                  </button>
                  <div className="invisible absolute left-0 top-full z-10 min-w-[220px] translate-y-1 rounded-2xl border border-black/5 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[var(--ink-soft)] transition hover:bg-[var(--cream)] hover:text-[var(--foreground)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="inline-block rounded-full px-3 py-2 text-sm font-medium text-[var(--ink-soft)] transition hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/trial-class"
          className="hidden rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)] lg:inline-flex"
        >
          Book a Trial
        </Link>

        <button
          aria-label="Toggle menu"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-black/5 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)]"
                  >
                    {item.label}
                    <span className="text-xs">{openSub === item.label ? "−" : "+"}</span>
                  </button>
                  {openSub === item.label && (
                    <div className="ml-3 border-l border-black/10 pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-[var(--ink-soft)]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/trial-class"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-full bg-[var(--brand)] px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Book a Trial
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
