'use client';
import React from 'react';
import { FaSearch, FaProjectDiagram, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';

const steps = [
    { num: "01", icon: FaSearch, title: "We talk it through", description: "Tell me what you're dealing with - a messy spreadsheet, a manual process, or just an idea. Free 30-min call, no pressure." },
    { num: "02", icon: FaProjectDiagram, title: "I send you a clear plan", description: "A straightforward proposal: what I'll build, how long it'll take, and what it'll cost. Fixed price, no surprises." },
    { num: "03", icon: FaCode, title: "I build and share progress", description: "I build in small chunks and share working versions along the way so you can give feedback early, not at the end." },
    { num: "04", icon: FaShieldAlt, title: "Testing & handover", description: "I test everything properly and walk you through how to use it before calling it done. Your data carries over cleanly." },
    { num: "05", icon: FaRocket, title: "Done - and I'm still here", description: "Once it's live, I'm available for fixes, tweaks, or whatever comes up next. You're not left to figure it out alone." }
];

const Process = () => {
    return (
        <section
            className="py-24 relative z-10 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
            id="process"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                    >
                        How it works
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 tracking-tight" style={{ color: 'var(--text)' }}>
                        How We Work Together
                    </h2>
                    <p className="text-base sm:text-lg mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                        Simple steps, whether it's a quick automation or a bigger project.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-black font-serif" style={{ color: 'var(--amber)', opacity: 0.4 }}>
                                            {step.num}
                                        </span>
                                        <div
                                            className="h-10 w-10 rounded-xl border flex items-center justify-center"
                                            style={{ background: 'var(--amber-light)', borderColor: 'var(--amber)', color: 'var(--amber)' }}
                                        >
                                            <Icon className="text-base" />
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold font-serif mb-2" style={{ color: 'var(--text)' }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Process;
