import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  totalCount: number;
}

export function HeroSection({ totalCount }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-teal-950/50 via-[#0e1a19] to-emerald-950/30 p-8 sm:p-12">
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-600/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Label chip */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-3.5 py-1 text-xs font-medium text-teal-300">
          <Sparkles size={12} aria-hidden="true" />
          Discover exceptional engineers
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Find Engineering{' '}
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Masters
          </span>{' '}
          on GitHub
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
          A curated directory of{' '}
          <span className="font-semibold text-white/75">{totalCount} exceptional engineers</span>{' '}
          across AI, frontend, backend, DevOps, and more. Find your next
          inspiration, role model, or open-source hero.
        </p>

        {/* Category quick-glimpse */}
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-white/30">
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
                <span className="text-white/15" aria-hidden="true">
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
