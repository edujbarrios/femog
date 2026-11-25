import { Github } from 'lucide-react';

interface HeroSectionProps {
  totalCount: number;
}

export function HeroSection({ totalCount }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#16332f] via-surface to-[#102428] px-6 py-8 sm:px-10 sm:py-10">
      <div
        className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Github size={16} aria-hidden="true" />
          FEMOG / Engineer directory
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Discover your next <span className="text-accent">inspiration.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary sm:text-base">
          Explore {totalCount} curated {totalCount === 1 ? 'engineer' : 'engineers'} on GitHub, discover their projects and find people worth following.
        </p>
        <p className="mt-2 text-sm text-ink-muted">Search by discipline or select a profile to learn more.</p>
      </div>
    </section>
  );
}
