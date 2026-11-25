import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'secondary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 disabled:pointer-events-none disabled:opacity-40',
        variant === 'primary' &&
          'bg-accent-solid text-accent-ink hover:bg-accent-hover active:bg-accent',
        variant === 'secondary' &&
          'bg-surface-hover text-ink hover:bg-surface-hover hover:text-ink',
        variant === 'ghost' &&
          'text-ink-secondary hover:bg-raised hover:text-ink',
        variant === 'outline' &&
          'border border-control-border text-ink-secondary hover:border-accent hover:text-ink',
        size === 'sm' && 'px-3 py-1.5 text-xs',
        size === 'md' && 'px-4 py-2 text-sm',
        size === 'lg' && 'px-5 py-2.5 text-base',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
