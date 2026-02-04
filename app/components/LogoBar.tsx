'use client';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
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
  const navStyleCommon = 'font-mono text-orange-700 w-full top-0 left-0 z-50 h-16 sm:h-20 fixed align-middle text-xl sm:text-2xl font-bold px-4 py-3 sm:p-4 bg-neutral-900';

  const navStyle = `${navStyleCommon} ${isScrolled ? 'visible' : 'invisible'}`;
  

  return (
    <div className={navStyle}>
      Sahiru Wijesinghe
    </div>

  )
}

export default Navbar