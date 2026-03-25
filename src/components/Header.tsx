import Link from 'next/link';
import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0a0e1a]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-base shadow-lg shadow-teal-500/25 transition group-hover:shadow-teal-500/40">
            ⭐
          </div>
          <div className="leading-tight">
            <span className="text-[15px] font-bold text-white tracking-tight">
              FEMOG
            </span>
            <span className="ml-2 hidden text-xs text-white/35 sm:inline">
              Find Engineering Masters on GitHub
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm text-white/50 transition hover:bg-white/8 hover:text-white/90"
          >
            About
          </Link>
          <a
            href="https://github.com/edujbarrios"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
          >
            <Github size={15} />
            <span className="hidden sm:inline font-medium">edujbarrios</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
