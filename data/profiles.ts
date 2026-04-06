import type { GitHubProfile } from '@/types';

/**
 * Curated list of exceptional engineers on GitHub.
 *
 * HOW TO ADD A NEW PROFILE:
 * ------------------------------------------------------------------
 * Each profile must follow the `GitHubProfile` interface.
 * Below is a detailed explanation of every field:
 *
 * REQUIRED FIELDS:
 * - id: string
 *   Unique identifier for the profile (usually same as username).
 *   Example: 'gaearon'
 *
 * - name: string
 *   Full name of the person.
 *   Example: 'Dan Abramov'
 *
 * - username: string
 *   GitHub username (without URL).
 *   Example: 'gaearon'
 *
 * - bio: string
 *   Short description (1–2 sentences max).
 *   Should explain what they are known for.
 *
 * - location: string
 *   Where they are based.
 *   Example: 'San Francisco, CA'
 *
 * - categories: string[]
 *   One or more categories describing their expertise.
 *   Allowed values (recommended):
 *     'ai', 'frontend', 'backend', 'fullstack',
 *     'devops', 'systems', 'data-science', 'security', 'open-source'
 *
 * - tags: string[]
 *   Specific technologies or topics.
 *   Example: ['react', 'typescript', 'nodejs']
 *
 * - githubUrl: string
 *   Full GitHub profile URL.
 *   Example: 'https://github.com/username'
 *
 * OPTIONAL FIELDS:
 * - company?: string
 *   Current company or organization.
 *
 * - websiteUrl?: string
 *   Personal website or blog.
 *
 * - twitterUsername?: string
 *   Twitter/X username (without @).
 *
 * - maintainer?: boolean
 *   Set to true ONLY for project maintainers.
 *
 * ------------------------------------------------------------------
 * IMPORTANT RULES:
 * - Keep bios concise and factual.
 * - Prefer well-known or high-impact engineers.
 * - Avoid duplicates.
 * - Keep tags relevant and lowercase.
 * ------------------------------------------------------------------
 */
export const PROFILES: GitHubProfile[] = [
  {
    id: 'edujbarrios',
    name: 'Eduardo J. Barrios',
    username: 'edujbarrios',
    bio: 'AI engineer and open source builder. Creator of FEMOG. Building at the intersection of LLMs, full-stack AI systems, and developer tooling.',
    location: 'Spain',
    categories: ['ai', 'fullstack', 'open-source'],
    tags: ['LLM', 'next.js', 'python', 'typescript', 'open-source'],
    githubUrl: 'https://github.com/edujbarrios',
    twitterUsername: 'edujbarrios',
    maintainer: true,
  },
];

export const getProfilesByCategory = (categoryId: string): GitHubProfile[] =>
  PROFILES.filter((p) => p.categories.includes(categoryId as never));

