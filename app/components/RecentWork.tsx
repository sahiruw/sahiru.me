'use client';
// components/ProjectShowcase.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/ProjectShowcase.module.css';
import {GithubButton} from "./projects/Buttons"

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
        <div className="py-20">
            <h1 className="text-2xl text-center text-white my-10">Recent Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                {projects.map((project) => (
                    <div
                    key={project.id}
                    className={`relative group ${styles.projectCard} flex flex-col items-center justify-center`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={`w-full h-full object-cover`}
                    />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
                    <h2 className="text-2xl font-bold mb-2 text-blue-500 text-center">{project.title}</h2>

                      <p className="text-base mb-2">{project.category}</p>
                      <p className="text-xs text-center mb-4">{project.shortDescription}</p>
                      <ul className="flex flex-wrap justify-center gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <li
                            key={index}
                            className="bg-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-4">
                        {/* {project.urls.map((link, index) => (
                        //   <a
                        //     key={index}
                        //     href={link.url}
                        //     target="_blank"
                        //     rel="noopener noreferrer"
                        //     className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 transition-colors text-xs"
                        //   >
                        //     {link.title}
                        //   </a>
                        <GithubButton key={index} url={link.url} />
                        ))} */}
                        <Link href={`/projects/${project.id}`}>
                          <span className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 transition-colors text-xs">
                            View Project
                          </span>
                        </Link>
                      </div>
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
