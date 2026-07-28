'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaCodeBranch } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';

interface Project {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    shortDescription: string;
    tags: string[];
    urls: { url: string; title: string; type?: string }[];
    color: string;
    problem: string;
    solution: string;
    architecture: string;
    results: string[];
}

const RecentWork = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState<string>('All');

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => { if (Array.isArray(data.message)) setProjects(data.message); })
            .catch((err) => console.error('Error loading projects:', err));
    }, []);

    const categories = ['All', 'Internal Business Tools', 'AI Engineering & DevOps', 'Backend & Enterprise Integrations', 'Business Automation'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category.includes(filter) || p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

    return (
        <section
            className="py-24 relative z-10 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
            id="work"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span
                        className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                    >
                        Some of my work
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 tracking-tight" style={{ color: 'var(--text)' }}>
                        Things I&apos;ve Built
                    </h2>
                    <p className="text-base sm:text-lg mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                        Real problems, what I built, and what got better.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border"
                            style={filter === cat
                                ? { background: 'var(--amber)', color: '#fff', borderColor: 'var(--amber)', fontWeight: 600 }
                                : { background: 'var(--bg-card)', color: 'var(--text-muted)', borderColor: 'var(--border)' }
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Case studies grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300"
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                        >
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <span
                                        className="text-xs font-mono font-semibold px-3 py-1 rounded-md border"
                                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                                    >
                                        {project.category}
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.slice(0, 3).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[11px] font-mono px-2 py-0.5 rounded border"
                                                style={{ background: 'var(--bg-muted)', color: 'var(--text-faint)', borderColor: 'var(--border)' }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3" style={{ color: 'var(--text)' }}>
                                    {project.title}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                                    <div className="p-4 rounded-xl border" style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                        <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5" style={{ color: 'var(--amber)' }}>
                                            <span>•</span> The Problem
                                        </h4>
                                        <p className="text-xs leading-relaxed font-sans line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl border" style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                        <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5" style={{ color: 'var(--violet)' }}>
                                            <span>✓</span> The Solution
                                        </h4>
                                        <p className="text-xs leading-relaxed font-sans line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-faint)' }}>
                                        What changed:
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.results?.map((res, rIdx) => (
                                            <li key={rIdx} className="text-xs flex items-start gap-2 font-sans" style={{ color: 'var(--text-muted)' }}>
                                                <FaCheckCircle className="text-xs mt-0.5 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                                                <span>{res}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="border-t pt-4 mt-2 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-xs font-semibold transition-colors" style={{ color: 'var(--amber)' }}>
                                    <span>See more</span>
                                    <LuArrowRight className="text-xs" />
                                </Link>
                                {project.urls?.[0] && (
                                    <a
                                        href={project.urls[0].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono transition-colors"
                                        style={{ color: 'var(--text-faint)' }}
                                    >
                                        <FaCodeBranch className="text-xs" style={{ color: 'var(--amber)' }} />
                                        <span>{project.urls[0].title}</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm border transition-all"
                        style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                    >
                        View All Case Studies
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default RecentWork;
