'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaExternalLinkAlt, FaCodeBranch, FaCubes } from 'react-icons/fa';

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
            .then((data) => {
                if (Array.isArray(data.message)) {
                    setProjects(data.message);
                }
            })
            .catch((err) => console.error("Error loading projects:", err));
    }, []);

    const categories = ['All', 'Internal Business Tools', 'AI Engineering & DevOps', 'Backend & Enterprise Integrations', 'Business Automation'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category.includes(filter) || p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

    return (
        <section className="py-24 bg-[#0A1020] border-t border-white/5 relative z-10" id="work">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Proven Track Record
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
                        Featured Engineering Case Studies
                    </h2>
                    <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
                        In-depth looks at real client problems, high-performance system architectures, and measurable business outcomes.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                                filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Header badge + title */}
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-2">
                                        {project.tags.slice(0, 3).map((tag, idx) => (
                                            <span key={idx} className="text-[11px] bg-white/5 text-neutral-400 px-2 py-0.5 rounded border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>

                                {/* Problem vs Solution Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                                        <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                            <span>•</span> The Problem
                                        </h4>
                                        <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                                            {project.problem}
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                            <span>✓</span> The Solution
                                        </h4>
                                        <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Measurable Results */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                                        Measurable Results:
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.results?.map((res, rIdx) => (
                                            <li key={rIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                                                <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 flex-shrink-0" />
                                                <span>{res}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer links */}
                            <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between">
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Read Full Architecture Breakdown →
                                </Link>

                                {project.urls?.[0] && (
                                    <a
                                        href={project.urls[0].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                                    >
                                        <FaCodeBranch className="text-xs" />
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
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all border border-white/10"
                    >
                        View All Project Case Studies & Details
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default RecentWork;
