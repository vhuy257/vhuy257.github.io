'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from './button';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="relative h-10 w-10 rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full border-1 border-gray-500/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-accent/50"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
    </Button>
  );
}
