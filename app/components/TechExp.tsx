'use client';
import React from 'react';
import Image from 'next/image';

const serviceStacks = [
    {
        title: "AI & Automation",
        subtitle: "LLM API integrations, document processing, and smart workflow tools",
        items: [
            { name: 'OpenAI / Gemini APIs', logo: '/logo/python.png' },
            { name: 'LangChain', logo: '/logo/python.png' },
            { name: 'FastAPI', logo: '/logo/fastapi.webp' },
            { name: 'Python', logo: '/logo/python.png' },
        ]
    },
    {
        title: "Backend & Web Apps",
        subtitle: "Full-stack web apps and APIs powering custom business tools",
        items: [
            { name: 'TypeScript / Node', logo: '/logo/js-ts.jpg' },
            { name: 'Express / NestJS', logo: '/logo/express.webp' },
            { name: 'React / Next.js', logo: '/logo/nextjs.png' },
            { name: 'PostgreSQL & MySQL', logo: '/logo/mysql.png' },
            { name: 'Firebase', logo: '/logo/firebase.png' },
        ]
    },
    {
        title: "Spreadsheet & Automation",
        subtitle: "Google Sheets, Excel, and scripting tools for fast automation",
        items: [
            { name: 'Google Apps Script', logo: '/logo/apps-script.png' },
            { name: 'Excel VBA', logo: '/logo/vba.png' },
            { name: 'Bash Scripting', logo: '/logo/bash.png' },
            { name: 'Java / Spring Boot', logo: '/logo/java.png' },
        ]
    }
];

const TechStack = () => {
    return (
        <section
            className="py-24 relative z-10 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-muted)' }}
            id="tech"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                    >
                        Tools of the Trade
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 tracking-tight" style={{ color: 'var(--text)' }}>
                        Tech I Work With
                    </h2>
                    <p className="text-base sm:text-lg mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                        Tools I use to get things done - picked for the job, not for the resume.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceStacks.map((stack, idx) => (
                        <div
                            key={idx}
                            className="p-6 sm:p-8 rounded-2xl border"
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                        >
                            <h3 className="text-xl font-bold font-serif mb-1" style={{ color: 'var(--text)' }}>
                                {stack.title}
                            </h3>
                            <p className="text-xs mb-6 font-sans" style={{ color: 'var(--text-faint)' }}>
                                {stack.subtitle}
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                {stack.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-200"
                                        style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}
                                    >
                                        <div className="h-7 w-7 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative" style={{ background: 'var(--bg-card)' }}>
                                            <Image src={tech.logo} alt={tech.name} fill className="object-contain p-1" />
                                        </div>
                                        <span className="text-xs font-mono font-medium truncate" style={{ color: 'var(--text-muted)' }}>
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
