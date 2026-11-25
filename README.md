# FEMOG <a href="https://femog.vercel.app"><img src="public/assets/logo.svg" align="right" width="160" alt="FEMOG logo — neon Git branch and magnifying glass" /></a>

[![Website](https://img.shields.io/badge/Website-FEMOG-0f766e?style=flat-square&logo=vercel&logoColor=white)](https://femog.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Contributions](https://img.shields.io/badge/Contributions-welcome-0f766e?style=flat-square)](CONTRIBUTING.md)

**Find Engineering Masters on GitHub.**

FEMOG is a manually curated directory of software engineers, researchers and open-source contributors, organized by engineering discipline. Discover people whose work you can learn from, explore their featured repositories and find developers worth following.

Inspired by [Remote In Tech](https://remoteintech.company/), FEMOG focuses on discovery rather than popularity rankings. The catalog is in its early stages; contributions help it grow.

[Explore the directory](https://femog.vercel.app) · [Run locally](#getting-started) · [Contribute](#contributing)

<br clear="right" />

## Explore the directory

- Search by name, GitHub username, biography, technology tag, company or location.
- Filter by one or more of the 11 engineering disciplines. A profile matches if it belongs to **any** selected discipline; search further narrows the results.
- Browse a compact, responsive gallery of selectable engineer tiles with avatars, usernames and discipline badges.
- Select a tile to open the engineer's profile, including their biography, skills, full category list and up to three featured projects with optional one-sentence descriptions and direct repository links.
- Use **Follow on GitHub** in the profile dialog to visit the engineer's GitHub profile and follow them there.
- Close the dialog using its close button, Escape, or the backdrop; keyboard focus returns to the selected tile.
- See the matching profile count and category counts calculated from the curated dataset.

Profile details are stored in TypeScript files and filtering runs in the browser. No database, GitHub API token or account is needed to use the directory. Profile avatars are loaded from GitHub.

### Engineering disciplines

| Category | ID |
| --- | --- |
| AI / ML | `ai` |
| Backend | `backend` |
| Frontend | `frontend` |
| Full Stack | `fullstack` |
| DevOps / SRE | `devops` |
| Mobile | `mobile` |
| Security | `security` |
| Data Science | `data-science` |
| Systems | `systems` |
| Cloud | `cloud` |
| Open Source | `open-source` |

## Getting started

**Requirements:** Node.js 20.9 or newer, npm and Git.

```bash
git clone https://github.com/edujbarrios/femog.git
cd femog
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables or API credentials are required for local development.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run type-check` | Check TypeScript types |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build after building |

## Contributing

The easiest way to help is to suggest a public GitHub profile, correct outdated information or add a missing engineering discipline. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guidelines.

### Add a profile

1. Fork the repository and create a branch.
2. Add an object to the `PROFILES` array in [data/profiles.ts](data/profiles.ts).
3. Run `npm run type-check`, review your change and submit a pull request, for example `feat: add profile for @username`.

Complete profile example (replace the illustrative names and URLs with verified public information):

```ts
{
  // Required
  id: 'github-username',
  name: 'Full Name',
  username: 'github-username',
  bio: 'One or two factual sentences about their technical work.',
  categories: ['backend', 'open-source'],
  tags: ['nodejs', 'typescript'],
  githubUrl: 'https://github.com/github-username',

  // Optional
  location: 'City, Country',
  company: 'Company or organization',
  websiteUrl: 'https://example.com',
  twitterUsername: 'handle',
  featuredProjects: [
    {
      name: 'Project One',
      githubUrl: 'https://github.com/github-username/project-one',
      description: 'A tool for validating API responses.',
    },
    {
      name: 'Project Two',
      githubUrl: 'https://github.com/github-username/project-two',
      description: 'A library for processing structured data.',
    },
    {
      name: 'Project Three',
      githubUrl: 'https://github.com/github-username/project-three',
      description: 'A dashboard for visualizing application metrics.',
    },
  ],
}
```

### Featured project fields

Include up to three distinct public GitHub repositories that showcase the engineer's work. Projects appear in the order listed in `featuredProjects`.

| Field | Required? | Description |
| --- | --- | --- |
| `name` | Yes | Project display name. |
| `githubUrl` | Yes | Verified URL of the public GitHub repository. |
| `description` | No | One concise, factual sentence explaining what the project does. |

Descriptions appear below the project name inside the clickable repository link in the profile dialog. Prefer a single short sentence describing its purpose or main capability; avoid promotional language, repeated names, and unsupported claims. If no reliable description is available, omit it rather than guessing. The link still works without a description.

If fewer than three projects are available, include only the verified ones; omit `featuredProjects` or use an empty array if none are available. The three-project limit is enforced by the TypeScript profile type.

The optional `maintainer` flag is reserved for FEMOG maintainers.

Choose an active, public GitHub profile with meaningful open-source contributions or technical work. Avoid duplicate entries, keep bios factual, and use relevant lowercase tags. Do not invent missing details.

### Add a category

1. Extend the `CategoryId` union in [types/index.ts](types/index.ts).
2. Add its display definition to `CATEGORIES` in [data/categories.ts](data/categories.ts), including its label, description, colors and icon.
3. Assign the new ID to relevant profiles in `data/profiles.ts`.

The filter bar, category badges and counts use these definitions automatically; no UI logic changes are needed.

## Project structure

```text
app/                  # Next.js pages, layout and global styles
components/           # Engineer tiles, profile dialog, filters and navigation
data/
  categories.ts       # Engineering discipline definitions
  profiles.ts         # Curated GitHub profiles
hooks/useProfiles.ts  # Client-side search and filter state
lib/utils.ts          # Filtering, sorting and utility functions
public/assets/        # FEMOG logo (SVG and PNG fallback)
types/index.ts        # Profile and category types
```

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS and Lucide React. The project is configured for deployment on Vercel.

## Credits

Created by [Eduardo J. Barrios](https://github.com/edujbarrios). FEMOG is an independent project and is not affiliated with GitHub, Inc.

**License:** The project has been described as MIT-licensed, but a standalone license file is not currently included. Confirm the applicable terms with the maintainer before redistribution.
