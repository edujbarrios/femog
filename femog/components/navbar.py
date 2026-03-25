"""
femog/components/navbar.py
==========================
Top navigation bar — logo, subtitle, theme toggle, GitHub link.
"""

from __future__ import annotations

import reflex as rx

from femog.state import State
from femog.styles import (
    FONT_SANS, NAV_HEIGHT, SHADOW_NAV, SIZE, TRANSITION, WEIGHT
)

GITHUB_REPO = "https://github.com/exujbarrios/femog"


def _moon_icon() -> rx.Component:
    return rx.text("🌙", font_size="1.1rem")


def _sun_icon() -> rx.Component:
    return rx.text("☀️", font_size="1.1rem")


def navbar() -> rx.Component:
    return rx.box(
        rx.hstack(
            # ── Logo / wordmark ──────────────────────────────────
            rx.hstack(
                rx.box(
                    rx.text(
                        "FEMOG",
                        font_size=SIZE["xl"],
                        font_weight=WEIGHT["bold"],
                        color="#6c3dff",
                        letter_spacing="-0.02em",
                        font_family=FONT_SANS,
                    ),
                    rx.text(
                        "Find Engineering Masters on GitHub",
                        font_size=SIZE["xs"],
                        color="rgba(255,255,255,0.45)",
                        font_family=FONT_SANS,
                    ),
                ),
                spacing="3",
                align="center",
            ),

            rx.spacer(),

            # ── Right controls ───────────────────────────────────
            rx.hstack(
                # GitHub repo link
                rx.link(
                    rx.hstack(
                        rx.text("⭐", font_size=SIZE["sm"]),
                        rx.text(
                            "Star on GitHub",
                            font_size=SIZE["sm"],
                            font_weight=WEIGHT["medium"],
                        ),
                        spacing="1",
                        align="center",
                    ),
                    href=GITHUB_REPO,
                    is_external=True,
                    padding="6px 14px",
                    border_radius="8px",
                    border="1.5px solid rgba(108,61,255,0.5)",
                    color="rgba(255,255,255,0.8)",
                    _hover={
                        "border_color": "#6c3dff",
                        "color": "#ffffff",
                        "background": "rgba(108,61,255,0.12)",
                    },
                    transition=TRANSITION,
                    text_decoration="none",
                ),
                # Dark/light toggle
                rx.box(
                    rx.cond(State.dark_mode, _moon_icon(), _sun_icon()),
                    on_click=State.toggle_dark_mode,
                    cursor="pointer",
                    padding="6px 10px",
                    border_radius="8px",
                    border="1.5px solid rgba(255,255,255,0.1)",
                    _hover={"background": "rgba(255,255,255,0.07)"},
                    transition=TRANSITION,
                    title="Toggle theme",
                ),
                spacing="3",
                align="center",
            ),

            width="100%",
            align="center",
        ),
        width="100%",
        height=NAV_HEIGHT,
        padding_x="2rem",
        position="sticky",
        top="0",
        z_index="100",
        background=rx.cond(
            State.dark_mode,
            "rgba(17,17,17,0.92)",
            "rgba(255,255,255,0.92)",
        ),
        backdrop_filter="blur(12px)",
        border_bottom=rx.cond(
            State.dark_mode,
            "1px solid rgba(255,255,255,0.06)",
            "1px solid rgba(0,0,0,0.08)",
        ),
        box_shadow=SHADOW_NAV,
        display="flex",
        align_items="center",
    )
