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
  const navStyleCommon = 'w-3/6 top-0 left-0 z-50 h-20 fixed z-50 align-middle text-white bg-neutral-900/0 text-2xl font-bold p-4';

  const navStyle = `${navStyleCommon} ${isScrolled ? 'bg-neutral-600/100' : 'bg-neutral-600/50'}`;
  

  return (
    <div className={navStyle}>
      Sahiru WIjesinghe
    </div>

  )
}

export default Navbar