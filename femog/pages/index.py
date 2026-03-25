"""
femog/pages/index.py
====================
Main (and only) page — composes navbar, hero, sidebar + grid.
"""

from __future__ import annotations

import reflex as rx

from femog.state import State
from femog.components.navbar import navbar
from femog.components.hero import hero
from femog.components.sidebar import sidebar
from femog.components.profile_card import profile_card
from femog.styles import FONT_SANS, MAX_CONTENT_W, SIZE, WEIGHT


def _empty_state() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text("🔭", font_size="3rem"),
            rx.text(
                "No profiles match your filters.",
                font_size=SIZE["lg"],
                font_weight=WEIGHT["semi"],
                color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
                font_family=FONT_SANS,
            ),
            rx.text(
                "Try clearing some filters or broadening your search.",
                font_size=SIZE["sm"],
                color=rx.cond(State.dark_mode, "rgba(255,255,255,0.45)", "#9ca3af"),
                font_family=FONT_SANS,
            ),
            rx.box(
                rx.text("Clear filters", font_size=SIZE["sm"], font_weight=WEIGHT["medium"]),
                on_click=State.clear_filters,
                cursor="pointer",
                padding="8px 20px",
                border_radius="8px",
                background="#6c3dff",
                color="#ffffff",
                margin_top="8px",
                _hover={"background": "#7c52ff"},
                transition="all 0.15s ease",
            ),
            spacing="3",
            align="center",
        ),
        padding_y="80px",
        display="flex",
        justify_content="center",
        width="100%",
    )


def _profiles_grid() -> rx.Component:
    return rx.cond(
        State.result_count > 0,
        rx.box(
            rx.foreach(
                State.filtered_profiles,
                profile_card,
            ),
            display="grid",
            grid_template_columns=rx.breakpoints(
                initial="1fr",
                sm="repeat(2, 1fr)",
                lg="repeat(3, 1fr)",
            ),
            gap="20px",
            width="100%",
        ),
        _empty_state(),
    )


def _results_header() -> rx.Component:
    return rx.hstack(
        rx.text(
            rx.cond(
                State.has_active_filters,
                State.result_count.to_string() + " result" + rx.cond(State.result_count != 1, "s", ""),
                State.total_count.to_string() + " profiles",
            ),
            font_size=SIZE["sm"],
            font_weight=WEIGHT["semi"],
            color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
            font_family=FONT_SANS,
        ),
        rx.cond(
            State.has_active_filters,
            rx.text(
                "— filtered",
                font_size=SIZE["sm"],
                color="#6c3dff",
                font_family=FONT_SANS,
            ),
            rx.fragment(),
        ),
        spacing="2",
        align="center",
        margin_bottom="20px",
    )


def _contribute_banner() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.vstack(
                rx.text(
                    "Know someone who belongs here?",
                    font_size=SIZE["base"],
                    font_weight=WEIGHT["semi"],
                    color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
                    font_family=FONT_SANS,
                ),
                rx.text(
                    "FEMOG is open-source. Suggest a profile or add a new specialty via a Pull Request.",
                    font_size=SIZE["sm"],
                    color=rx.cond(State.dark_mode, "rgba(255,255,255,0.55)", "#6b7280"),
                    font_family=FONT_SANS,
                ),
                spacing="1",
                align="start",
            ),
            rx.spacer(),
            rx.link(
                rx.hstack(
                    rx.text("Contribute", font_size=SIZE["sm"], font_weight=WEIGHT["medium"]),
                    rx.text("→", font_size=SIZE["sm"]),
                    spacing="1",
                    align="center",
                ),
                href="https://github.com/exujbarrios/femog/blob/main/CONTRIBUTING.md",
                is_external=True,
                padding="8px 20px",
                border_radius="8px",
                background="#6c3dff",
                color="#ffffff",
                text_decoration="none",
                white_space="nowrap",
                flex_shrink="0",
                _hover={"background": "#7c52ff"},
                transition="all 0.15s ease",
            ),
            width="100%",
            align="center",
            flex_wrap="wrap",
            gap="12px",
        ),
        padding="24px 28px",
        border_radius="12px",
        margin_top="48px",
        margin_bottom="32px",
        background=rx.cond(
            State.dark_mode,
            "linear-gradient(135deg, rgba(108,61,255,0.15) 0%, rgba(45,31,110,0.25) 100%)",
            "linear-gradient(135deg, rgba(108,61,255,0.08) 0%, rgba(167,139,250,0.12) 100%)",
        ),
        border=rx.cond(
            State.dark_mode,
            "1px solid rgba(108,61,255,0.25)",
            "1px solid rgba(108,61,255,0.15)",
        ),
    )


def _footer() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(
                "FEMOG — Find Engineering Masters on GitHub",
                font_size=SIZE["sm"],
                font_weight=WEIGHT["medium"],
                color=rx.cond(State.dark_mode, "rgba(255,255,255,0.3)", "#9ca3af"),
                font_family=FONT_SANS,
            ),
            rx.hstack(
                rx.text(
                    "Made by ",
                    font_size=SIZE["xs"],
                    color=rx.cond(State.dark_mode, "rgba(255,255,255,0.25)", "#9ca3af"),
                    font_family=FONT_SANS,
                ),
                rx.link(
                    "edujbarrios",
                    href="https://github.com/exujbarrios",
                    is_external=True,
                    font_size=SIZE["xs"],
                    color="#6c3dff",
                    _hover={"text_decoration": "underline"},
                    font_family=FONT_SANS,
                ),
                rx.text(
                    " · Open Source · MIT License",
                    font_size=SIZE["xs"],
                    color=rx.cond(State.dark_mode, "rgba(255,255,255,0.25)", "#9ca3af"),
                    font_family=FONT_SANS,
                ),
                spacing="0",
                align="center",
            ),
            spacing="2",
            align="center",
        ),
        padding_y="32px",
        border_top=rx.cond(
            State.dark_mode,
            "1px solid rgba(255,255,255,0.05)",
            "1px solid rgba(0,0,0,0.06)",
        ),
        text_align="center",
        width="100%",
    )


def index() -> rx.Component:
    return rx.box(
        # ── Global background ────────────────────────────────
        navbar(),

        # ── Body: max-width container ────────────────────────
        rx.box(
            # Hero / search
            hero(),

            # Divider
            rx.box(
                height="1px",
                background=rx.cond(
                    State.dark_mode,
                    "rgba(255,255,255,0.06)",
                    "rgba(0,0,0,0.06)",
                ),
                width="100%",
            ),

            # Main 2-col: sidebar + grid
            rx.hstack(
                sidebar(),
                rx.box(
                    _results_header(),
                    _profiles_grid(),
                    _contribute_banner(),
                    _footer(),
                    flex="1",
                    padding="28px 28px 0",
                    overflow="hidden",
                    min_width="0",
                ),
                align="start",
                width="100%",
                spacing="0",
            ),

            max_width=MAX_CONTENT_W,
            margin="0 auto",
            width="100%",
        ),

        # ── Page wrapper ─────────────────────────────────────
        min_height="100vh",
        background=rx.cond(
            State.dark_mode,
            "#0d0d0d",
            "#f8f8f8",
        ),
        color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
        font_family=FONT_SANS,
    )
