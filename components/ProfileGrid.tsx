'use client';

import { ProfileCard } from './ProfileCard';
import type { GitHubProfile } from '@/types';
import { Users } from 'lucide-react';

interface ProfileGridProps {
  profiles: GitHubProfile[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export function ProfileGrid({
  profiles,
  hasActiveFilters,
  onClearFilters,
}: ProfileGridProps) {
  if (profiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-control-border bg-surface px-4 py-16 text-center">
        <Users size={36} className="mb-4 text-ink-muted" aria-hidden="true" />
        <h3 className="text-base font-semibold text-ink-secondary">
          No profiles match your filters
        </h3>
        <p className="mt-2 text-sm text-ink-muted">
          Try a different search term or fewer category filters.
        </p>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="mt-6 rounded-lg border border-control-border bg-raised px-4 py-2 text-sm text-accent transition hover:border-accent hover:text-accent-hover"
          >
            Clear all filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
