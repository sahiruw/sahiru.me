// components/ProjectShowcase.js
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/ProjectShowcase.module.css';

const projects = [
    { id: 1, title: 'Project One', category: 'Web Development', imageUrl: '/nav/home.png' },
    { id: 2, title: 'Project Two', category: 'Mobile App', imageUrl: '/nav/blog.png' },
    { id: 3, title: 'Project Three', category: 'Data Science', imageUrl: '/nav/work.png' },
];

const ProjectShowcase = () => {
    return (
        <div className="py-20  bg-gradient-to-b from-[#565963] to-neutral-950">
            <h1 className="text-2xl text-center text-white my-10">Recent Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                {projects.map((project) => (
                    <div key={project.id} className={`relative group ${styles.projectCard}`}>
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="text-lg">{project.category}</p>
                        </div>
                    </div>
                ))}
                <Link href="/projects">
                    <div className="relative group w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">See More</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProjectShowcase;
