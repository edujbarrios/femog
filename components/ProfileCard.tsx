import Image from 'next/image';
import {
  MapPin,
  Building2,
  ExternalLink,
  Github,
  Globe,
  Wrench,
} from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { getCategoryById } from '@/data/categories';
import type { GitHubProfile } from '@/types';

interface ProfileCardProps {
  profile: GitHubProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const primaryCategory = getCategoryById(profile.categories[0]);
  const featuredProjects = profile.featuredProjects?.slice(0, 3) ?? [];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-200 hover:border-control-border">
      {/* Top gradient accent based on primary category */}
      <div
        className="h-[3px] w-full shrink-0"
        style={{
          background: primaryCategory
            ? `linear-gradient(90deg, ${primaryCategory.color}70, ${primaryCategory.color}10)`
            : 'linear-gradient(90deg, #2dd4bf70, #2dd4bf10)',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-5">
        {/* Avatar + name row */}
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <Image
              src={`https://github.com/${profile.username}.png?size=96`}
              alt={`${profile.name}'s GitHub avatar`}
              width={52}
              height={52}
              className="rounded-full ring-2 ring-control-border ring-offset-2 ring-offset-surface"
              unoptimized
            />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="break-words font-semibold text-ink leading-tight">
              {profile.name}
            </h3>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 inline-block break-all text-sm text-accent transition hover:text-accent-hover hover:underline"
            >
              @{profile.username}
            </a>
            {profile.maintainer && (
              <div className="mt-1.5">
                <span className="inline-flex items-center gap-1 rounded-full border border-control-border bg-[#173b35] px-2 py-0.5 text-xs font-semibold text-accent">
                  <Wrench size={11} aria-hidden="true" />
                  Maintainer
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Meta: company + location */}
        <div className="mt-3 space-y-1">
          {profile.company && (
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <Building2 size={11} aria-hidden="true" />
              <span className="truncate">{profile.company}</span>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <MapPin size={11} aria-hidden="true" />
              <span className="truncate">{profile.location}</span>
            </div>
          )}
        </div>

        {/* Bio */}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-secondary">
          {profile.bio}
        </p>

        {/* Category badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {profile.categories.map((catId) => {
            const cat = getCategoryById(catId);
            if (!cat) return null;
            return <CategoryBadge key={catId} category={cat} size="sm" />;
          })}
        </div>

        {/* Skill tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {profile.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-raised px-1.5 py-0.5 text-xs text-ink-secondary"
            >
              #{tag}
            </span>
          ))}
          {profile.tags.length > 4 && (
            <span className="rounded-md bg-raised px-1.5 py-0.5 text-xs text-ink-muted">
              +{profile.tags.length - 4}
            </span>
          )}
        </div>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Github size={12} aria-hidden="true" />
              Featured projects
            </h4>
            <ul className="space-y-1.5">
              {featuredProjects.map((project) => (
                <li key={project.githubUrl}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-2 rounded-lg border border-control-border bg-raised px-3 py-2.5 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-surface-hover hover:text-accent-hover"
                  >
                    <span className="min-w-0 break-words">
                      <span className="block">{project.name}</span>
                      {project.description?.trim() && (
                        <span className="mt-1 block text-xs font-normal leading-relaxed text-ink-secondary sm:text-sm">
                          {project.description.trim()}
                        </span>
                      )}
                      <span className="sr-only"> (opens on GitHub in a new tab)</span>
                    </span>
                    <ExternalLink size={12} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Divider */}
        <div className="mt-4 border-t border-line" />

        {/* CTA row */}
        <div className="mt-4 flex items-center justify-end">
          <div className="flex items-center gap-2">
            {profile.websiteUrl && (
              <a
                href={profile.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal website"
                className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-control-border bg-raised p-2 text-accent transition hover:border-accent hover:bg-surface-hover hover:text-accent-hover"
              >
                <Globe size={13} aria-hidden="true" />
              </a>
            )}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-accent-solid px-4 py-2 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
            >
              <Github size={15} aria-hidden="true" />
              Follow
              <ExternalLink size={10} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
