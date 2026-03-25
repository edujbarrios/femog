import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/40 bg-[#080e0d]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/assets/logo.png"
              alt="FEMOG logo"
              width={48}
              height={48}
              style={{ width: '48px', height: '48px' }}
              className="drop-shadow-[0_0_8px_rgba(45,212,191,0.25)]"
              priority
            />
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
            className="rounded-md px-3 py-2 text-sm text-white/50 transition hover:bg-teal-900/30 hover:text-white/90"
          >
            About
          </Link>
          <a
            href="https://github.com/edujbarrios"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-lg border border-teal-700/40 px-3 py-1.5 text-sm text-teal-300/70 transition hover:border-teal-500/60 hover:text-teal-200"
          >
            <Github size={15} />
            <span className="hidden sm:inline font-medium">edujbarrios</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
