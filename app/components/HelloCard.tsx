'use client';
import React, { useState } from 'react';
import { FaCalendarAlt, FaBriefcase, FaGraduationCap, FaAward, FaBolt, FaArrowRight } from 'react-icons/fa';

const HelloCard = () => {
    const portraitUrl = '/me3.png';
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

    return (
        <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 max-w-6xl mx-auto text-center">

            {/* Top Pill - Differentiated Positioning */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md animate-pulse">
                <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
                AI & Backend Systems Engineer • Available for Select Consultations
            </div>

            {/* Main Value Proposition Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-none max-w-4xl">
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">intelligent software systems</span> that replace spreadsheets & automate operations.
            </h1>

            {/* Supporting Subheadline focused on Outcomes */}
            <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl font-normal leading-relaxed">
                I help growing companies eliminate manual workflows, modernize business
                processes, and build scalable cloud platforms.
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto px-4">
                <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
                >
                    <FaCalendarAlt className="text-base" />
                    Book Free 30-Min Strategy Call
                </a>

                <a
                    href="#work"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-700/80 border border-neutral-700 text-neutral-200 font-semibold text-sm transition-all duration-200 backdrop-blur-md hover:text-white"
                >
                    Explore Case Studies
                    <FaArrowRight className="text-xs" />
                </a>

                <a
                    href="/Sahiru 1.2.1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-neutral-200 font-medium text-sm transition-all border border-white/5"
                >
                    View Engineering Resume
                </a>
            </div>

            {/* Trust Signal Cards / Numbers */}
            <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl text-left">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <div className="text-blue-400 font-bold text-xl sm:text-2xl">6+ Years</div>
                    <div className="text-neutral-400 text-xs mt-1">Full-Stack & Automation</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <div className="text-blue-400 font-bold text-xl sm:text-2xl">Fortune 500</div>
                    <div className="text-neutral-400 text-xs mt-1">Software Engineer (Sysco)</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <div className="text-blue-400 font-bold text-xl sm:text-2xl">600+ Solutions</div>
                    <div className="text-neutral-400 text-xs mt-1">Delivered to Global Clients</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <div className="text-blue-400 font-bold text-xl sm:text-2xl">1st Class Hons</div>
                    <div className="text-neutral-400 text-xs mt-1">Univ. of Moratuwa (3.73 GPA)</div>
                </div>
            </div>

        </section>
    );
};

export default HelloCard;
