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
  const navStyleCommon = 'w-4/6 top-0 left-0 z-49 h-20 fixed align-middle text-white text-2xl font-bold p-4 bg-neutral-900 ';

  const navStyle = `${navStyleCommon} ${isScrolled ? 'visible' : 'invisible'}`;
  

  return (
    <div className={navStyle}>
      Sahiru WIjesinghe
    </div>

  )
}

export default Navbar