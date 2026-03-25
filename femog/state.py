"""
femog/state.py
==============
Global reactive state for FEMOG.

Handles:
- Active label filters (multi-select)
- Search query
- Dark / Light mode toggle
- Derived filtered profile list
"""

from __future__ import annotations

import reflex as rx

from femog.data.labels import ALL_LABEL_IDS, LABELS
from femog.data.profiles import PROFILES


class State(rx.State):
    """Root application state."""

    # ── theme ────────────────────────────────────────────────────────────────
    dark_mode: bool = True

    def toggle_dark_mode(self) -> None:
        self.dark_mode = not self.dark_mode

    # ── search & filters ─────────────────────────────────────────────────────
    search_query: str = ""
    active_tags: list[str] = []  # empty = show all

    def set_search(self, value: str) -> None:
        self.search_query = value.lower().strip()

    def toggle_tag(self, tag_id: str) -> None:
        if tag_id in self.active_tags:
            self.active_tags = [t for t in self.active_tags if t != tag_id]
        else:
            self.active_tags = [*self.active_tags, tag_id]

    def clear_filters(self) -> None:
        self.active_tags = []
        self.search_query = ""

    # ── derived: filtered profiles ────────────────────────────────────────────
    @rx.var
    def filtered_profiles(self) -> list[dict]:
        results = PROFILES

        # tag filter — profile must match ALL active tags
        if self.active_tags:
            results = [
                p for p in results
                if all(t in p["tags"] for t in self.active_tags)
            ]

        # text search — login, name, bio, notable, location
        if self.search_query:
            q = self.search_query
            results = [
                p for p in results
                if (
                    q in p["login"].lower()
                    or q in p["name"].lower()
                    or q in p["bio"].lower()
                    or q in p.get("notable", "").lower()
                    or q in p.get("location", "").lower()
                )
            ]

        return results

    @rx.var
    def result_count(self) -> int:
        return len(self.filtered_profiles)

    @rx.var
    def total_count(self) -> int:
        return len(PROFILES)

    @rx.var
    def has_active_filters(self) -> bool:
        return bool(self.active_tags) or bool(self.search_query)

    # ── label helpers (passed to UI as computed props) ────────────────────────
    @rx.var
    def all_labels(self) -> list[dict]:
        return LABELS

    def tag_is_active(self, tag_id: str) -> bool:  # called from component py
        return tag_id in self.active_tags
