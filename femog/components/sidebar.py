"""
femog/components/sidebar.py
============================
Left sidebar — label filter chips + result count.
"""

from __future__ import annotations

import reflex as rx

from femog.state import State
from femog.styles import FONT_SANS, RADIUS, SIDEBAR_WIDTH, SIZE, TRANSITION, WEIGHT


def sidebar() -> rx.Component:
    return rx.box(
        rx.vstack(
            # ── Header ──────────────────────────────────────────
            rx.hstack(
                rx.text(
                    "Filter by specialty",
                    font_size=SIZE["sm"],
                    font_weight=WEIGHT["semi"],
                    color=rx.cond(State.dark_mode, "#f0f0f0", "#111827"),
                    font_family=FONT_SANS,
                ),
                rx.spacer(),
                rx.cond(
                    State.has_active_filters,
                    rx.text(
                        "Clear",
                        font_size=SIZE["xs"],
                        color="#6c3dff",
                        cursor="pointer",
                        on_click=State.clear_filters,
                        _hover={"text_decoration": "underline"},
                    ),
                    rx.fragment(),
                ),
                width="100%",
                align="center",
            ),

            # ── Result count ─────────────────────────────────────
            rx.text(
                rx.cond(
                    State.has_active_filters,
                    State.result_count.to_string() + " / " + State.total_count.to_string() + " profiles",
                    State.total_count.to_string() + " profiles",
                ),
                font_size=SIZE["xs"],
                color=rx.cond(
                    State.dark_mode,
                    "rgba(255,255,255,0.4)",
                    "#9ca3af",
                ),
                font_family=FONT_SANS,
            ),

            # ── Label chips ──────────────────────────────────────
            rx.foreach(
                State.all_labels,
                lambda lbl: rx.box(
                    rx.hstack(
                        rx.text(lbl["icon"], font_size=SIZE["sm"]),
                        rx.text(
                            lbl["name"],
                            font_size=SIZE["sm"],
                            font_weight=WEIGHT["medium"],
                            font_family=FONT_SANS,
                        ),
                        spacing="2",
                        align="center",
                        width="100%",
                    ),
                    padding="8px 14px",
                    border_radius=RADIUS["md"],
                    cursor="pointer",
                    transition=TRANSITION,
                    on_click=State.toggle_tag(lbl["id"]),
                    background=rx.cond(
                        State.active_tags.contains(lbl["id"]),
                        "rgba(108,61,255,0.2)",
                        rx.cond(
                            State.dark_mode,
                            "transparent",
                            "transparent",
                        ),
                    ),
                    border=rx.cond(
                        State.active_tags.contains(lbl["id"]),
                        "1.5px solid rgba(108,61,255,0.6)",
                        "1.5px solid transparent",
                    ),
                    color=rx.cond(
                        State.active_tags.contains(lbl["id"]),
                        "#a78bfa",
                        rx.cond(State.dark_mode, "rgba(255,255,255,0.7)", "#374151"),
                    ),
                    _hover={
                        "background": "rgba(108,61,255,0.12)",
                        "color": "#a78bfa",
                        "border_color": "rgba(108,61,255,0.4)",
                    },
                    width="100%",
                ),
            ),

            spacing="2",
            align="start",
            width="100%",
        ),
        width=SIDEBAR_WIDTH,
        min_width=SIDEBAR_WIDTH,
        padding="24px 16px",
        border_right=rx.cond(
            State.dark_mode,
            "1px solid rgba(255,255,255,0.06)",
            "1px solid rgba(0,0,0,0.08)",
        ),
        height="100%",
        overflow_y="auto",
        position="sticky",
        top="64px",
        align_self="start",
        max_height="calc(100vh - 64px)",
    )
