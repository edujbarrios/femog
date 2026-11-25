import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/assets/logo.svg"
              alt=""
              width={48}
              height={48}
              unoptimized
              className="drop-shadow-[0_0_8px_rgba(45,212,191,0.35)] transition group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.55)]"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="text-[15px] font-bold text-ink tracking-tight">
              FEMOG
            </span>
            <span className="ml-2 hidden text-xs text-ink-muted lg:inline">
              Find Engineering Masters on GitHub
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm text-ink-secondary transition hover:bg-raised hover:text-ink"
          >
            About
          </Link>
          <a
            href="https://github.com/edujbarrios"
            aria-label="View edujbarrios on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-lg border border-control-border px-3 py-1.5 text-sm text-accent transition hover:border-accent hover:text-accent-hover"
          >
            <Github size={15} aria-hidden="true" />
            <span className="hidden sm:inline font-medium">edujbarrios</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
