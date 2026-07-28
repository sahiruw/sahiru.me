'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LuArrowRight, LuCalendar, LuFileText } from 'react-icons/lu';

const HelloCard = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-[100dvh] lg:h-screen lg:max-h-[920px] flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto text-center"
    >
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-3 sm:mb-4"
      >
        <div className="relative mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden ring-2 ring-[var(--border)] ring-offset-4 ring-offset-[var(--bg)] shadow-md">
          <Image
            src="/me3.png"
            alt="Sahiru Wijesinghe"
            fill
            sizes="80px"
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
      >
        <span
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full border"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-muted)' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available · Freelance Engineer & Consultant
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="text-3xl sm:text-5xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.12] max-w-3xl mb-3 sm:mb-4"
        style={{ color: 'var(--text)' }}
      >
        Hi, I&apos;m Sahiru Wijesinghe.{' '}
        <span className="italic" style={{ color: 'var(--amber)' }}>
          I build smart automations & custom software.
        </span>
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.22 }}
        className="text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans mb-5 sm:mb-6"
        style={{ color: 'var(--text-muted)' }}
      >
        I work with individuals, small businesses, and growing teams to build the right solution: a smarter spreadsheet system, a custom web app, or an AI workflow — whatever actually solves your problem.
      </motion.p>

      {/* Three CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.28 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-6 sm:mb-8"
      >
        <a
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          style={{
            background: 'var(--amber)',
            color: '#fff',
          }}
        >
          <LuCalendar className="text-base" />
          Book a free 30-min call
        </a>

        <a
          href="#work"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium text-xs sm:text-sm border transition-all duration-200 hover:-translate-y-0.5"
          style={{
            borderColor: 'var(--border)',
            background: 'var(--bg-card)',
            color: 'var(--text-muted)',
          }}
        >
          See my work
          <LuArrowRight className="text-xs" style={{ color: 'var(--amber)' }} />
        </a>

        <a
          href="/Sahiru 1.2.1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium text-xs sm:text-sm border transition-all duration-200 hover:-translate-y-0.5"
          style={{
            borderColor: 'var(--border)',
            background: 'var(--bg-card)',
            color: 'var(--text-muted)',
          }}
        >
          <LuFileText className="text-sm" style={{ color: 'var(--amber)' }} />
          View Engineering Resume
        </a>
      </motion.div>

      {/* Trust Signal Cards */}
      {/* <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="w-full grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl text-left"
      >
        <div
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="font-serif font-bold text-base sm:text-xl" style={{ color: 'var(--amber)' }}>6+ Years</div>
          <div className="text-[11px] sm:text-xs mt-0.5 font-sans" style={{ color: 'var(--text-muted)' }}>Full-Stack &amp; Automation</div>
        </div>

        <div
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="font-serif font-bold text-base sm:text-xl" style={{ color: 'var(--amber)' }}>Fortune 500</div>
          <div className="text-[11px] sm:text-xs mt-0.5 font-sans" style={{ color: 'var(--text-muted)' }}>Software Engineer (Sysco)</div>
        </div>

        <div
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="font-serif font-bold text-base sm:text-xl" style={{ color: 'var(--amber)' }}>600+ Solutions</div>
          <div className="text-[11px] sm:text-xs mt-0.5 font-sans" style={{ color: 'var(--text-muted)' }}>Delivered to Global Clients</div>
        </div>

        <div
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="font-serif font-bold text-base sm:text-xl" style={{ color: 'var(--amber)' }}>1st Class Hons</div>
          <div className="text-[11px] sm:text-xs mt-0.5 font-sans" style={{ color: 'var(--text-muted)' }}>Univ. of Moratuwa (3.73 GPA)</div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default HelloCard;
