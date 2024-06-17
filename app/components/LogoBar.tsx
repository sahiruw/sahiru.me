'use client';
import { browser } from 'process';
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
  const navStyleCommon = 'font-mono text-orange-700 w-4/6 top-0 left-0 z-50 h-16 fixed align-middle text-2xl font-bold p-4 bg-neutral-900 ';

  const navStyle = `${navStyleCommon} ${isScrolled ? 'visible' : 'invisible'}`;
  

  return (
    <div className={navStyle}>
      Sahiru WIjesinghe
    </div>

  )
}

export default Navbar