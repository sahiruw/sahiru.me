'use client';
import { browser } from 'process';
import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D';
  let navItems = ['HOME', 'ABOUT', 'SERVICES', 'WORK', 'CONTACT', 'BLOG']
  let images = []

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false);
    }
  };

  const updateDimensions = () => {
    console.log(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common styles
  const navStyleCommon = 'gap-0 columns-6 w-2/6 top-0 right-0 z-50  transition-all duration-100 ease-in-out hover:w-3/6 ';
  const navItemWHoleStyleCommon = 'border-dotted border-r-2 h-full text-center bg-cover ';
  const navIndexStyleCommon = 'text-[56px] ';

  // Conditional styles
  const navStyle = `${navStyleCommon} ${isScrolled ? 'bg-neutral-600/100 h-20 fixed' : 'bg-neutral-600/50 h-screen absolute'}`;
  const navItemStyle = isScrolled ? 'text-[15px] -my-14 text-neutral-50/100 ' : '-rotate-90 text-[36px] text-neutral-50/75 ';
  const navIndexStyle = isScrolled ? `${navIndexStyleCommon} text-neutral-50/25` : `${navIndexStyleCommon} text-neutral-50`;
  const navItemWHoleStyle = isScrolled ? navItemWHoleStyleCommon : `${navItemWHoleStyleCommon} space-y-[500px]`;



  return (
    <div className={navStyle}>
      {navItems.map((item, index) => {
        return (
          <div key={index} className={navItemWHoleStyle}>
            {/* <div key={index} className={navItemWHoleStyle + " opacity-50"} style={{ backgroundImage: `url(${backgroundImageUrl})` }}> */}
              <div className={navIndexStyle}>{index + 1}</div>
              <div className={navItemStyle}>{item}</div>
            {/* </div> */}
          </div>
        )
      })
      }
    </div>

  )
}

export default Navbar