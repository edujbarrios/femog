import type { Category, CategoryId } from '@/types';

/**
 * All engineering categories supported by FEMOG.
 *
 * To add a new category:
 *  1. Add the ID to the `CategoryId` union in src/types/index.ts
 *  2. Add the full definition below
 *  3. Tag any relevant profiles in src/data/profiles.ts
 */
export const CATEGORIES: Category[] = [
  {
    id: 'ai',
    label: 'AI / ML',
    description: 'Artificial Intelligence & Machine Learning researchers and engineers',
    color: '#c4b5fd',
    bgColor: 'rgba(139, 92, 246, 0.15)',
    borderColor: 'rgba(139, 92, 246, 0.35)',
    icon: '🤖',
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Server-side, API design, and database engineers',
    color: '#6ee7b7',
    bgColor: 'rgba(52, 211, 153, 0.12)',
    borderColor: 'rgba(52, 211, 153, 0.35)',
    icon: '⚙️',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'UI, UX, and browser-side developers',
    color: '#93c5fd',
    bgColor: 'rgba(96, 165, 250, 0.12)',
    borderColor: 'rgba(96, 165, 250, 0.35)',
    icon: '🎨',
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    description: 'Engineers comfortable across the entire application stack',
    color: '#fcd34d',
    bgColor: 'rgba(251, 191, 36, 0.12)',
    borderColor: 'rgba(251, 191, 36, 0.35)',
    icon: '⚡',
  },
  {
    id: 'devops',
    label: 'DevOps / SRE',
    description: 'Infrastructure, CI/CD, and reliability engineers',
    color: '#fca5a5',
    bgColor: 'rgba(248, 113, 113, 0.12)',
    borderColor: 'rgba(248, 113, 113, 0.35)',
    icon: '🚀',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    description: 'iOS, Android, and cross-platform mobile developers',
    color: '#86efac',
    bgColor: 'rgba(74, 222, 128, 0.12)',
    borderColor: 'rgba(74, 222, 128, 0.35)',
    icon: '📱',
  },
  {
    id: 'security',
    label: 'Security',
    description: 'Cybersecurity, AppSec, and offensive security engineers',
    color: '#fdba74',
    bgColor: 'rgba(251, 146, 60, 0.12)',
    borderColor: 'rgba(251, 146, 60, 0.35)',
    icon: '🔒',
  },
  {
    id: 'data-science',
    label: 'Data Science',
    description: 'Data scientists, analysts, and MLOps engineers',
    color: '#f0abfc',
    bgColor: 'rgba(217, 70, 239, 0.12)',
    borderColor: 'rgba(217, 70, 239, 0.35)',
    icon: '📊',
  },
  {
    id: 'systems',
    label: 'Systems',
    description: 'Systems programming, OS, and low-level engineers',
    color: '#bef264',
    bgColor: 'rgba(163, 230, 53, 0.12)',
    borderColor: 'rgba(163, 230, 53, 0.35)',
    icon: '💻',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    description: 'Cloud architecture, Kubernetes, and infrastructure specialists',
    color: '#67e8f9',
    bgColor: 'rgba(34, 211, 238, 0.12)',
    borderColor: 'rgba(34, 211, 238, 0.35)',
    icon: '☁️',
  },
  {
    id: 'open-source',
    label: 'Open Source',
    description: 'Prolific open-source contributors and maintainers',
    color: '#a5b4fc',
    bgColor: 'rgba(129, 140, 248, 0.12)',
    borderColor: 'rgba(129, 140, 248, 0.35)',
    icon: '🌐',
  },
];

/** Lookup a category by its ID. Returns undefined if not found. */
export const getCategoryById = (id: CategoryId): Category | undefined =>
  CATEGORIES.find((c) => c.id === id);
