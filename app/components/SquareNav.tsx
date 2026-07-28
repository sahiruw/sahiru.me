'use client'
import React from "react";
import { FloatingDock } from "./ui/floating-dock";

import {
  IoHomeOutline,
  IoWarningOutline,
  IoConstructOutline,
  IoBriefcaseOutline,
  IoGitNetworkOutline,
  IoHelpCircleOutline,
  IoCallOutline,
} from 'react-icons/io5';

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IoHomeOutline className="h-full w-full text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Problems Solved",
      icon: (
        <IoWarningOutline className="h-full w-full text-neutral-300" />
      ),
      href: "#problems",
    },
    {
      title: "Services",
      icon: (
        <IoConstructOutline className="h-full w-full text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Case Studies",
      icon: (
        <IoBriefcaseOutline className="h-full w-full text-neutral-300" />
      ),
      href: "#work",
    },
    {
      title: "Process",
      icon: (
        <IoGitNetworkOutline className="h-full w-full text-neutral-300" />
      ),
      href: "#process",
    },
    {
      title: "FAQ",
      icon: (
        <IoHelpCircleOutline className="h-full w-full text-neutral-300" />
      ),
      href: "#faq",
    },
    {
      title: "Discuss Project",
      icon: (
        <IoCallOutline className="h-full w-full text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between w-11/12 max-w-max rounded-3xl transition-colors duration-300 z-50`}>
      <FloatingDock
        items={links}
      />
    </div>
  );
}
