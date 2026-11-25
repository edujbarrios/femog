import Image from 'next/image';
import { useId } from 'react';
import { ArrowUpRight, Wrench } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { getCategoryById } from '@/data/categories';
import type { GitHubProfile } from '@/types';

interface ProfileCardProps {
  profile: GitHubProfile;
  onSelect: (trigger: HTMLButtonElement) => void;
}

/** Selectable profile summary; projects and follow links live in the dialog. */
export function ProfileCard({ profile, onSelect }: ProfileCardProps) {
  const bioId = useId();
  const primaryCategory = getCategoryById(profile.categories[0]);
  const projectCount = profile.featuredProjects?.length ?? 0;
  const accent = primaryCategory?.color ?? '#7eead6';

  return (
    <button
      type="button"
      onClick={(event) => onSelect(event.currentTarget)}
      aria-haspopup="dialog"
      aria-label={`View profile of ${profile.name} (@${profile.username})`}
      aria-describedby={bioId}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-control-border bg-surface p-5 text-left shadow-sm transition-colors hover:border-accent hover:bg-raised focus-visible:outline-offset-4"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}22)` }}
      />
      <span className="flex w-full items-start gap-3">
        <span className="relative shrink-0">
          <Image
            src={`https://github.com/${profile.username}.png?size=192`}
            alt=""
            width={56}
            height={56}
            unoptimized
            className="h-14 w-14 rounded-full object-cover ring-2 ring-control-border ring-offset-2 ring-offset-surface"
          />
          {profile.maintainer && (
            <span
              title="FEMOG maintainer"
              className="absolute -bottom-1 -right-1 rounded-full border border-control-border bg-raised p-1 text-accent"
            >
              <Wrench size={11} aria-hidden="true" />
              <span className="sr-only">Maintainer</span>
            </span>
          )}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block break-words text-lg font-semibold leading-snug text-ink">
            {profile.name}
          </span>
          <span className="mt-1 block break-all text-sm font-medium text-accent">
            @{profile.username}
          </span>
        </span>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>

      <span id={bioId} className="mt-4 block w-full break-words text-[15px] leading-7 text-ink-secondary">
        {profile.bio}
      </span>

      <span className="mt-4 flex w-full flex-wrap items-center gap-1.5">
        {profile.categories.slice(0, 2).map((id) => {
          const category = getCategoryById(id);
          return category ? <CategoryBadge key={id} category={category} size="sm" /> : null;
        })}
        {profile.categories.length > 2 && (
          <span className="rounded-full bg-raised px-2 py-0.5 text-xs font-medium text-ink-secondary">
            +{profile.categories.length - 2}
          </span>
        )}
      </span>

      <span className="mt-auto block w-full pt-4">
        <span className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-sm">
          {projectCount > 0 && (
            <span className="text-ink-muted">
              {projectCount} featured {projectCount === 1 ? 'project' : 'projects'}
            </span>
          )}
          <span className="ml-auto inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-control-border bg-raised px-3 py-2 font-semibold text-accent group-hover:border-accent group-hover:bg-surface-hover">
            View profile
            <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </span>
      </span>
    </button>
  );
}
