'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaCodeBranch } from 'react-icons/fa';

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
    <div className="min-h-screen bg-[#0A1020] text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        
        <Link 
            href="/"
            className="text-blue-400 hover:text-blue-300 mb-8 text-sm inline-flex items-center gap-2 font-medium transition-colors"
        >
            <FaArrowLeft /> Back to Portfolio & Sales Page
        </Link>

        <div className="mb-12">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Full Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
                All Engineering Case Studies
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg mt-3 max-w-3xl">
                Explore detailed problem-solution breakdowns, results metrics, and architecture specs for systems built across AI, cloud, and business automation.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
                <article
                    key={project.id}
                    className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                                {project.category}
                            </span>
                            <div className="flex gap-1.5 flex-wrap">
                                {project.tags.slice(0, 3).map((tag, idx) => (
                                    <span key={idx} className="text-[10px] bg-white/5 text-neutral-400 px-2 py-0.5 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            {project.title}
                        </h2>

                        <p className="text-neutral-300 text-xs sm:text-sm mb-4 leading-relaxed">
                            {project.shortDescription}
                        </p>

                        {/* Measurable Results */}
                        <div className="mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                            <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                                Key Outcomes:
                            </h4>
                            <ul className="space-y-1.5">
                                {project.results?.map((res, rIdx) => (
                                    <li key={rIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                                        <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 flex-shrink-0" />
                                        <span>{res}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                        <Link
                            href={`/projects/${project.id}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Read Full Architecture Breakdown →
                        </Link>
                    </div>
                </article>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
