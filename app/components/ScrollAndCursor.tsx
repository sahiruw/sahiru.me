'use client';
import React, { useEffect, useState } from 'react';

export default function ScrollAndCursor() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    // Scroll progress handler
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollWidth((currentScroll / totalScroll) * 100);
      }
    };

    // Cursor position handler
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (window.innerWidth >= 768) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at the Top */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-violet-500 z-[100] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(245,158,11,0.5)]"
        style={{ width: `${scrollWidth}%` }}
      />

      {/* Mouse Cursor Trail (Faint Violet blurred circle on desktop) */}
      {isDesktop && (
        <div
          className="fixed pointer-events-none z-[45] w-8 h-8 rounded-full bg-violet-500/15 blur-md transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      )}
    </>
  );
}
