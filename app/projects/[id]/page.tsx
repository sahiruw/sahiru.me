'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LuArrowLeft, LuCheckCircle, LuAlertTriangle, LuLightbulb, LuCalendar } from 'react-icons/lu';
import ThemeToggle from '../../components/ThemeToggle';

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
            <div
                className="min-h-screen relative flex items-center justify-center px-4"
                style={{ background: 'var(--bg)', color: 'var(--text)' }}
            >
                <ThemeToggle />
                <div className="text-xs font-mono animate-pulse" style={{ color: 'var(--text-muted)' }}>
                    Loading project details...
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div
                className="min-h-screen relative flex flex-col items-center justify-center px-4 text-center"
                style={{ background: 'var(--bg)', color: 'var(--text)' }}
            >
                <ThemeToggle />
                <h1 className="text-2xl font-serif font-bold mb-4" style={{ color: 'var(--text)' }}>
                    Project Not Found
                </h1>
                <Link
                    href="/projects"
                    className="text-xs font-mono inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--amber)' }}
                >
                    <LuArrowLeft /> Return to Projects
                </Link>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen relative overflow-x-hidden px-4 sm:px-6 lg:px-8 py-12"
            style={{ background: 'var(--bg)', color: 'var(--text)' }}
        >
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Grain texture */}
            <div className="grain-overlay" />

            <div className="max-w-5xl mx-auto relative z-10">
                
                {/* Back navigation */}
                <button 
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold mb-8 transition-colors hover:opacity-80 cursor-pointer"
                    style={{ color: 'var(--amber)' }}
                >
                    <LuArrowLeft className="text-sm" /> Back
                </button>

                {/* Header */}
                <div className="mb-10 border-b pb-8" style={{ borderColor: 'var(--border)' }}>
                    <span
                        className="text-xs font-mono font-semibold px-3 py-1 rounded-md border"
                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                    >
                        {project.category}
                    </span>

                    <h1 className="text-3xl sm:text-5xl font-bold font-serif mt-4 tracking-tight leading-tight" style={{ color: 'var(--text)' }}>
                        {project.title}
                    </h1>

                    <p className="text-base sm:text-lg mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                        {project.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-xs font-mono px-3 py-1 rounded-lg border"
                                style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Key Metrics / Results Banner */}
                {project.results && project.results.length > 0 && (
                    <div className="mb-12 p-6 sm:p-8 rounded-2xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                        <h2 className="text-xs font-mono font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-faint)' }}>
                            What Changed
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.results.map((res, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans" style={{ color: 'var(--text-muted)' }}>
                                    <LuCheckCircle className="text-base mt-0.5 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                                    <span>{res}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Case Study Breakdown Grid */}
                <div className="space-y-8">
                    
                    {/* The Problem */}
                    <section className="p-6 sm:p-8 rounded-2xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                        <h2 className="text-xl font-bold font-serif mb-3 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--amber)' }} />
                            1. The Problem
                        </h2>
                        <p className="text-xs sm:text-sm leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                            {project.problem}
                        </p>
                    </section>

                    {/* The Solution */}
                    <section className="p-6 sm:p-8 rounded-2xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                        <h2 className="text-xl font-bold font-serif mb-3 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            2. What I Built
                        </h2>
                        <p className="text-xs sm:text-sm leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                            {project.solution}
                        </p>
                    </section>

                    {/* System Architecture */}
                    <section className="p-6 sm:p-8 rounded-2xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                        <h2 className="text-xl font-bold font-serif mb-3 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--violet)' }} />
                            3. How It Works
                        </h2>
                        <p className="text-xs sm:text-sm leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                            {project.architecture}
                        </p>
                    </section>

                    {/* Technical Challenges & Lessons */}
                    {(project.challenges || project.lessonsLearned) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.challenges && (
                                <div className="p-6 rounded-2xl border" style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                    <h3 className="text-xs font-mono font-bold uppercase mb-2 flex items-center gap-2" style={{ color: 'var(--amber)' }}>
                                        <LuAlertTriangle /> Main Challenge
                                    </h3>
                                    <p className="text-xs leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            {project.lessonsLearned && (
                                <div className="p-6 rounded-2xl border" style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                    <h3 className="text-xs font-mono font-bold uppercase mb-2 flex items-center gap-2" style={{ color: 'var(--amber)' }}>
                                        <LuLightbulb /> Takeaway
                                    </h3>
                                    <p className="text-xs leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                                        {project.lessonsLearned}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                {/* Call to action footer */}
                <div className="mt-16 p-8 rounded-3xl border text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <h3 className="text-2xl font-bold font-serif mb-2" style={{ color: 'var(--text)' }}>
                        Need a similar tool for your business?
                    </h3>
                    <p className="text-xs sm:text-sm max-w-lg mx-auto mb-6 font-sans" style={{ color: 'var(--text-muted)' }}>
                        Schedule a free 30-minute call to talk through your idea or existing workflow.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5"
                        style={{ background: 'var(--amber)', color: '#fff' }}
                    >
                        <LuCalendar className="text-base" /> Book a free call
                    </a>
                </div>

                {/* Footer */}
                <footer className="mt-20 pt-8 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-mono" style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}>
                    <div>© {new Date().getFullYear()} Sahiru Wijesinghe</div>
                    <Link href="/projects" className="hover:text-[var(--amber)] transition-colors">
                        Back to Portfolio
                    </Link>
                </footer>

            </div>
        </div>
    );
};

export default ProjectPage;