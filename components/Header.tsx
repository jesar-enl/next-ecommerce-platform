'use client';

import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cn('py-3 bg-background drop-shadow-md')}>
      <nav className="flex gap-10 items-center container">
        <Link href="/">
          <p className="text-5xl font-black text-yellow-500">JES</p>
          <p className="text-xs">J E-Commerce Shopify</p>
        </Link>

        <div className="ms-auto">
          <Button variant='ghost' onClick={handleThemeChange}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </nav>
    </div>
  );
}
