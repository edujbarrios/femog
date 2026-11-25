// ─────────────────────────────────────────────
// Category Types
// ─────────────────────────────────────────────

/**
 * All supported engineering discipline identifiers.
 * To add a new category, extend this union AND add an entry to
 * data/categories.ts — no other changes required.
 */
export type CategoryId =
  | 'ai'
  | 'mcp'
  | 'ai-skills'
  | 'ai-plugins'
  | 'ai-agents'
  | 'llm'
  | 'rag'
  | 'ai-tooling'
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

/** A curated project that links directly to a GitHub repository. */
export interface FeaturedProject {
  name: string;
  githubUrl: string;
  /** Optional one-sentence summary of what the project does. */
  description?: string;
}

/** Zero to three projects, ordered by the curator's preference. */
export type FeaturedProjects =
  | []
  | [FeaturedProject]
  | [FeaturedProject, FeaturedProject]
  | [FeaturedProject, FeaturedProject, FeaturedProject];

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
  /** Technology / skill keywords for display */
  tags: string[];
  githubUrl: string;
  websiteUrl?: string;
  twitterUsername?: string;
  /** Optional public repositories featured on the profile card (maximum three). */
  featuredProjects?: FeaturedProjects;
  /** Whether this person is the maintainer of FEMOG (shown on the default homepage + special badge) */
  maintainer?: boolean;
}

// ─────────────────────────────────────────────
// Filter & Sort Types
// ─────────────────────────────────────────────

export interface FilterState {
  categories: CategoryId[];
}
