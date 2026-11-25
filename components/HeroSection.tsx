import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  totalCount: number;
}

export function HeroSection({ totalCount }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#16332f] via-[#142229] to-[#102428] p-8 sm:p-12">
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Label chip */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-control-border bg-[#173b35] px-3.5 py-1 text-xs font-medium text-accent">
          <Sparkles size={12} aria-hidden="true" />
          Discover exceptional engineers
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Find Engineering{' '}
          <span className="bg-gradient-to-r from-teal-200 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
            Masters
          </span>{' '}
          on GitHub
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
          Discover{' '}
          <span className="font-semibold text-ink">{totalCount} curated {totalCount === 1 ? 'engineer' : 'engineers'}</span>{' '}
          across AI, frontend, backend, DevOps, and more. Find your next
          inspiration, role model, or open-source hero.
        </p>

        {/* Category quick-glimpse */}
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink-muted">
          {[
            '🤖 AI Researchers',
            '⚙️ Backend Engineers',
            '🎨 Frontend Developers',
            '🚀 DevOps Masters',
            '💻 Systems Programmers',
            '🌐 Open Source Heroes',
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-3">
              {item}
              {i < arr.length - 1 && (
                <span className="text-ink-muted" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
