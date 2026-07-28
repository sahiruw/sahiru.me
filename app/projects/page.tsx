'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LuArrowLeft, LuCheckCircle, LuArrowRight } from 'react-icons/lu';
import ThemeToggle from '../components/ThemeToggle';

interface Project {
    id: number;
    title: string;
    category: string;
    shortDescription: string;
    tags: string[];
    urls: { url: string; title: string }[];
    problem: string;
    solution: string;
    results: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
      fetch('/api/projects')
          .then((res) => res.json())
          .then((data) => {
              if (Array.isArray(data.message)) {
                  setProjects(data.message);
              }
          })
          .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden px-4 sm:px-6 lg:px-8 py-12"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Grain texture */}
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold mb-8 transition-colors hover:opacity-80"
            style={{ color: 'var(--amber)' }}
        >
            <LuArrowLeft className="text-sm" /> Back to Home
        </Link>

        <div className="mb-12">
            <span
                className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
            >
                Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif mt-4 tracking-tight" style={{ color: 'var(--text)' }}>
                Things I&apos;ve Built
            </h1>
            <p className="text-base sm:text-lg mt-3 max-w-3xl leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                Detailed breakdowns of problems, solutions, and outcomes across spreadsheet automations, custom web apps, and AI integrations.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
                <article
                    key={project.id}
                    className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <span
                                className="text-xs font-mono font-semibold px-3 py-1 rounded-md border"
                                style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                            >
                                {project.category}
                            </span>
                            <div className="flex gap-1.5 flex-wrap">
                                {project.tags.slice(0, 3).map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[10px] font-mono px-2 py-0.5 rounded border"
                                        style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3" style={{ color: 'var(--text)' }}>
                            {project.title}
                        </h2>

                        <p className="text-xs sm:text-sm mb-6 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                            {project.shortDescription}
                        </p>

                        {/* Outcomes */}
                        {project.results && project.results.length > 0 && (
                            <div className="mb-6 p-4 rounded-xl border" style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-faint)' }}>
                                    What changed:
                                </h4>
                                <ul className="space-y-1.5">
                                    {project.results.map((res, rIdx) => (
                                        <li key={rIdx} className="text-xs flex items-start gap-2 font-sans" style={{ color: 'var(--text-muted)' }}>
                                            <LuCheckCircle className="text-xs mt-0.5 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                                            <span>{res}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="border-t pt-4 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                        <Link
                            href={`/projects/${project.id}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:opacity-80"
                            style={{ color: 'var(--amber)' }}
                        >
                            <span>See details</span>
                            <LuArrowRight className="text-xs" />
                        </Link>
                    </div>
                </article>
            ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-mono" style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}>
            <div>© {new Date().getFullYear()} Sahiru Wijesinghe</div>
            <Link href="/" className="hover:text-[var(--amber)] transition-colors">
                Back to Home
            </Link>
        </footer>

      </div>
    </div>
  );
};

export default Projects;
