import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <div className="flex h-6 w-6 items-center justify-center rounded-md">
                <Image
                  src="/assets/logo.svg"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                  className="object-contain drop-shadow-[0_0_5px_rgba(45,212,191,0.35)]"
                />
              </div>
              <span className="font-bold text-ink">FEMOG</span>
            </div>
            <p className="mt-1 text-xs text-ink-muted">
              Find Engineering Masters on GitHub
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-5 text-sm text-ink-muted">
            <Link href="/" className="hover:text-accent-hover transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent-hover transition">
              About
            </Link>
            <a
              href="https://github.com/edujbarrios/femog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-hover transition"
            >
              Source
            </a>
          </nav>

          {/* Attribution */}
          <p className="flex items-center gap-1.5 text-sm text-ink-muted">
            Made with{' '}
            <Heart size={12} className="text-rose-400" aria-hidden="true" />{' '}
            by{' '}
            <a
              href="https://github.com/edujbarrios"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-secondary transition hover:text-ink"
            >
              Eduardo J. Barrios
            </a>
          </p>
        </div>

        <div className="mt-8 border-t border-line pt-6 text-center text-xs text-ink-muted">
          Profile data is curated manually. Not affiliated with GitHub, Inc.
        </div>
      </div>
    </footer>
  );
}
