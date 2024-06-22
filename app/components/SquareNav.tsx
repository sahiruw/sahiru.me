'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoHomeOutline, IoInformationCircleOutline, IoConstructOutline, IoBriefcaseOutline, IoCallOutline, IoNewspaperOutline } from 'react-icons/io5';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ['HOME', 'ABOUT', 'WORK', 'SERVICES', 'CONTACT', 'BLOG'];
  const icons = [<IoHomeOutline />, <IoInformationCircleOutline />, <IoBriefcaseOutline />, <IoConstructOutline />, <IoCallOutline />, <IoNewspaperOutline />];
  const images = [
    '/nav/home.png',
    '/nav/about.png',
    '/nav/work.png',
    '/nav/services.png',
    '/nav/contact.png',
    '/nav/blog.png',
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("resize", () => console.log(window.innerWidth));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", () => console.log(window.innerWidth));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = `invisible sm:visible gap-0 columns-6 w-2/6 top-0 z-50 left-2/3 transition-all duration-100 ease-in-out ${isScrolled ? 'left-1/3 md:left-2/3 w-4/6 md:w-2/6 bg-orange-900/100 h-20 fixed' : 'bg-orange-800/25 h-screen absolute'}`;
  const navItemWholeStyle = `hover:bg-orange-700/100 h-full text-center bg-cover transition-all duration-300 ease-in-out ${isScrolled ? '' : 'space-y-[calc(65dvh)]'}`;
  const navItemStyle = isScrolled ? 'text-[15px] -my-12 text-neutral-50/100 ' : '-rotate-90 text-[36px] text-neutral-50/75 ';
  const navIndexStyle = isScrolled ? 'text-[36px] flex justify-center items-center text-neutral-50/25 h-20' : 'text-[36px] flex justify-center items-center text-neutral-50 h-1/6';

  return (
    <div className="absolute inset-0">

      <div className={navStyle}>
        {navItems.map((item, index) => (
          <Link href={`#${item.toLowerCase()}`} onClick={(e) => {
            e.preventDefault();
            document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" })
          }}>
            <div key={index} className={navItemWholeStyle} style={{ backgroundImage: `url(${images[index]})`, opacity: 0.8 }}>
              <div className={navIndexStyle}>{icons[index]}</div>
              <div className={navItemStyle}>{item}</div>
            </div>
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default Navbar;
