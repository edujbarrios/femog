import { Github, Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-teal-900/30 bg-[#060e0d]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="text-base">⭐</span>
              <span className="font-bold text-white">FEMOG</span>
            </div>
            <p className="mt-1 text-xs text-white/35">
              Find Engineering Masters on GitHub
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-5 text-sm text-white/40">
            <Link href="/" className="hover:text-white/70 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-white/70 transition">
              About
            </Link>
            <a
              href="https://github.com/edujbarrios/femog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              Source
            </a>
          </nav>

          {/* Attribution */}
          <p className="flex items-center gap-1.5 text-sm text-white/35">
            Made with{' '}
            <Heart size={12} className="text-rose-400" aria-hidden="true" />{' '}
            by{' '}
            <a
              href="https://github.com/edujbarrios"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/55 transition hover:text-white"
            >
              Eduardo J. Barrios
            </a>
          </p>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-white/20">
          Profile data is curated manually. Follower counts are approximate. Not affiliated with GitHub, Inc.
        </div>
      </div>
    </footer>
  );
}
