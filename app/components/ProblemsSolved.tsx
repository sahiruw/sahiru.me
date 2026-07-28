'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuFileSpreadsheet, LuClock, LuUnplug, LuPuzzle, LuArrowRight, LuCheckCircle2 } from 'react-icons/lu';

const painPoints = [
  {
    icon: LuFileSpreadsheet,
    problem: "No Proper System for Your Workflow",
    problemDesc: "You're managing things in spreadsheets, notes, or your head - and it mostly works, but you know there's a better way or you need something more structured.",
    solution: "Whether it's a smarter spreadsheet setup, a lightweight web tool, or a full app - I scope the right solution for your situation and budget.",
    accent: "amber",
  },
  {
    icon: LuClock,
    problem: "Manual Reporting & Data Entry",
    problemDesc: "Staff spending 10+ hours weekly copying data across apps, building manual PDFs, and emailing updates.",
    solution: "End-to-end automated pipelines that calculate metrics, generate reports, and sync databases automatically.",
    accent: "violet",
  },
  {
    icon: LuUnplug,
    problem: "No Single Source of Truth",
    problemDesc: "Data lives in different places - emails, chats, separate sheets - and nobody's sure which version is right. Things fall through the cracks.",
    solution: "A simple web app or structured spreadsheet system that becomes your one reliable record. No more version confusion.",
    accent: "amber",
  },
  {
    icon: LuPuzzle,
    problem: "Repetitive Work Eating Your Time",
    problemDesc: "You or your team spend hours every week doing the same copy-paste, reformatting, or generating the same report manually.",
    solution: "Automated pipelines that do the repetitive work for you - triggered on a schedule or when data changes.",
    accent: "violet",
  }
];

const ProblemsSolved = () => {
  return (
    <section
      className="py-24 relative z-10 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
      id="problems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
            style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
          >
            Sound familiar?
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            Is This You?
          </h2>
          <p className="text-base sm:text-lg mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
            I work with solo founders, small teams, and growing businesses to untangle these exact problems - choosing the right approach for your size and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            const isAmber = item.accent === 'amber';
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="p-3 rounded-xl border"
                      style={{
                        background: isAmber ? 'var(--amber-light)' : 'rgba(124,58,237,0.1)',
                        borderColor: isAmber ? 'var(--amber)' : 'var(--violet)',
                        color: isAmber ? 'var(--amber)' : 'var(--violet)',
                      }}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold font-serif" style={{ color: 'var(--text)' }}>
                      {item.problem}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-6 font-sans" style={{ color: 'var(--text-muted)' }}>
                    {item.problemDesc}
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl border flex items-start gap-3"
                  style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}
                >
                  <LuCheckCircle2
                    className="text-base mt-0.5 flex-shrink-0"
                    style={{ color: isAmber ? 'var(--amber)' : 'var(--violet)' }}
                  />
                  <div>
                    <div className="text-[11px] font-bold font-mono uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                      What I&apos;d do
                    </div>
                    <p className="text-xs leading-relaxed font-sans" style={{ color: 'var(--text)' }}>
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: 'var(--amber)' }}
          >
            <span>Schedule a free scoping call</span>
            <LuArrowRight className="text-xs" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProblemsSolved;
