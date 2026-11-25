'use client';

import { useState, useMemo, useCallback } from 'react';
import { PROFILES } from '@/data/profiles';
import { filterProfiles } from '@/lib/utils';
import type { FilterState, CategoryId } from '@/types';

const DEFAULT_FILTERS: FilterState = {
  categories: [],
};

/**
 * Central hook for category filtering and sort state.
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

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const hasActiveFilters = filters.categories.length > 0;

  return {
    profiles: filteredProfiles,
    filters,
    toggleCategory,
    clearFilters,
    hasActiveFilters,
    totalCount: PROFILES.length,
  };
}
