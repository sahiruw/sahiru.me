'use client';
import React from 'react';
import Image from 'next/image';

const serviceStacks = [
    {
        title: "AI & Vector Engineering",
        subtitle: "RAG architectures, Agentic workflows, and LLM automation",
        items: [
            { name: 'LangChain & RAG', logo: '/logo/python.png' },
            { name: 'Vector Databases', logo: '/logo/python.png' },
            { name: 'LLM APIs (Gemini/OpenAI)', logo: '/logo/python.png' },
            { name: 'FastAPI', logo: '/logo/fastapi.webp' },
            { name: 'Python', logo: '/logo/python.png' },
        ]
    },
    {
        title: "Backend & Systems Engineering",
        subtitle: "High-throughput APIs, event-driven pipelines, and relational DBs",
        items: [
            { name: 'Java / Spring Boot', logo: '/logo/java.png' },
            { name: 'JavaScript / TypeScript', logo: '/logo/js-ts.jpg' },
            { name: 'Express / NestJS', logo: '/logo/express.webp' },
            { name: 'PostgreSQL & MySQL', logo: '/logo/mysql.png' },
            { name: 'Redis Caching', logo: '/logo/redis.png' },
        ]
    },
    {
        title: "Cloud & DevOps Automation",
        subtitle: "Infrastructure-as-Code, container orchestration, and security",
        items: [
            { name: 'AWS Cloud', logo: '/logo/aws.png' },
            { name: 'Terraform (IaC)', logo: '/logo/tf.png' },
            { name: 'Docker Containers', logo: '/logo/docker.webp' },
            { name: 'Packer & AMIs', logo: '/logo/packer.png' },
            { name: 'Cloud Custodian', logo: '/logo/cc.png' },
            { name: 'OWASP ZAP DAST', logo: '/logo/zap.png' },
        ]
    },
    {
        title: "Internal Tools & Business Automation",
        subtitle: "Modern React web applications and spreadsheet automation engines",
        items: [
            { name: 'ReactJS / NextJS', logo: '/logo/nextjs.png' },
            { name: 'Google Apps Script', logo: '/logo/apps-script.png' },
            { name: 'VBA Automation', logo: '/logo/vba.png' },
            { name: 'Bash Scripting', logo: '/logo/bash.png' },
            { name: 'Firebase', logo: '/logo/firebase.png' },
        ]
    }
];

const TechStack = () => {
    return (
        <section className="py-24 bg-[#070D1B] border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Battle-Tested Tooling
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                        Technology Stack by Service Domain
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base mt-3">
                        Proven enterprise frameworks, databases, and automation tooling used to deliver scalable systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {serviceStacks.map((stack, idx) => (
                        <div 
                            key={idx}
                            className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                                {stack.title}
                            </h3>
                            <p className="text-xs text-neutral-400 mb-6">
                                {stack.subtitle}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {stack.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-200"
                                    >
                                        <div className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                                            <Image
                                                src={tech.logo}
                                                alt={tech.name}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-neutral-200 truncate">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStack;
