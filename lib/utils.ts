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
 * Apply search, category filters, and sort to a profiles array.
 * Returns a new array; does not mutate the input.
 */
export function filterProfiles(
  profiles: GitHubProfile[],
  filters: FilterState,
): GitHubProfile[] {
  let result = [...profiles];

  // Category filter (union — any matching category passes)
  if (filters.categories.length > 0) {
    result = result.filter((p) =>
      filters.categories.some((cat) => p.categories.includes(cat)),
    );
  }

  // Full-text search across multiple fields
  if (filters.search.trim()) {
    const q = filters.search.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.username.toLowerCase().includes(q) ||
        p.bio.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.company?.toLowerCase().includes(q) ?? false) ||
        (p.location?.toLowerCase().includes(q) ?? false),
    );
  }

  // Sort — maintainer is always pinned first
  result.sort((a, b) => {
    if (a.id === 'edujbarrios') return -1;
    if (b.id === 'edujbarrios') return 1;
    switch (filters.sort) {
      case 'followers':
        return b.followers - a.followers;
      case 'repos':
        return b.repos - a.repos;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'featured':
      default:
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.followers - a.followers;
    }
  });

  return result;
}
