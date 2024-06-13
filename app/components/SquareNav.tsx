'use client';
import { browser } from 'process';
import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common styles
  const navStyleCommon = 'gap-0 columns-6 w-3/6 top-0 right-0 z-50';
  const navItemWHoleStyleCommon = 'h-full text-center text-white hover:text-sky-400/25 w-full';
  const navIndexStyleCommon = 'text-[56px]';

  // Conditional styles
  const navStyle = `${navStyleCommon} ${isScrolled ? 'bg-neutral-600/100 h-20 fixed' : 'bg-neutral-600/50 h-screen absolute'}`;
  const navItemStyle = isScrolled ? 'text-[15px] -my-14' : '-rotate-90 text-[56px]';
  const navIndexStyle = isScrolled ? `${navIndexStyleCommon} text-neutral-50/25` : `${navIndexStyleCommon} text-neutral-50`;
  const navItemWHoleStyle = isScrolled ? navItemWHoleStyleCommon : `${navItemWHoleStyleCommon} space-y-[450px]`;


  let navItems = ['HOME', 'ABOUT', 'SERVICES', 'WORK', 'CONTACT', 'BLOG']
  return (
    <div className={navStyle}>
      {navItems.map((item, index) => {
        return (
          <div key={index} className={navItemWHoleStyle}>
            <div className={navIndexStyle}>{index + 1}</div>
            <div className={navItemStyle}>{item}</div>
          </div>
        )
      })
      }
    </div>

  )
}

export default Navbar