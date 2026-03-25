"""
femog/data/labels.py
====================
Master registry of profile labels (categories).

To ADD a new label:
  1. Append a dict to LABELS following the schema below.
  2. Use the same `id` string as the `tags` list entries in profiles.py.

Schema
------
{
    "id":    str   – machine-readable key (used in filters & profile tags)
    "name":  str   – human-readable display name
    "color": str   – hex badge background color
    "text":  str   – hex badge text color
    "icon":  str   – emoji or single character icon shown on badge
    "description": str – one-liner shown in the sidebar tooltip
}
"""

LABELS: list[dict] = [
    {
        "id": "ai",
        "name": "AI / ML",
        "color": "#6c3dff",
        "text": "#ffffff",
        "icon": "🤖",
        "description": "Machine learning, deep learning, LLMs, MLOps",
    },
    {
        "id": "backend",
        "name": "Backend",
        "color": "#0f766e",
        "text": "#ffffff",
        "icon": "⚙️",
        "description": "APIs, databases, distributed systems, cloud infra",
    },
    {
        "id": "frontend",
        "name": "Frontend",
        "color": "#0369a1",
        "text": "#ffffff",
        "icon": "🎨",
        "description": "UI/UX, React, Vue, CSS, accessibility",
    },
    {
        "id": "fullstack",
        "name": "Full Stack",
        "color": "#9333ea",
        "text": "#ffffff",
        "icon": "🔗",
        "description": "End-to-end product engineers",
    },
    {
        "id": "devops",
        "name": "DevOps / SRE",
        "color": "#b45309",
        "text": "#ffffff",
        "icon": "🛠️",
        "description": "CI/CD, Kubernetes, observability, reliability",
    },
    {
        "id": "security",
        "name": "Security",
        "color": "#dc2626",
        "text": "#ffffff",
        "icon": "🔐",
        "description": "AppSec, pentesting, cryptography, threat modeling",
    },
    {
        "id": "mobile",
        "name": "Mobile",
        "color": "#0891b2",
        "text": "#ffffff",
        "icon": "📱",
        "description": "iOS, Android, React Native, Flutter",
    },
    {
        "id": "data",
        "name": "Data Engineering",
        "color": "#15803d",
        "text": "#ffffff",
        "icon": "📊",
        "description": "Pipelines, warehouses, streaming, analytics engineering",
    },
    {
        "id": "open-source",
        "name": "Open Source",
        "color": "#4f46e5",
        "text": "#ffffff",
        "icon": "🌐",
        "description": "Prominent OSS maintainers & contributors",
    },
    {
        "id": "rust",
        "name": "Rust",
        "color": "#c2410c",
        "text": "#ffffff",
        "icon": "🦀",
        "description": "Systems programming, Rust ecosystem",
    },
    {
        "id": "python",
        "name": "Python",
        "color": "#1d4ed8",
        "text": "#ffffff",
        "icon": "🐍",
        "description": "Python ecosystem, tooling & libraries",
    },
    {
        "id": "embedded",
        "name": "Embedded / IoT",
        "color": "#374151",
        "text": "#ffffff",
        "icon": "🔩",
        "description": "Firmware, RTOS, microcontrollers, hardware hacking",
    },
    {
        "id": "game-dev",
        "name": "Game Dev",
        "color": "#7c3aed",
        "text": "#ffffff",
        "icon": "🎮",
        "description": "Game engines, graphics, simulations",
    },
    {
        "id": "compiler",
        "name": "Compilers / PL",
        "color": "#1e3a5f",
        "text": "#ffffff",
        "icon": "⚡",
        "description": "Programming languages, compilers, interpreters, type systems",
    },
]

# ── convenience lookups ──────────────────────────────────────────────────────
LABEL_BY_ID: dict[str, dict] = {lbl["id"]: lbl for lbl in LABELS}
ALL_LABEL_IDS: list[str] = [lbl["id"] for lbl in LABELS]
