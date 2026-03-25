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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 py-24 text-center">
        <Users size={36} className="mb-4 text-white/15" aria-hidden="true" />
        <h3 className="text-base font-semibold text-white/50">
          No profiles match your filters
        </h3>
        <p className="mt-2 text-sm text-white/25">
          Try a different search term or fewer category filters.
        </p>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="mt-6 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/50 transition hover:border-white/30 hover:text-white"
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
