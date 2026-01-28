import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'light', className }: LogoProps) {
  // Mobile-first sizing (w-20 approx 80px)
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 font-semibold tracking-wide uppercase select-none ${className}`}
      aria-label="IC Studio Inicio"
    >
      <div className="relative w-16 h-8 md:w-20 md:h-10">
        <Image
          src={
            variant === 'light'
              ? '/images/logo_white_new.png'
              : '/images/logo_black_new.png'
          }
          alt="IC Studio Logo"
          fill
          sizes="(max-width: 768px) 64px, 80px"
          className="object-contain"
          priority
        />
      </div>
      <span
        className={
          variant === 'light'
            ? 'text-bone text-base md:text-lg tracking-[0.1em]'
            : 'text-green-dark text-base md:text-lg tracking-[0.1em]'
        }
      >
        IC Studio
      </span>
    </Link>
  );
}
