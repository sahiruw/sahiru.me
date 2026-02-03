'use client';
// components/ProjectShowcase.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/ProjectShowcase.module.css';
import { GithubButton } from './projects/Buttons';

interface Project {
    id: number;
    imageUrl: string;
    title: string;
    category: string;
    shortDescription: string;
    tags: string[];
    urls: { url: string; title: string }[];
    color: string;
}

const ProjectShowcase = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/api/projects?count=7')
            .then((response) => response.json())
            .then((data) => setProjects(data.message));
    }, []);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl text-center text-white font-bold mb-4">Recent Projects</h1>
                <p className="text-center text-sm text-neutral-300 mb-8 max-w-3xl mx-auto">
                    A curated selection of recent work — click through to see project details and source where available.
                </p>

                {projects.length === 0 ? (
                    <div className="text-center text-neutral-400 py-20">No projects available at the moment.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.map((project) => (
                            <article key={project.id} className="relative group">
                                <div className={`${styles.projectCard} rounded-lg overflow-hidden`}>
                                    <Image src={project.imageUrl} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                                    <div className="gradientOverlay" />
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black/70 backdrop-blur-md rounded-lg p-4">
                                        <h2 className="text-lg font-semibold text-white truncate">{project.title}</h2>
                                        <p className="text-xs text-neutral-300 mt-1">{project.category}</p>
                                        <p className="text-sm text-neutral-200 mt-2 line-clamp-3">{project.shortDescription}</p>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded text-neutral-100">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="mt-4 flex items-center gap-3">
                                            <Link href={`/projects/${project.id}`} className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition">View Project</Link>

                                            {project.urls.map((link, i) => (
                                                <GithubButton key={i} url={link.url} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}

                        <Link href="/projects" className="flex items-center justify-center rounded-lg bg-gray-800 p-6 hover:bg-gray-700 transition">
                            <span className="text-white text-lg font-semibold">See More Projects</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectShowcase;
