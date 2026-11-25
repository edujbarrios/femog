<p align="center">
  <img src="public/assets/logo.svg" alt="FEMOG — engineer discovery logo" width="120" />
</p>

<h1 align="center">FEMOG</h1>
<p align="center"><strong>Find Engineering Masters on GitHub</strong></p>
<p align="center">Discover software engineers, researchers and open-source contributors worth learning from and following.</p>
<p align="center">
  <a href="https://femog.vercel.app">Explore the directory</a> ·
  <a href="#getting-started">Run locally</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

## What is FEMOG?

FEMOG is a manually curated directory of GitHub profiles, organized by engineering discipline. It helps developers find people whose work they can learn from, rather than rank engineers by popularity.

Inspired by [Remote In Tech](https://remoteintech.company/), the project is intentionally simple: a searchable directory, manually maintained profile data and direct links to GitHub. The catalog is in its early stages; contributions help it grow.

## Explore the directory

- Search by name, GitHub username, biography, technology tag, company or location.
- Filter by one or more of the 11 engineering disciplines. A profile matches if it belongs to **any** selected discipline; search further narrows the results.
- Browse profile cards with biographies, skills, category badges and links to GitHub or personal websites when available.
- See directory statistics and category counts calculated from the curated dataset.

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

Required fields:

```ts
{
  id: 'github-username',
  name: 'Full Name',
  username: 'github-username',
  bio: 'One or two factual sentences about their technical work.',
  categories: ['backend', 'open-source'],
  tags: ['nodejs', 'typescript'],
  githubUrl: 'https://github.com/github-username',
}
```

Optional fields: `location`, `company`, `websiteUrl` and `twitterUsername` (without the @). The optional `maintainer` flag is reserved for FEMOG maintainers.

Choose an active, public GitHub profile with meaningful open-source contributions or technical work. Avoid duplicate entries, keep bios factual, and use relevant lowercase tags. Do not invent missing details.

### Add a category

1. Extend the `CategoryId` union in [types/index.ts](types/index.ts).
2. Add its display definition to `CATEGORIES` in [data/categories.ts](data/categories.ts), including its label, description, colors and icon.
3. Assign the new ID to relevant profiles in `data/profiles.ts`.

The filter bar, category badges and statistics use these definitions automatically; no UI logic changes are needed.

## Project structure

```text
app/                  # Next.js pages, layout and global styles
components/           # Directory UI, profile cards, filters and navigation
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
