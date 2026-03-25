// ─────────────────────────────────────────────
// Category Types
// ─────────────────────────────────────────────

/**
 * All supported engineering discipline identifiers.
 * To add a new category, extend this union AND add an entry to
 * src/data/categories.ts — no other changes required.
 */
export type CategoryId =
  | 'ai'
  | 'backend'
  | 'frontend'
  | 'fullstack'
  | 'devops'
  | 'mobile'
  | 'security'
  | 'data-science'
  | 'systems'
  | 'cloud'
  | 'open-source';

/** Full category definition, including display metadata. */
export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  /** Text / icon color (hex) */
  color: string;
  /** Badge background color (semi-transparent rgba) */
  bgColor: string;
  /** Badge border color (semi-transparent rgba) */
  borderColor: string;
  /** Emoji icon for the category */
  icon: string;
}

// ─────────────────────────────────────────────
// Profile Types
// ─────────────────────────────────────────────

/** A single curated GitHub engineer profile. */
export interface GitHubProfile {
  /** Unique, URL-safe identifier (usually the GitHub username) */
  id: string;
  name: string;
  username: string;
  bio: string;
  location?: string;
  company?: string;
  /** One or more engineering categories this profile belongs to */
  categories: CategoryId[];
  /** Technology / skill keywords for search and display */
  tags: string[];
  /** Approximate follower count (updated manually) */
  followers: number;
  /** Approximate public repository count */
  repos: number;
  githubUrl: string;
  websiteUrl?: string;
  twitterUsername?: string;
  /** Whether this profile is shown in the "Featured" tier */
  featured: boolean;
  /** Whether this person is the maintainer of FEMOG (pinned + special badge) */
  maintainer?: boolean;
  joinedYear?: number;
}

// ─────────────────────────────────────────────
// Filter & Sort Types
// ─────────────────────────────────────────────

export type SortOption = 'featured' | 'followers' | 'repos' | 'name';

export interface FilterState {
  search: string;
  categories: CategoryId[];
  sort: SortOption;
}
