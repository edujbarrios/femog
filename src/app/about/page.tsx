import type { Metadata } from 'next';
import { Github, BookOpen, Code2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — FEMOG',
  description:
    'Learn about FEMOG — the curated dark-mode directory of engineering masters on GitHub.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-14">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            About FEMOG
          </h1>
          <p className="mt-3 text-lg text-white/50">
            Find Engineering Masters on GitHub
          </p>
        </div>

        {/* What is FEMOG */}
        <section>
          <h2 className="mb-4 flex items-center gap-2.5 text-xl font-semibold text-white">
            <BookOpen size={20} className="text-indigo-400" />
            What is FEMOG?
          </h2>
          <div className="space-y-3 text-[15px] leading-relaxed text-white/55">
            <p>
              FEMOG is a curated directory of exceptional software engineers,
              AI researchers, open source contributors, and technical leaders
              on GitHub. It provides a structured, filterable way to discover
              talented developers across every major engineering discipline.
            </p>
            <p>
              Whether you're looking for AI researchers pushing the frontiers
              of machine learning, systems programmers building the
              infrastructure of modern computing, or frontend engineers
              redefining user experience — FEMOG helps you find them and
              decide who to follow next.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="mb-4 flex items-center gap-2.5 text-xl font-semibold text-white">
            <Code2 size={20} className="text-purple-400" />
            Design Philosophy
          </h2>
          <ul className="space-y-2 text-[15px] leading-relaxed text-white/55">
            {[
              'Dark mode first — built the way developers like their tools.',
              'Fully parameterized — adding a profile or category requires changing only one data file.',
              'No API calls, no rate limits — all data is curated and static, ensuring zero-latency loads.',
              'Inspired by Remote In Tech: clean card-based layout, category filtering, instant search.',
              'Open source — contributions are welcome via pull request.',
            ].map((point) => (
              <li key={point} className="flex gap-2.5">
                <span className="mt-1 shrink-0 text-indigo-400">•</span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Creator */}
        <section>
          <h2 className="mb-4 flex items-center gap-2.5 text-xl font-semibold text-white">
            <Users size={20} className="text-green-400" />
            The Creator
          </h2>
          <div className="rounded-2xl border border-white/8 bg-white/4 p-6">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github.com/edujbarrios.png?size=96"
                alt="Eduardo J. Barrios"
                className="h-16 w-16 rounded-full ring-2 ring-indigo-500/25"
                width={64}
                height={64}
              />
              <div>
                <h3 className="font-semibold text-white">
                  Eduardo J. Barrios
                </h3>
                <p className="text-sm text-white/40">@edujbarrios</p>
                <a
                  href="https://github.com/edujbarrios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-indigo-400 transition hover:text-indigo-300"
                >
                  <Github size={14} />
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contributing */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Contributing
          </h2>
          <p className="text-[15px] leading-relaxed text-white/55">
            Want to suggest a profile or fix outdated data? Open an issue or
            pull request on the{' '}
            <a
              href="https://github.com/edujbarrios/femog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 transition hover:text-indigo-300"
            >
              GitHub repository
            </a>
            . See{' '}
            <a
              href="https://github.com/edujbarrios/femog/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 transition hover:text-indigo-300"
            >
              CONTRIBUTING.md
            </a>{' '}
            for detailed guidelines.
          </p>
        </section>
      </div>
    </main>
  );
}
