'use client';
import { browser } from 'process';
import React, { useEffect, useState } from 'react'
import { IoHomeOutline, IoInformationCircleOutline, IoConstructOutline, IoBriefcaseOutline, IoCallOutline, IoNewspaperOutline } from 'react-icons/io5';


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D';
  let navItems = ['HOME', 'ABOUT', 'WORK', 'SERVICES', 'CONTACT', 'BLOG']
  let icons = [<IoHomeOutline />, <IoInformationCircleOutline />, <IoBriefcaseOutline />, <IoConstructOutline />, <IoCallOutline />, <IoNewspaperOutline />]
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
  let navStyle = 'gap-0 columns-6 w-2/6 top-0 z-50 left-2/3 transition-all duration-100 ease-in-out ';
  let navItemWHoleStyle = 'hover:bg-orange-700/100  h-full text-center bg-cover transition-all duration-300 ease-in-out '; //border-opacity-0 border-dotted border-r-2 
  let navIndexStyle = 'text-[36px] flex justify-center items-center ';

  // Conditional styles
  navStyle = `${navStyle} ${isScrolled ? 'bg-orange-900/100 h-20 fixed' : 'bg-orange-800/25 h-screen absolute'}`;
  const navItemStyle = isScrolled ? 'text-[15px] -my-12 text-neutral-50/100 ' : '-rotate-90 text-[36px] text-neutral-50/75 ';
  navIndexStyle = isScrolled ? `${navIndexStyle} text-neutral-50/25 h-20` : `${navIndexStyle} text-neutral-50  h-1/6`;
  navItemWHoleStyle = isScrolled ? navItemWHoleStyle : `${navItemWHoleStyle} space-y-[calc(65dvh)]`;

  return (
    <div className="absolute inset-0">
    <div className={navStyle}>
      {navItems.map((item, index) => {
        return (
          <div key={index} className={navItemWHoleStyle}>
            {/* <div key={index} className={navItemWHoleStyle + " z-20"} style={{ backgroundImage: `url(${backgroundImageUrl})`, opacity: 0.5 }}> */}
            <div className={navIndexStyle}>{icons[index]}</div>
            {/* <div className={navIndexStyle}>{index + 1}</div> */}
            <div className={navItemStyle}>{item}</div>
            {/* </div> */}
          </div>
        )
      })
      }
    </div></div>

  )
}

export default Navbar