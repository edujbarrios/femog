import { cn } from '@/lib/utils';
import type { ReactNode, CSSProperties } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'featured';
  className?: string;
  style?: CSSProperties;
}

export function Badge({
  children,
  variant = 'default',
  className,
  style,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-surface-hover text-ink',
        variant === 'outline' && 'border border-control-border text-ink-secondary',
        variant === 'featured' &&
          'border border-yellow-500/30 bg-yellow-500/15 text-yellow-400',
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}
