"""
femog/data/profiles.py
======================
Curated GitHub profiles worth following.

To ADD a new profile:
  1. Append a dict to PROFILES following the schema below.
  2. Pick tags from femog/data/labels.py (use the `id` field).
  3. Run `reflex run` — the UI updates automatically, no code changes needed.

Schema
------
{
    "login":    str   – exact GitHub username (used in avatar & profile URLs)
    "name":     str   – display name shown on the card
    "bio":      str   – short description (≤ 140 chars recommended)
    "tags":     list  – list of label ids from labels.py
    "location": str   – optional location string
    "twitter":  str   – optional Twitter/X handle (without @)
    "website":  str   – optional personal site URL
    "notable":  str   – one headline achievement or project
}
"""

PROFILES: list[dict] = [
    # ── AI / ML ──────────────────────────────────────────────
    {
        "login": "karpathy",
        "name": "Andrej Karpathy",
        "bio": "Previously OpenAI, Tesla AI. Neural nets & LLMs from scratch.",
        "tags": ["ai", "python", "open-source"],
        "location": "San Francisco, CA",
        "twitter": "karpathy",
        "website": "https://karpathy.ai",
        "notable": "nanoGPT, micrograd, llm.c",
    },
    {
        "login": "huggingface",
        "name": "Hugging Face",
        "bio": "The AI community building the future — transformers & beyond.",
        "tags": ["ai", "python", "open-source"],
        "location": "New York, NY",
        "twitter": "huggingface",
        "website": "https://huggingface.co",
        "notable": "🤗 Transformers, Datasets, Diffusers",
    },
    {
        "login": "fchollet",
        "name": "François Chollet",
        "bio": "Deep learning researcher at Google. Creator of Keras.",
        "tags": ["ai", "python"],
        "location": "Mountain View, CA",
        "twitter": "fchollet",
        "website": "",
        "notable": "Keras, ARC benchmark",
    },
    {
        "login": "lucidrains",
        "name": "Phil Wang",
        "bio": "Replicating cutting-edge AI research in simple PyTorch.",
        "tags": ["ai", "python", "open-source"],
        "location": "Vancouver, BC",
        "twitter": "PhilipWang_",
        "website": "",
        "notable": "x-transformers, DALLE2-pytorch",
    },
    # ── Backend ──────────────────────────────────────────────
    {
        "login": "antirez",
        "name": "Salvatore Sanfilippo",
        "bio": "Author of Redis. Hacking on databases & distributed systems.",
        "tags": ["backend", "open-source"],
        "location": "Sicily, Italy",
        "twitter": "antirez",
        "website": "http://antirez.com",
        "notable": "Redis",
    },
    {
        "login": "nicowillis",
        "name": "Nico Willis",
        "bio": "Distributed systems, consensus algorithms, cloud-native.",
        "tags": ["backend", "devops"],
        "location": "Berlin, DE",
        "twitter": "",
        "website": "",
        "notable": "etcd contributions, Raft implementations",
    },
    {
        "login": "mitchellh",
        "name": "Mitchell Hashimoto",
        "bio": "Founder of HashiCorp. Building dev tools in Zig & Go.",
        "tags": ["backend", "devops", "open-source"],
        "location": "San Francisco, CA",
        "twitter": "mitchellh",
        "website": "https://mitchellh.com",
        "notable": "Vagrant, Terraform, Packer",
    },
    # ── Frontend ─────────────────────────────────────────────
    {
        "login": "gaearon",
        "name": "Dan Abramov",
        "bio": "Working on React. Co-author of Redux and Create React App.",
        "tags": ["frontend", "open-source"],
        "location": "London, UK",
        "twitter": "dan_abramov",
        "website": "https://overreacted.io",
        "notable": "React core, Redux",
    },
    {
        "login": "Rich-Harris",
        "name": "Rich Harris",
        "bio": "Staff software engineer at Vercel. Author of Svelte & Rollup.",
        "tags": ["frontend", "open-source"],
        "location": "New York, NY",
        "twitter": "Rich_Harris",
        "website": "",
        "notable": "Svelte, SvelteKit, Rollup",
    },
    {
        "login": "wesbos",
        "name": "Wes Bos",
        "bio": "Full stack developer & teacher. CSS, JS, React, Node.",
        "tags": ["frontend", "fullstack"],
        "location": "Hamilton, ON",
        "twitter": "wesbos",
        "website": "https://wesbos.com",
        "notable": "JavaScript30, Syntax podcast",
    },
    # ── Full Stack ───────────────────────────────────────────
    {
        "login": "sindresorhus",
        "name": "Sindre Sorhus",
        "bio": "Full-time open-sourcerer. Making useful stuff.",
        "tags": ["fullstack", "open-source"],
        "location": "Bangkok, TH",
        "twitter": "sindresorhus",
        "website": "https://sindresorhus.com",
        "notable": "1000+ npm packages, awesome lists",
    },
    {
        "login": "tj",
        "name": "TJ Holowaychuk",
        "bio": "Prolific open-source author. Node.js ecosystem pioneer.",
        "tags": ["fullstack", "backend", "open-source"],
        "location": "Victoria, BC",
        "twitter": "tjholowaychuk",
        "website": "",
        "notable": "Express.js, Koa, Commander",
    },
    # ── DevOps / SRE ─────────────────────────────────────────
    {
        "login": "kelseyhightower",
        "name": "Kelsey Hightower",
        "bio": "Developer advocate at Google Cloud. Kubernetes & cloud native.",
        "tags": ["devops", "backend", "open-source"],
        "location": "Portland, OR",
        "twitter": "kelseyhightower",
        "website": "",
        "notable": "Kubernetes the Hard Way",
    },
    # ── Security ─────────────────────────────────────────────
    {
        "login": "GrahamEdgecombe",
        "name": "Graham Edgecombe",
        "bio": "Security researcher. TLS, PKI, certificate transparency.",
        "tags": ["security", "backend"],
        "location": "London, UK",
        "twitter": "",
        "website": "",
        "notable": "kt-cert-transparency, TLS research",
    },
    {
        "login": "swisskyrepo",
        "name": "Swissky",
        "bio": "Pentester & CTF player. Maintaining PayloadsAllTheThings.",
        "tags": ["security", "open-source"],
        "location": "Switzerland",
        "twitter": "pentest_swissky",
        "website": "",
        "notable": "PayloadsAllTheThings",
    },
    # ── Data Engineering ─────────────────────────────────────
    {
        "login": "mxmCherry",
        "name": "Max M.",
        "bio": "Data pipelines, real-time streaming & analytics engineering.",
        "tags": ["data", "backend"],
        "location": "Kyiv, UA",
        "twitter": "",
        "website": "",
        "notable": "openrtb Go library",
    },
    # ── Rust ─────────────────────────────────────────────────
    {
        "login": "dtolnay",
        "name": "David Tolnay",
        "bio": "Rust library author. proc-macros, serde, cxx.",
        "tags": ["rust", "compiler", "open-source"],
        "location": "",
        "twitter": "",
        "website": "",
        "notable": "serde, syn, cxx, anyhow",
    },
    {
        "login": "BurntSushi",
        "name": "Andrew Gallant",
        "bio": "Rust programmer. Regex, ripgrep, and performance.",
        "tags": ["rust", "open-source"],
        "location": "Boston, MA",
        "twitter": "burntsushi5",
        "website": "https://blog.burntsushi.net",
        "notable": "ripgrep, regex crate",
    },
    # ── Python ───────────────────────────────────────────────
    {
        "login": "tiangolo",
        "name": "Sebastián Ramírez",
        "bio": "FastAPI & SQLModel author. Full stack + ML on the side.",
        "tags": ["python", "backend", "fullstack", "open-source"],
        "location": "Berlin, DE",
        "twitter": "tiangolo",
        "website": "https://tiangolo.com",
        "notable": "FastAPI, SQLModel, Typer",
    },
    {
        "login": "gvanrossum",
        "name": "Guido van Rossum",
        "bio": "Python's creator. Now at Microsoft working on faster CPython.",
        "tags": ["python", "compiler", "open-source"],
        "location": "Belmont, CA",
        "twitter": "gvanrossum",
        "website": "",
        "notable": "Python programming language",
    },
    # ── Compilers / PL ───────────────────────────────────────
    {
        "login": "nikic",
        "name": "Nikita Popov",
        "bio": "PHP core dev & LLVM contributor. Loves compilers.",
        "tags": ["compiler", "backend"],
        "location": "Germany",
        "twitter": "nikita_ppv",
        "website": "https://nikic.github.io",
        "notable": "PHP parser, PHP-Scoper, LLVM patches",
    },
    # ── Embedded / IoT ────────────────────────────────────────
    {
        "login": "jj1bdx",
        "name": "Kenji Rikitake",
        "bio": "Erlang/Elixir, radio, IoT, embedded security.",
        "tags": ["embedded", "security"],
        "location": "Osaka, JP",
        "twitter": "jj1bdx",
        "website": "",
        "notable": "SFMT, radio & embedded OSS",
    },
    # ── Game Dev ─────────────────────────────────────────────
    {
        "login": "id-Software",
        "name": "id Software",
        "bio": "Legendary game studio. DOOM, Quake, source releases.",
        "tags": ["game-dev", "open-source"],
        "location": "Richardson, TX",
        "twitter": "idSoftware",
        "website": "https://www.idsoftware.com",
        "notable": "DOOM, Quake (open-sourced)",
    },
    # ── Mobile ────────────────────────────────────────────────
    {
        "login": "JohnSundell",
        "name": "John Sundell",
        "bio": "Swift developer & blogger. Building iOS tools & frameworks.",
        "tags": ["mobile", "open-source"],
        "location": "Stockholm, SE",
        "twitter": "johnsundell",
        "website": "https://swiftbysundell.com",
        "notable": "Publish static site generator, Plot",
    },
]
