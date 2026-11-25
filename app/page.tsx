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
  } = useProfiles();

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Hero */}
        <HeroSection />

        {/* Search + filters */}
        <section aria-label="Find engineers" className="grid items-start gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
          <SearchBar value={filters.search} onChange={setSearch} />
          <FilterBar
            selectedCategories={filters.categories}
            onToggleCategory={toggleCategory}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </section>

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
