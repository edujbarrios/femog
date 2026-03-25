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

2. Open `data/profiles.ts` and append an object to the `PROFILES` array following this exact shape:

   ```typescript
   {
     // Required fields
     id: 'github-username',               // unique, lowercase, URL-safe (use the GitHub username)
     name: 'Full Name',                   // display name
     username: 'github-username',         // GitHub handle (no @)
     bio: 'Short description...',         // 1–2 sentences about the engineer
     categories: ['backend'],             // one or more CategoryIds (see valid values below)
     tags: ['node', 'golang', 'rust'],    // tech keywords shown on the card
     followers: 12000,                    // approximate follower count (update manually)
     repos: 80,                           // approximate public repo count
     githubUrl: 'https://github.com/username',
     featured: false,                     // set true only for widely-known profiles

     // Optional fields
     location: 'City, Country',           // omit if unknown
     company: 'Company or @org',          // omit if unknown
     websiteUrl: 'https://example.com',   // personal site or blog
     twitterUsername: 'handle',           // Twitter/X handle (no @)
     joinedYear: 2015,                    // year they joined GitHub
   }
   ```

3. **Valid `categories` values** (defined in `types/index.ts`):

   | Value | Label |
   |---|---|
   | `'ai'` | AI / Machine Learning |
   | `'backend'` | Backend Engineering |
   | `'frontend'` | Frontend Development |
   | `'fullstack'` | Full-Stack |
   | `'devops'` | DevOps / Infrastructure |
   | `'mobile'` | Mobile Development |
   | `'security'` | Security Engineering |
   | `'data-science'` | Data Science |
   | `'systems'` | Systems Programming |
   | `'cloud'` | Cloud Architecture |
   | `'open-source'` | Open Source |

   A profile can belong to **multiple** categories: `categories: ['ai', 'open-source']`.

4. Submit a pull request with the title `feat: add profile for @username`.

---

## Adding a Category

1. Add the new value to the `CategoryId` union in `types/index.ts`:
   ```typescript
   export type CategoryId = 'ai' | 'backend' | ... | 'your-new-category';
   ```

2. Add the category definition in `data/categories.ts`:
   ```typescript
   {
     id: 'your-new-category',
     label: 'Human-Readable Label',
     description: 'One sentence describing this category.',
     color: '#2dd4bf',        // text / icon color (hex)
     bgColor: 'rgba(...)',    // badge background (semi-transparent)
     borderColor: 'rgba(...)',
     icon: '🔧',              // emoji shown in the filter bar
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

Run type-checking before submitting a PR:
```bash
npx tsc --noEmit
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
feat:     add new feature
fix:      fix a bug
style:    UI/CSS changes (no logic changes)
chore:    tooling, config, dependencies
docs:     documentation only
refactor: code restructuring without behavior changes
```

---

Made with ❤️ by [Eduardo J. Barrios](https://github.com/edujbarrios)
