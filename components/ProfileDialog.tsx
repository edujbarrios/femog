'use client';

import Image from 'next/image';
import { useEffect, useId, useRef } from 'react';
import { Building2, ExternalLink, Github, Globe, MapPin, Wrench, X } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { getCategoryById } from '@/data/categories';
import type { GitHubProfile } from '@/types';

interface ProfileDialogProps {
  profile: GitHubProfile;
  onClose: () => void;
}

/** Native modal provides focus containment, Escape handling and an inert background. */
export function ProfileDialog({ profile, onClose }: ProfileDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const featuredProjects = profile.featuredProjects?.slice(0, 3) ?? [];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className="m-auto max-h-[calc(100dvh_-_2rem)] w-[calc(100%_-_2rem)] max-w-xl overflow-y-auto rounded-3xl border border-control-border bg-surface p-0 text-ink shadow-2xl backdrop:bg-[#02080b]/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-surface px-5 py-3 sm:px-7">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Engineer profile</span>
          <button
            ref={closeRef}
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-control-border bg-raised text-ink-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-6 px-5 py-6 sm:px-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src={`https://github.com/${profile.username}.png?size=192`}
              alt=""
              width={88}
              height={88}
              unoptimized
              className="h-[88px] w-[88px] shrink-0 rounded-full object-cover ring-2 ring-control-border ring-offset-4 ring-offset-surface"
            />
            <div className="min-w-0">
              <h2 id={titleId} className="break-words text-2xl font-bold tracking-tight text-ink">
                {profile.name}
              </h2>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block break-all text-sm font-medium text-accent hover:text-accent-hover hover:underline"
              >
                @{profile.username}
                <span className="sr-only"> (opens on GitHub in a new tab)</span>
              </a>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink-muted">
                {profile.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" /> {profile.location}
                  </span>
                )}
                {profile.company && (
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 size={14} aria-hidden="true" /> {profile.company}
                  </span>
                )}
                {profile.maintainer && (
                  <span className="inline-flex items-center gap-1.5 text-accent">
                    <Wrench size={14} aria-hidden="true" /> Maintainer
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-ink-secondary sm:text-base">{profile.bio}</p>
            <div className="flex flex-wrap gap-1.5">
              {profile.categories.map((id) => {
                const category = getCategoryById(id);
                return category ? <CategoryBadge key={id} category={category} size="sm" /> : null;
              })}
            </div>
            {profile.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {profile.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-raised px-2 py-1 text-xs text-ink-secondary">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {featuredProjects.length > 0 && (
            <section aria-label="Featured projects" className="border-t border-line pt-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
                <Github size={16} className="text-accent" aria-hidden="true" />
                Featured projects
              </h3>
              <ul className="space-y-2">
                {featuredProjects.map((project) => (
                  <li key={project.githubUrl}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-3 rounded-xl border border-control-border bg-raised px-4 py-3 text-sm transition-colors hover:border-accent hover:bg-surface-hover"
                    >
                      <span className="min-w-0 break-words">
                        <span className="block font-semibold text-accent">{project.name}</span>
                        {project.description?.trim() && (
                          <span className="mt-1 block leading-relaxed text-ink-secondary">
                            {project.description.trim()}
                          </span>
                        )}
                        <span className="sr-only"> (opens on GitHub in a new tab)</span>
                      </span>
                      <ExternalLink size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="flex flex-wrap items-center gap-3 border-t border-line pt-5">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-accent-solid px-4 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
            >
              <Github size={18} aria-hidden="true" />
              Follow on GitHub
              <ExternalLink size={14} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {profile.websiteUrl && (
              <a
                href={profile.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-control-border bg-raised px-4 py-3 text-sm font-medium text-ink-secondary hover:border-accent hover:text-accent"
              >
                <Globe size={16} aria-hidden="true" />
                Website
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
          <p className="text-center text-xs leading-relaxed text-ink-muted">
            Follow opens the engineer's GitHub profile, where you can follow them directly.
          </p>
        </div>
      </div>
    </dialog>
  );
}
