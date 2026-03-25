"""
femog.py — App entry point
==========================
Register pages and configure the Reflex application.
"""

import reflex as rx

from femog.pages.index import index
from femog.state import State  # noqa: imported so Reflex discovers it

app = rx.App(
    style={
        "font_family": "'Inter', 'Segoe UI', system-ui, sans-serif",
        "box_sizing": "border-box",
        "margin": "0",
        "padding": "0",
    },
    head_components=[
        rx.el.link(
            rel="preconnect",
            href="https://fonts.googleapis.com",
        ),
        rx.el.link(
            rel="preconnect",
            href="https://fonts.gstatic.com",
            crossorigin="anonymous",
        ),
        rx.el.link(
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
            rel="stylesheet",
        ),
        rx.el.meta(
            name="description",
            content="FEMOG — Find Engineering Masters on GitHub. A curated, community-driven directory of exceptional engineers filtered by specialty.",
        ),
        rx.el.meta(property="og:title", content="FEMOG · Find Engineering Masters on GitHub"),
        rx.el.meta(
            property="og:description",
            content="Discover AI, backend, frontend, fullstack and more top GitHub engineers.",
        ),
        rx.el.meta(name="twitter:card", content="summary_large_image"),
        rx.el.meta(name="twitter:creator", content="@edujbarrios"),
    ],
)

app.add_page(index, route="/", title="FEMOG · Find Engineering Masters on GitHub")
