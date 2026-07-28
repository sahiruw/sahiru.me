'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa';

interface ProjectDetail {
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
    challenges?: string;
    lessonsLearned?: string;
}

const ProjectPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const [project, setProject] = useState<ProjectDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`/api/projects/${id}`)
                .then(response => response.json())
                .then(data => {
                    setProject(data?.data || null);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching project data:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0A1020] flex items-center justify-center px-4">
                <div className="text-white text-base animate-pulse">Loading Case Study Details...</div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0A1020] flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Case Study Not Found</h1>
                <Link href="/" className="text-blue-400 hover:underline text-sm flex items-center gap-2">
                    <FaArrowLeft /> Return to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A1020] text-white px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-5xl mx-auto">
                
                {/* Back navigation */}
                <button 
                    onClick={() => router.back()}
                    className="text-blue-400 hover:text-blue-300 mb-8 text-sm flex items-center gap-2 font-medium transition-colors"
                >
                    <FaArrowLeft /> Back to Case Studies
                </button>

                {/* Case Study Header */}
                <div className="mb-10 border-b border-white/10 pb-8">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                        {project.category}
                    </span>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-neutral-300 text-base sm:text-lg mt-4 leading-relaxed">
                        {project.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs bg-white/5 border border-white/10 text-neutral-300 px-3 py-1 rounded-lg">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Key Metrics / Results Banner */}
                {project.results && project.results.length > 0 && (
                    <div className="mb-12 p-6 rounded-2xl bg-blue-950/20 border border-blue-500/30">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                            Measurable Business Outcomes
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.results.map((res, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-200">
                                    <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                                    <span>{res}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Case Study Breakdown Grid */}
                <div className="space-y-10">
                    
                    {/* The Problem */}
                    <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500"></span>
                            1. The Problem & Business Challenge
                        </h2>
                        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                            {project.problem}
                        </p>
                    </section>

                    {/* The Solution */}
                    <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                            2. The Solution Delivered
                        </h2>
                        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                            {project.solution}
                        </p>
                    </section>

                    {/* System Architecture */}
                    <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                            3. System Architecture & Tech Stack
                        </h2>
                        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                            {project.architecture}
                        </p>
                    </section>

                    {/* Technical Challenges & Lessons */}
                    {(project.challenges || project.lessonsLearned) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.challenges && (
                                <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-900/30">
                                    <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center gap-2">
                                        <FaExclamationTriangle /> Key Engineering Challenge
                                    </h3>
                                    <p className="text-xs text-neutral-300 leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            {project.lessonsLearned && (
                                <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-900/30">
                                    <h3 className="text-sm font-bold text-indigo-400 mb-2 flex items-center gap-2">
                                        <FaLightbulb /> Architecture Insight
                                    </h3>
                                    <p className="text-xs text-neutral-300 leading-relaxed">
                                        {project.lessonsLearned}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                {/* Call to action footer on project page */}
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Need a similar system for your business?</h3>
                    <p className="text-neutral-300 text-sm max-w-lg mx-auto mb-6">
                        Schedule a free 30-minute architecture strategy call to discuss your project requirements.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
                    >
                        <FaCalendarAlt /> Book Free Strategy Call
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ProjectPage;