'use client';

import { HeroSection } from '@/components/HeroSection';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';
import { ProfileGrid } from '@/components/ProfileGrid';
import { useProfiles } from '@/hooks/useProfiles';

export default function HomePage() {
  const {
    profiles,
    filters,
    toggleCategory,
    setSearch,
    clearFilters,
    hasActiveFilters,
    totalCount,
  } = useProfiles();

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Hero */}
        <HeroSection />

        {/* Search + filters */}
        <div className="space-y-4 rounded-2xl border border-line bg-surface p-4 sm:p-5">
          <SearchBar value={filters.search} onChange={setSearch} />
          <FilterBar
            selectedCategories={filters.categories}
            onToggleCategory={toggleCategory}
            resultCount={profiles.length}
            totalCount={totalCount}
          />
        </div>

        {/* Profile grid */}
        <ProfileGrid
          profiles={profiles}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearFilters}
        />
      </div>
    </main>
  );
}
