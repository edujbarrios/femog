'use client';

import { useRef, useState } from 'react';
import { ProfileCard } from './ProfileCard';
import { ProfileDialog } from './ProfileDialog';
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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const selectedProfile = profiles.find((profile) => profile.id === selectedId);

  function closeProfile() {
    setSelectedId(null);
    // Restore focus to the original tile once the dialog is removed.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

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
    <section aria-label="Engineer directory">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-semibold tracking-tight text-ink">Explore engineers</h2>
        <p className="text-sm text-ink-muted">Select a profile to see their work.</p>
      </div>
      <ul className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {profiles.map((profile) => (
          <li key={profile.id} className="min-w-0">
            <ProfileCard
              profile={profile}
              onSelect={(trigger) => {
                triggerRef.current = trigger;
                setSelectedId(profile.id);
              }}
            />
          </li>
        ))}
      </ul>
      {selectedProfile && (
        <ProfileDialog key={selectedProfile.id} profile={selectedProfile} onClose={closeProfile} />
      )}
    </section>
  );
}
