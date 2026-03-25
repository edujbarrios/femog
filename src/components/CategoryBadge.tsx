import type { Category } from '@/types';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md';
}

/**
 * Colored pill badge for an engineering category.
 * Colors are driven by category.color / bgColor / borderColor.
 */
export function CategoryBadge({ category, size = 'md' }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium ${
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
      }`}
      style={{
        color: category.color,
        backgroundColor: category.bgColor,
        borderColor: category.borderColor,
      }}
    >
      <span aria-hidden="true">{category.icon}</span>
      {category.label}
    </span>
  );
}
