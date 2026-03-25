"""
femog/styles.py
===============
Design token system for FEMOG — single source of truth for colors,
typography, spacing and component variants.

Dark-mode is the default; light-mode tokens are in the LIGHT dict.
"""

from __future__ import annotations

# ── Color palette ────────────────────────────────────────────────────────────

DARK = {
    "bg_page":       "#0d0d0d",
    "bg_card":       "#161616",
    "bg_card_hover": "#1f1f1f",
    "bg_nav":        "#111111",
    "bg_sidebar":    "#131313",
    "bg_input":      "#1a1a1a",
    "border":        "#272727",
    "border_focus":  "#444444",
    "text_primary":  "#f0f0f0",
    "text_secondary":"#9ca3af",
    "text_muted":    "#6b7280",
    "accent":        "#6c3dff",
    "accent_soft":   "#2d1f6e",
    "link":          "#818cf8",
    "tag_active_bg": "#6c3dff",
    "tag_idle_bg":   "#1e1e2f",
}

LIGHT = {
    "bg_page":       "#f8f8f8",
    "bg_card":       "#ffffff",
    "bg_card_hover": "#f3f4f6",
    "bg_nav":        "#ffffff",
    "bg_sidebar":    "#f9fafb",
    "bg_input":      "#ffffff",
    "border":        "#e5e7eb",
    "border_focus":  "#9ca3af",
    "text_primary":  "#111827",
    "text_secondary":"#374151",
    "text_muted":    "#9ca3af",
    "accent":        "#6c3dff",
    "accent_soft":   "#ede9fe",
    "link":          "#4f46e5",
    "tag_active_bg": "#6c3dff",
    "tag_idle_bg":   "#ede9fe",
}

# ── Typography ───────────────────────────────────────────────────────────────

FONT_SANS  = "'Inter', 'Segoe UI', system-ui, sans-serif"
FONT_MONO  = "'JetBrains Mono', 'Fira Code', monospace"

SIZE = {
    "xs":  "0.75rem",
    "sm":  "0.875rem",
    "base":"1rem",
    "lg":  "1.125rem",
    "xl":  "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
}

WEIGHT = {
    "normal": "400",
    "medium": "500",
    "semi":   "600",
    "bold":   "700",
}

# ── Spacing ──────────────────────────────────────────────────────────────────

RADIUS = {
    "sm":   "6px",
    "md":   "10px",
    "lg":   "16px",
    "full": "9999px",
}

# ── Transition ───────────────────────────────────────────────────────────────

TRANSITION = "all 0.18s ease"

# ── Layout ───────────────────────────────────────────────────────────────────

NAV_HEIGHT    = "64px"
SIDEBAR_WIDTH = "260px"
CARD_MIN_W    = "280px"
MAX_CONTENT_W = "1400px"

# ── Shadow ────────────────────────────────────────────────────────────────────

SHADOW_CARD = "0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)"
SHADOW_NAV  = "0 1px 0 rgba(255,255,255,0.04)"
