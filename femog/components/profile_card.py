"""
femog/components/profile_card.py
=================================
Individual GitHub profile card component.
"""

from __future__ import annotations

import reflex as rx

from femog.state import State
from femog.data.labels import LABEL_BY_ID
from femog.styles import FONT_SANS, RADIUS, SHADOW_CARD, SIZE, TRANSITION, WEIGHT


def _avatar(login: str) -> rx.Component:
    return rx.image(
        src=f"https://github.com/{login}.png?size=80",
        width="64px",
        height="64px",
        border_radius=RADIUS["full"],
        object_fit="cover",
        border=rx.cond(
            State.dark_mode,
            "2px solid rgba(255,255,255,0.08)",
            "2px solid rgba(0,0,0,0.08)",
        ),
        flex_shrink="0",
    )


def _tag_pill(tag_id: rx.Var) -> rx.Component:
    """Render a single tag pill on a card — color comes from LABEL_BY_ID at runtime."""
    return rx.box(
        rx.text(tag_id, font_size="0.65rem", font_weight=WEIGHT["medium"]),
        padding="2px 8px",
        border_radius=RADIUS["full"],
        background="rgba(108,61,255,0.18)",
        color="#a78bfa",
        border="1px solid rgba(108,61,255,0.3)",
        font_family=FONT_MONO,
        white_space="nowrap",
    )


FONT_MONO = "'JetBrains Mono','Fira Code',monospace"


def profile_card(profile: rx.Var) -> rx.Component:
    gh_url = "https://github.com/" + profile["login"]

    return rx.box(
        rx.vstack(
            # ── Header row ─────────────────────────────────────
            rx.hstack(
                _avatar(profile["login"]),
                rx.vstack(
                    rx.link(
                        rx.text(
                            profile["name"],
                            font_size=SIZE["base"],
                            font_weight=WEIGHT["semi"],
                            color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
                            font_family=FONT_SANS,
                            _hover={"color": "#a78bfa"},
                            transition=TRANSITION,
                        ),
                        href=gh_url,
                        is_external=True,
                        text_decoration="none",
                    ),
                    rx.link(
                        rx.text(
                            "@" + profile["login"],
                            font_size=SIZE["sm"],
                            color="#6c3dff",
                            font_family=FONT_MONO,
                        ),
                        href=gh_url,
                        is_external=True,
                        text_decoration="none",
                        _hover={"text_decoration": "underline"},
                    ),
                    spacing="1",
                    align="start",
                ),
                spacing="3",
                align="start",
                width="100%",
            ),

            # ── Bio ────────────────────────────────────────────
            rx.text(
                profile["bio"],
                font_size=SIZE["sm"],
                color=rx.cond(
                    State.dark_mode,
                    "rgba(255,255,255,0.6)",
                    "#6b7280",
                ),
                line_height="1.6",
                font_family=FONT_SANS,
                no_of_lines=3,
            ),

            # ── Notable ────────────────────────────────────────
            rx.cond(
                profile["notable"] != "",
                rx.hstack(
                    rx.text("⚡", font_size=SIZE["xs"]),
                    rx.text(
                        profile["notable"],
                        font_size=SIZE["xs"],
                        color=rx.cond(
                            State.dark_mode,
                            "rgba(255,255,255,0.45)",
                            "#9ca3af",
                        ),
                        font_family=FONT_SANS,
                        no_of_lines=1,
                    ),
                    spacing="1",
                    align="center",
                ),
                rx.fragment(),
            ),

            # ── Tags ───────────────────────────────────────────
            rx.flex(
                rx.foreach(profile["tags"], _tag_pill),
                flex_wrap="wrap",
                gap="6px",
            ),

            # ── Footer row ─────────────────────────────────────
            rx.hstack(
                # Location
                rx.cond(
                    profile["location"] != "",
                    rx.hstack(
                        rx.text("📍", font_size=SIZE["xs"]),
                        rx.text(
                            profile["location"],
                            font_size=SIZE["xs"],
                            color=rx.cond(
                                State.dark_mode,
                                "rgba(255,255,255,0.4)",
                                "#9ca3af",
                            ),
                            font_family=FONT_SANS,
                        ),
                        spacing="1",
                        align="center",
                    ),
                    rx.fragment(),
                ),
                rx.spacer(),
                # GitHub button
                rx.link(
                    rx.hstack(
                        rx.text("View", font_size=SIZE["xs"], font_weight=WEIGHT["medium"]),
                        rx.text("→", font_size=SIZE["xs"]),
                        spacing="1",
                        align="center",
                    ),
                    href=gh_url,
                    is_external=True,
                    padding="4px 12px",
                    border_radius=RADIUS["full"],
                    background="rgba(108,61,255,0.15)",
                    color="#a78bfa",
                    border="1px solid rgba(108,61,255,0.3)",
                    font_size=SIZE["xs"],
                    text_decoration="none",
                    _hover={
                        "background": "#6c3dff",
                        "color": "#ffffff",
                    },
                    transition=TRANSITION,
                ),
                width="100%",
                align="center",
            ),

            spacing="4",
            align="start",
            width="100%",
        ),

        # ── Card shell ─────────────────────────────────────────
        padding="20px",
        border_radius=RADIUS["lg"],
        background=rx.cond(
            State.dark_mode,
            "rgba(22,22,22,0.95)",
            "#ffffff",
        ),
        border=rx.cond(
            State.dark_mode,
            "1px solid rgba(255,255,255,0.07)",
            "1px solid rgba(0,0,0,0.07)",
        ),
        box_shadow=rx.cond(
            State.dark_mode,
            SHADOW_CARD,
            "0 1px 4px rgba(0,0,0,0.08)",
        ),
        transition=TRANSITION,
        _hover={
            "transform": "translateY(-3px)",
            "box_shadow": rx.cond(
                State.dark_mode,
                "0 8px 32px rgba(108,61,255,0.2)",
                "0 8px 24px rgba(0,0,0,0.12)",
            ),
            "border_color": "rgba(108,61,255,0.3)",
        },
        cursor="default",
    )
