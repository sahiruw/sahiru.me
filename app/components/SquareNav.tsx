'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoConstructOutline,
  IoBriefcaseOutline,
  IoCallOutline,
  IoNewspaperOutline,
} from 'react-icons/io5';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-md border border-white/30 shadow-lg w-11/12 rounded-3xl">
      <a
        aria-current="page"
        className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
        href="#"
      >
        <IoHomeOutline className="w-7 h-7" />
        <span className="sr-only">Home</span>
      </a>
      <a
        className="inline-flex flex-col items-center text-xs font-medium text-neutral-200 py-3 px-4 flex-grow"
        href="#"
      >
        <IoInformationCircleOutline className="w-7 h-7" />
        <span className="sr-only">About</span>
      </a>
      <button className="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow">
        <div className="absolute bottom-5 p-3 rounded-full border-2 border-white bg-blue-600">
          <IoCallOutline className="w-7 h-7" />
        </div>
        <span className="sr-only">Chat</span>
      </button>
      <a
        className="inline-flex flex-col items-center text-xs font-medium text-neutral-200 py-3 px-4 flex-grow"
        href="#"
      >
        <IoBriefcaseOutline className="w-7 h-7" />
        <span className="sr-only">Search</span>
      </a>
      <a
        className="inline-flex flex-col items-center text-xs font-medium text-neutral-200 py-3 px-4 flex-grow"
        href="#"
      >
        <IoNewspaperOutline className="w-7 h-7" />
        <span className="sr-only">Profile</span>
      </a>
    </div>
  );
};

export default Navbar;
