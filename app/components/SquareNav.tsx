'use client'
import React from "react";
import { FloatingDock } from "./ui/floating-dock";

import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoConstructOutline,
  IoBriefcaseOutline,
  IoCallOutline,
  IoNewspaperOutline,
} from 'react-icons/io5';

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IoHomeOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <IoInformationCircleOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Contact",
      icon: (
        <IoCallOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Projects",
      icon: (
        <IoBriefcaseOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#work",
    },
    {
      title: "Services",
      icon: (
        <IoConstructOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },

    {
      title: "Blog",
      icon: (
        <IoNewspaperOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    }
  ];

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between w-11/12 rounded-3xl transition-colors duration-300 z-50`}>
      <FloatingDock
        items={links}
      />
    </div>
  );
}
