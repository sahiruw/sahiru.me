'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { LuSun, LuMoon } from 'react-icons/lu';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark mode"
      className="
        fixed top-4 right-4 z-[60]
        h-9 w-9 rounded-full
        flex items-center justify-center
        border transition-all duration-200
        shadow-sm
        bg-[var(--bg-card)] border-[var(--border)]
        text-[var(--text-muted)]
        hover:text-[var(--amber)] hover:border-[var(--amber)]
      "
    >
      {theme === 'dark'
        ? <LuSun className="text-base" />
        : <LuMoon className="text-base" />
      }
    </button>
  );
}
