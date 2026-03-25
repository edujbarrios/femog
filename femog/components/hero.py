"""
femog/components/hero.py
========================
Hero section — headline, sub-headline, search bar, stats row.
"""

from __future__ import annotations

import reflex as rx

from femog.state import State
from femog.styles import FONT_SANS, RADIUS, SIZE, TRANSITION, WEIGHT
from femog.data.profiles import PROFILES


def search_bar() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.text("🔍", font_size=SIZE["lg"]),
            rx.input(
                placeholder="Search by name, language, tool, or keyword…",
                value=State.search_query,
                on_change=State.set_search,
                border="none",
                outline="none",
                background="transparent",
                font_size=SIZE["base"],
                font_family=FONT_SANS,
                color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
                width="100%",
                _placeholder={"color": "rgba(156,163,175,0.8)"},
            ),
            rx.cond(
                State.has_active_filters,
                rx.box(
                    rx.text("✕ Clear", font_size=SIZE["xs"]),
                    on_click=State.clear_filters,
                    cursor="pointer",
                    padding="4px 10px",
                    border_radius=RADIUS["full"],
                    background=rx.cond(
                        State.dark_mode,
                        "rgba(108,61,255,0.2)",
                        "rgba(108,61,255,0.1)",
                    ),
                    color="#6c3dff",
                    font_size=SIZE["xs"],
                    white_space="nowrap",
                    _hover={"background": "rgba(108,61,255,0.35)"},
                    transition=TRANSITION,
                ),
                rx.fragment(),
            ),
            spacing="3",
            align="center",
            width="100%",
        ),
        width="100%",
        max_width="640px",
        padding="12px 20px",
        border_radius=RADIUS["lg"],
        background=rx.cond(
            State.dark_mode,
            "rgba(26,26,26,0.9)",
            "rgba(255,255,255,0.9)",
        ),
        border=rx.cond(
            State.dark_mode,
            "1.5px solid rgba(255,255,255,0.1)",
            "1.5px solid rgba(0,0,0,0.1)",
        ),
        box_shadow=rx.cond(
            State.dark_mode,
            "0 4px 24px rgba(108,61,255,0.15)",
            "0 4px 24px rgba(0,0,0,0.08)",
        ),
        _focus_within={
            "border_color": "#6c3dff",
            "box_shadow": "0 4px 32px rgba(108,61,255,0.3)",
        },
        transition=TRANSITION,
    )


def stats_pill(value: str, label: str) -> rx.Component:
    return rx.hstack(
        rx.text(
            value,
            font_size=SIZE["xl"],
            font_weight=WEIGHT["bold"],
            color="#6c3dff",
        ),
        rx.text(
            label,
            font_size=SIZE["sm"],
            color=rx.cond(State.dark_mode, "rgba(255,255,255,0.5)", "#9ca3af"),
        ),
        spacing="2",
        align="center",
    )


def hero() -> rx.Component:
    return rx.box(
        rx.vstack(
            # Tag line
            rx.box(
                rx.text(
                    "✦  Explore · Follow · Grow",
                    font_size=SIZE["xs"],
                    font_weight=WEIGHT["medium"],
                    letter_spacing="0.1em",
                    text_transform="uppercase",
                    color="#6c3dff",
                ),
                padding="4px 14px",
                border_radius=RADIUS["full"],
                background="rgba(108,61,255,0.12)",
                border="1px solid rgba(108,61,255,0.25)",
            ),

            # Headline
            rx.text(
                "Find Engineering Masters",
                font_size=rx.breakpoints(
                    initial=SIZE["3xl"], sm=SIZE["4xl"], md="3rem"
                ),
                font_weight=WEIGHT["bold"],
                text_align="center",
                line_height="1.15",
                letter_spacing="-0.03em",
                color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
                font_family=FONT_SANS,
            ),
            rx.hstack(
                rx.text(
                    "on",
                    font_size=rx.breakpoints(
                        initial=SIZE["3xl"], sm=SIZE["4xl"], md="3rem"
                    ),
                    font_weight=WEIGHT["bold"],
                    color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
                    font_family=FONT_SANS,
                ),
                rx.box(
                    rx.text(
                        "GitHub",
                        font_size=rx.breakpoints(
                            initial=SIZE["3xl"], sm=SIZE["4xl"], md="3rem"
                        ),
                        font_weight=WEIGHT["bold"],
                        font_family=FONT_SANS,
                    ),
                    background="linear-gradient(90deg,#6c3dff,#a78bfa)",
                    background_clip="text",
                    webkit_background_clip="text",
                    color="transparent",
                    webkit_text_fill_color="transparent",
                ),
                spacing="3",
                align="center",
                flex_wrap="wrap",
                justify="center",
            ),

            # Sub
            rx.text(
                "A curated, community-driven list of exceptional GitHub engineers, "
                "organized by specialty — filterable, searchable, and open-source.",
                font_size=SIZE["lg"],
                text_align="center",
                color=rx.cond(
                    State.dark_mode,
                    "rgba(255,255,255,0.55)",
                    "#6b7280",
                ),
                max_width="560px",
                line_height="1.7",
                font_family=FONT_SANS,
            ),

            # Search
            search_bar(),

            # Stats
            rx.hstack(
                stats_pill(str(len(PROFILES)), "profiles"),
                rx.text("·", color="rgba(255,255,255,0.2)", font_size=SIZE["lg"]),
                stats_pill("14", "specialties"),
                rx.text("·", color="rgba(255,255,255,0.2)", font_size=SIZE["lg"]),
                stats_pill("100%", "open source"),
                spacing="3",
                align="center",
                flex_wrap="wrap",
                justify="center",
            ),

            spacing="6",
            align="center",
            width="100%",
        ),
        padding_top="80px",
        padding_bottom="60px",
        padding_x="1.5rem",
        text_align="center",
        display="flex",
        justify_content="center",
    )
