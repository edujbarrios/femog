'use client';

import { HeroSection } from '@/components/HeroSection';
import { FilterBar } from '@/components/FilterBar';
import { ProfileGrid } from '@/components/ProfileGrid';
import { useProfiles } from '@/hooks/useProfiles';

export default function HomePage() {
  const {
    profiles,
    filters,
    toggleCategory,
    clearFilters,
    hasActiveFilters,
  } = useProfiles();

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Hero */}
        <HeroSection />

        {/* Discover engineers by category */}
        <section aria-label="Discover by category" className="w-full max-w-xl">
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
