"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { branches } from "../data/branches";

export default function FindAClass() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return branches;
    return branches.filter(
      (b) => b.name.toLowerCase().includes(q) || b.area.toLowerCase().includes(q) || b.address.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find an Ebright Class <span className="text-[var(--brand)]">Near You</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            With physical locations across Klang Valley and structured virtual classrooms on Zoom,
            premium training is always within reach.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl ring-1 ring-black/5 lg:grid-cols-2">
          <div className="bg-white p-5">
            <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2">
              <SearchIcon className="h-4 w-4 text-[var(--ink-soft)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find location"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--ink-soft)]"
              />
            </div>
            <ul className="mt-4 max-h-[360px] space-y-3 overflow-y-auto pr-1">
              {filtered.map((b, i) => (
                <li key={i} className="rounded-xl border border-black/5 p-4 transition hover:border-[var(--brand)]/30 hover:bg-[var(--cream)]/40">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold">{b.name}</h3>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-[var(--brand)]">{b.area}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">{b.address}</p>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="rounded-xl border border-black/5 p-4 text-sm text-[var(--ink-soft)]">
                  No branches match &ldquo;{query}&rdquo;. Try another area.
                </li>
              )}
            </ul>
            <Link
              href="/our-branches"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            >
              View all branches
            </Link>
          </div>
          <div className="relative min-h-[320px]">
            <Image src="/home/map.png" alt="Map of Ebright branches" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
