import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { GitHubProfile, FilterState } from '@/types';

/** Merge Tailwind classes without conflicts. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a large number into a human-readable abbreviation.
 * e.g. 1500 → "1.5K", 1200000 → "1.2M"
 */
export function formatCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
  return count.toString();
}

/**
 * Show maintainers by default, or profiles matching any selected category.
 * Returns a new array; does not mutate the input.
 */
export function filterProfiles(
  profiles: GitHubProfile[],
  filters: FilterState,
): GitHubProfile[] {
  const result = filters.categories.length === 0
    ? profiles.filter((profile) => profile.maintainer === true)
    : profiles.filter((profile) =>
        filters.categories.some((category) => profile.categories.includes(category)),
      );

  return result.sort((a, b) =>
    Number(Boolean(b.maintainer)) - Number(Boolean(a.maintainer))
      || a.name.localeCompare(b.name),
  );
}
