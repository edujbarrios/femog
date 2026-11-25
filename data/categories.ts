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
    color: '#99f6e4',
    bgColor: 'rgba(153, 246, 228, 0.12)',
    borderColor: 'rgba(153, 246, 228, 0.58)',
    icon: '🤖',
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Server-side, API design, and database engineers',
    color: '#a7f3d0',
    bgColor: 'rgba(167, 243, 208, 0.12)',
    borderColor: 'rgba(167, 243, 208, 0.58)',
    icon: '⚙️',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'UI, UX, and browser-side developers',
    color: '#a5f3fc',
    bgColor: 'rgba(165, 243, 252, 0.12)',
    borderColor: 'rgba(165, 243, 252, 0.58)',
    icon: '🎨',
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    description: 'Engineers comfortable across the entire application stack',
    color: '#d9f99d',
    bgColor: 'rgba(217, 249, 157, 0.12)',
    borderColor: 'rgba(217, 249, 157, 0.58)',
    icon: '⚡',
  },
  {
    id: 'devops',
    label: 'DevOps / SRE',
    description: 'Infrastructure, CI/CD, and reliability engineers',
    color: '#fed7aa',
    bgColor: 'rgba(254, 215, 170, 0.12)',
    borderColor: 'rgba(254, 215, 170, 0.58)',
    icon: '🚀',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    description: 'iOS, Android, and cross-platform mobile developers',
    color: '#bbf7d0',
    bgColor: 'rgba(187, 247, 208, 0.12)',
    borderColor: 'rgba(187, 247, 208, 0.58)',
    icon: '📱',
  },
  {
    id: 'security',
    label: 'Security',
    description: 'Cybersecurity, AppSec, and offensive security engineers',
    color: '#fde68a',
    bgColor: 'rgba(253, 230, 138, 0.12)',
    borderColor: 'rgba(253, 230, 138, 0.58)',
    icon: '🔒',
  },
  {
    id: 'data-science',
    label: 'Data Science',
    description: 'Data scientists, analysts, and MLOps engineers',
    color: '#ddd6fe',
    bgColor: 'rgba(221, 214, 254, 0.12)',
    borderColor: 'rgba(221, 214, 254, 0.58)',
    icon: '📊',
  },
  {
    id: 'systems',
    label: 'Systems',
    description: 'Systems programming, OS, and low-level engineers',
    color: '#e9d5ff',
    bgColor: 'rgba(233, 213, 255, 0.12)',
    borderColor: 'rgba(233, 213, 255, 0.58)',
    icon: '💻',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    description: 'Cloud architecture, Kubernetes, and infrastructure specialists',
    color: '#bae6fd',
    bgColor: 'rgba(186, 230, 253, 0.12)',
    borderColor: 'rgba(186, 230, 253, 0.58)',
    icon: '☁️',
  },
  {
    id: 'open-source',
    label: 'Open Source',
    description: 'Prolific open-source contributors and maintainers',
    color: '#fbcfe8',
    bgColor: 'rgba(251, 207, 232, 0.12)',
    borderColor: 'rgba(251, 207, 232, 0.58)',
    icon: '🌐',
  },
];

/** Lookup a category by its ID. Returns undefined if not found. */
export const getCategoryById = (id: CategoryId): Category | undefined =>
  CATEGORIES.find((c) => c.id === id);
