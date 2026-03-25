# Contributing to FEMOG

Thanks for taking the time to contribute! FEMOG is designed so that the most common contributions — **adding a profile** or **adding a specialty label** — require editing exactly **one file** and zero app logic.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Add a Profile](#how-to-add-a-profile)
- [How to Add a Label](#how-to-add-a-label)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

---

## Code of Conduct

Be kind. Focus on the content, not the person. Constructive criticism only.

---

## How to Add a Profile

1. Open `femog/data/profiles.py`.
2. Append a new dict to the `PROFILES` list following this schema:

```python
{
    "login":    "githubusername",    # exact GitHub username
    "name":     "Full Name",
    "bio":      "Short description, max ~140 chars",
    "tags":     ["backend", "rust"], # choose from labels.py ids
    "location": "City, Country",     # optional, "" if unknown
    "twitter":  "handle",            # optional, "" if none (no @)
    "website":  "https://...",       # optional, "" if none
    "notable":  "Their standout project or contribution",
},
```

3. Save, run `reflex run`, verify the card appears correctly.
4. Open a PR with the title `feat(profiles): add @githubusername`.

### Profile quality bar

- The person must have **meaningful public contributions** on GitHub.
- Bio and notable should be factual and neutral.
- Do not add yourself unless your work is genuinely notable.

---

## How to Add a Label

1. Open `femog/data/labels.py`.
2. Append a new dict to the `LABELS` list:

```python
{
    "id":          "your-label-id",       # lowercase, hyphen-separated, unique
    "name":        "Display Name",
    "color":       "#hexcolor",           # badge background
    "text":        "#ffffff",             # badge text (ensure contrast)
    "icon":        "🔧",                  # single emoji or character
    "description": "One-line description shown in the sidebar",
},
```

3. Use the new `id` in profile `tags` lists.
4. Open a PR with the title `feat(labels): add <label-name> specialty`.

---

## Pull Request Guidelines

- Keep PRs small and focused (one profile or one label per PR is ideal).
- Use the issue templates in `.github/ISSUE_TEMPLATE/` when applicable.
- Don't refactor unrelated code in the same PR.
- Make sure `reflex run` starts without errors before submitting.

---

## Development Setup

```bash
git clone https://github.com/exujbarrios/femog.git
cd femog
pip install -r requirements.txt
reflex run
```

The dev server runs at `http://localhost:3000` with hot-reload.
