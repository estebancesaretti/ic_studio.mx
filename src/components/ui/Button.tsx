import Link from 'next/link';
import { cn } from '@/lib/utils';

import { ButtonHTMLAttributes, forwardRef } from 'react';

// Simplified button without excessive dependencies (radix/class-variance-authority)
// to keep it lightweight as requested ("No agregar librerías innecesarias").

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', href, children, ...props },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-light focus-visible:ring-offset-2';

    const variants = {
      primary:
        'bg-green-dark text-bone shadow-lg shadow-green-dark/25 hover:-translate-y-1 hover:shadow-xl',
      outline:
        'border border-white text-white bg-transparent hover:bg-white/15',
      ghost: 'bg-transparent text-green-dark hover:bg-green-dark/5',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-7 text-base',
      lg: 'h-14 px-9 text-lg',
    };

    const styles = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={styles} aria-label={props['aria-label']}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button };
