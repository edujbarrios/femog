'use client';

import { CATEGORIES } from '@/data/categories';
import { PROFILES } from '@/data/profiles';
import type { CategoryId } from '@/types';
import { cn } from '@/lib/utils';
import { SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  selectedCategories: CategoryId[];
  onToggleCategory: (id: CategoryId) => void;
  resultCount: number;
  totalCount: number;
}

export function FilterBar({
  selectedCategories,
  onToggleCategory,
  resultCount,
  totalCount,
}: FilterBarProps) {
  // Pre-compute how many profiles exist per category
  const categoryCounts = Object.fromEntries(
    CATEGORIES.map((cat) => [
      cat.id,
      PROFILES.filter((p) => p.categories.includes(cat.id)).length,
    ]),
  );

  return (
    <div className="space-y-4">
      {/* Category pill buttons */}
      <div>
        <h3 className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/35">
          <SlidersHorizontal size={11} aria-hidden="true" />
          Filter by role
        </h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategories.includes(cat.id);
            const count = categoryCounts[cat.id] ?? 0;
            return (
              <button
                key={cat.id}
                onClick={() => onToggleCategory(cat.id)}
                aria-pressed={isActive}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150',
                  isActive
                    ? 'scale-[1.04] shadow-md'
                    : 'border-white/10 bg-white/5 text-white/45 hover:border-white/20 hover:bg-white/8 hover:text-white/70',
                )}
                style={
                  isActive
                    ? {
                        color: cat.color,
                        backgroundColor: cat.bgColor,
                        borderColor: cat.borderColor,
                      }
                    : undefined
                }
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.label}
                <span
                  className={cn(
                    'rounded-full px-1.5 py-px text-[10px] font-semibold',
                    isActive ? 'bg-white/20' : 'bg-white/8 text-white/35',
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center">
        <p className="text-sm text-white/35">
          Showing{' '}
          <span className="font-semibold text-white/65">{resultCount}</span>{' '}
          of {totalCount} profiles
        </p>
      </div>
    </div>
  );
}
