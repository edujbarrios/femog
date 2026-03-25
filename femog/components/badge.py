"""
femog/components/badge.py
=========================
Reusable label / tag badge component.
"""

from __future__ import annotations

import reflex as rx
from femog.styles import RADIUS, SIZE, TRANSITION, WEIGHT


def label_badge(
    icon: str,
    name: str,
    color: str,
    text_color: str,
    active: rx.Var | bool = False,
    on_click=None,
    small: bool = False,
) -> rx.Component:
    """
    Pill-shaped badge for a profile label.

    Parameters
    ----------
    icon       : emoji / icon character
    name       : display name
    color      : background hex when active or always-on
    text_color : text hex
    active     : reactive bool — highlights the badge
    on_click   : optional click handler (for filter sidebar)
    small      : render a compact variant (profile card tags)
    """
    pad = "2px 8px" if small else "5px 14px"
    fsize = SIZE["xs"] if small else SIZE["sm"]

    return rx.box(
        rx.hstack(
            rx.text(icon, font_size=fsize),
            rx.text(
                name,
                font_size=fsize,
                font_weight=WEIGHT["medium"],
                white_space="nowrap",
            ),
            spacing="1",
            align="center",
        ),
        padding=pad,
        border_radius=RADIUS["full"],
        background=rx.cond(active, color, "rgba(255,255,255,0.07)"),
        color=rx.cond(active, text_color, "inherit"),
        border=rx.cond(
            active,
            f"1.5px solid {color}",
            "1.5px solid rgba(255,255,255,0.12)",
        ),
        cursor="pointer" if on_click else "default",
        transition=TRANSITION,
        _hover={
            "background": color,
            "color": text_color,
            "border_color": color,
            "transform": "translateY(-1px)",
        },
        on_click=on_click,
        display="inline-flex",
        align_items="center",
    )
