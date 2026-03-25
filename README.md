# FEMOG — Find Engineering Masters on GitHub

> A curated, community-driven directory of exceptional GitHub engineers, organized by specialty — filterable, searchable, and 100 % open-source.

[![Built with Reflex](https://img.shields.io/badge/Built%20with-Reflex-6c3dff?style=flat-square)](https://reflex.dev)
[![Contributions welcome](https://img.shields.io/badge/Contributions-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

---

## ✨ What is FEMOG?

FEMOG lets you **discover and follow** outstanding engineers on GitHub, filtered by:

- 🤖 AI / ML
- ⚙️ Backend
- 🎨 Frontend
- 🔗 Full Stack
- 🛠️ DevOps / SRE
- 🔐 Security
- 📱 Mobile
- 📊 Data Engineering
- 🌐 Open Source
- 🦀 Rust
- 🐍 Python
- 🔩 Embedded / IoT
- 🎮 Game Dev
- ⚡ Compilers / PL

Inspired by [remoteintech.company](https://remoteintech.company) — clean dark UI, fully parameterized, easy to extend.

---

## 🚀 Getting Started

### Prerequisites

- Python ≥ 3.10
- Node.js ≥ 18 (Reflex builds the frontend)

### Local development

```bash
git clone https://github.com/exujbarrios/femog.git
cd femog

# Install dependencies
pip install -r requirements.txt

# Start dev server (hot-reload)
reflex run
```

Visit `http://localhost:3000`.

---

## 🏗️ Project Structure

```
femog/
├── femog.py                  # App entry point
├── rxconfig.py               # Reflex config
├── requirements.txt
├── vercel.json               # Vercel deployment config
│
└── femog/
    ├── state.py              # Reactive state (filters, search, dark mode)
    ├── styles.py             # Design tokens (colors, typography, spacing)
    │
    ├── data/
    │   ├── labels.py         # ← ADD NEW SPECIALTIES HERE
    │   └── profiles.py       # ← ADD NEW PROFILES HERE
    │
    ├── components/
    │   ├── navbar.py
    │   ├── hero.py
    │   ├── sidebar.py
    │   ├── profile_card.py
    │   └── badge.py
    │
    └── pages/
        └── index.py          # Main page composition
```

---

## ➕ Adding a Profile or Label

See [CONTRIBUTING.md](CONTRIBUTING.md) — it's intentionally simple. No app logic changes needed.

---

## 🌐 Deploy on Vercel

1. Push to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Vercel picks up `vercel.json` automatically.
4. Deploy — done.

---

## 🤝 Contributing

PRs are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

---

© 2026 [edujbarrios](https://github.com/exujbarrios)
