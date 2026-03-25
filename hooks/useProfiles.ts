'use client';

import { useState, useMemo, useCallback } from 'react';
import { PROFILES } from '@/data/profiles';
import { filterProfiles } from '@/lib/utils';
import type { FilterState, CategoryId } from '@/types';

const DEFAULT_FILTERS: FilterState = {
  search: '',
  categories: [],
};

/**
 * Central hook for profile filtering, search, and sort state.
 * Memoizes the filtered result to avoid redundant recalculations.
 */
export function useProfiles() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filteredProfiles = useMemo(
    () => filterProfiles(PROFILES, filters),
    [filters],
  );

  const toggleCategory = useCallback((categoryId: CategoryId) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((c) => c !== categoryId)
        : [...prev.categories, categoryId],
    }));
  }, []);

  const setSearch = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const hasActiveFilters =
    filters.search.trim() !== '' || filters.categories.length > 0;

  return {
    profiles: filteredProfiles,
    filters,
    toggleCategory,
    setSearch,
    clearFilters,
    hasActiveFilters,
    totalCount: PROFILES.length,
  };
}
