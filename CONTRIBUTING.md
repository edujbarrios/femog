# Contributing to FEMOG

Thank you for considering contributing to FEMOG! This document explains how to add profiles, categories, and other improvements.

## Ways to Contribute

- **Suggest or add a GitHub profile** — the most common contribution
- **Fix an outdated profile** — bios, follower counts, companies change over time
- **Add a new category** — if a prominent engineering discipline is missing
- **Improve the UI** — accessibility, performance, or design enhancements
- **Report a bug** — open an issue with steps to reproduce

---

## Adding a Profile

### Criteria for Inclusion

- The engineer has made **significant open source contributions** or published **influential technical work**
- Their GitHub profile is **public and active**
- They are recognized in their domain (follower count is a useful signal, not a hard rule)
- The profile belongs to at least one of the existing categories

### Steps

1. Fork the repository and create a new branch:
   ```bash
   git checkout -b feat/add-profile-username
   ```

2. Edit `src/data/profiles.ts` and add an object to the `PROFILES` array:
   ```typescript
   {
     id: 'username',
     name: 'Full Name',
     username: 'github-username',
     bio: '...',
     categories: ['backend'],
     tags: ['node', 'golang'],
     followers: 12000,
     repos: 80,
     githubUrl: 'https://github.com/username',
     featured: false,
   }
   ```

3. Submit a pull request with the title `feat: add profile for @username`

---

## Adding a Category

1. Add the new value to the `CategoryId` union in `src/types/index.ts`:
   ```typescript
   export type CategoryId = 'ai' | 'backend' | ... | 'your-new-category';
   ```

2. Add the category definition in `src/data/categories.ts`:
   ```typescript
   {
     id: 'your-new-category',
     label: 'Human-Readable Label',
     description: 'One sentence describing this category',
     color: '#hex',         // text/icon color
     bgColor: 'rgba(...)',  // badge background (semi-transparent)
     borderColor: 'rgba(...)',
     icon: '🔧',            // emoji
   }
   ```

3. Tag relevant existing profiles with the new category ID.

---

## Development Setup

```bash
git clone https://github.com/edujbarrios/femog.git
cd femog
npm install
npm run dev
```

Run type-checking:
```bash
npm run type-check
```

---

## Code Style

- TypeScript strict mode is enforced — no `any`, no implicit types
- Follow the existing component patterns and file structure
- Use Tailwind CSS for all styling; avoid inline styles except for dynamic category colors
- Keep components small, focused, and composable
- No new dependencies without discussion

---

## Commit Convention

```
feat:   add new feature
fix:    fix a bug
style:  UI/CSS changes (no logic changes)
chore:  tooling, config, dependencies
docs:   documentation only
refactor: code restructuring without behavior changes
```

---

Made with ❤️ by [Eduardo J. Barrios](https://github.com/edujbarrios)
