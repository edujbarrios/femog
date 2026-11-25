import Image from 'next/image';
import { ArrowUpRight, Wrench } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { getCategoryById } from '@/data/categories';
import type { GitHubProfile } from '@/types';

interface ProfileCardProps {
  profile: GitHubProfile;
  onSelect: (trigger: HTMLButtonElement) => void;
}

/** Compact, channel-style tile. All repository links live in the profile dialog. */
export function ProfileCard({ profile, onSelect }: ProfileCardProps) {
  const primaryCategory = getCategoryById(profile.categories[0]);
  const projectCount = profile.featuredProjects?.length ?? 0;
  const accent = primaryCategory?.color ?? '#7eead6';

  return (
    <button
      type="button"
      onClick={(event) => onSelect(event.currentTarget)}
      aria-haspopup="dialog"
      aria-label={`View profile of ${profile.name} (@${profile.username})`}
      className="group relative flex h-full min-h-[210px] w-full flex-col items-center overflow-hidden rounded-2xl border border-control-border bg-surface px-3 pb-4 pt-5 text-center transition-colors hover:border-accent hover:bg-raised focus-visible:outline-offset-4 sm:px-4"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${accent}33, ${accent}, ${accent}33)` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-60"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}24, transparent 72%)` }}
      />
      <ArrowUpRight
        size={18}
        className="absolute right-3 top-3 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
      <div className="relative mt-1">
        <Image
          src={`https://github.com/${profile.username}.png?size=192`}
          alt=""
          width={80}
          height={80}
          unoptimized
          className="h-20 w-20 rounded-full object-cover ring-2 ring-control-border ring-offset-4 ring-offset-surface transition-transform group-hover:scale-105"
        />
        {profile.maintainer && (
          <span
            title="FEMOG maintainer"
            className="absolute -bottom-1 -right-1 rounded-full border border-control-border bg-raised p-1.5 text-accent"
          >
            <Wrench size={12} aria-hidden="true" />
            <span className="sr-only">Maintainer</span>
          </span>
        )}
      </div>
      <h3 className="mt-4 w-full break-words text-sm font-semibold leading-snug text-ink sm:text-base">
        {profile.name}
      </h3>
      <p className="mt-1 w-full break-all text-xs text-accent sm:text-sm">
        @{profile.username}
      </p>
      <div className="mt-3 flex w-full flex-wrap items-center justify-center gap-1.5">
        {profile.categories.slice(0, 1).map((id) => {
          const category = getCategoryById(id);
          return category ? <CategoryBadge key={id} category={category} size="sm" /> : null;
        })}
        {profile.categories.length > 1 && (
          <span className="rounded-full bg-raised px-2 py-0.5 text-xs font-medium text-ink-secondary">
            +{profile.categories.length - 1}
          </span>
        )}
      </div>
      <span className="mt-auto pt-3 text-xs text-ink-muted">
        {projectCount > 0
          ? `${projectCount} featured ${projectCount === 1 ? 'project' : 'projects'}`
          : 'View profile'}
      </span>
    </button>
  );
}
