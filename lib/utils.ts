import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { GitHubProfile, FilterState } from '@/types';
import { getCategoryById } from '@/data/categories';

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
  const query = filters.search.trim().toLowerCase();
  const hasCategories = filters.categories.length > 0;

  // The landing page is a maintainer showcase, never the full directory.
  let result = !query && !hasCategories
    ? profiles.filter((profile) => profile.maintainer === true)
    : [...profiles];

  // OR within selected categories; AND between category and text filters.
  if (hasCategories) {
    result = result.filter((profile) =>
      filters.categories.some((category) => profile.categories.includes(category)),
    );
  }

  if (query) {
    const terms = query.split(/\s+/);
    result = result.filter((profile) => {
      const searchableText = [
        profile.name, profile.username, profile.bio,
        profile.company ?? '', profile.location ?? '',
        ...profile.tags,
        ...profile.categories.flatMap((id) => [id, getCategoryById(id)?.label ?? '']),
        ...(profile.featuredProjects ?? []).flatMap((project) => [
          project.name, project.description ?? '',
        ]),
      ].join(' ').toLowerCase();
      return terms.every((term) => searchableText.includes(term));
    });
  }

  return result.sort((a, b) =>
    Number(Boolean(b.maintainer)) - Number(Boolean(a.maintainer))
      || a.name.localeCompare(b.name),
  );
}
