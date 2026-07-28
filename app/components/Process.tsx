'use client';
import React from 'react';
import { FaSearch, FaProjectDiagram, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';

const steps = [
    {
        num: "01",
        icon: FaSearch,
        title: "Discovery & Process Audit",
        description: "We jump on a 30-minute call to map your current spreadsheets, workflow bottlenecks, data structures, and project goals."
    },
    {
        num: "02",
        icon: FaProjectDiagram,
        title: "System Architecture & Roadmap",
        description: "You receive a clear technical proposal detailing database schema, cloud architecture, milestone timelines, and fixed pricing."
    },
    {
        num: "03",
        icon: FaCode,
        title: "Rapid Development & Demos",
        description: "Built in agile 1-week sprints with live staging links so you can interact with working software and provide immediate feedback."
    },
    {
        num: "04",
        icon: FaShieldAlt,
        title: "Data Cutover & Testing",
        description: "Seamless migration of existing Excel/Sheets data, multi-device mobile testing, security auditing, and team walkthroughs."
    },
    {
        num: "05",
        icon: FaRocket,
        title: "Deployment & Ongoing Support",
        description: "Production launch on AWS cloud with automated backups, performance monitoring, and post-launch maintenance guarantees."
    }
];

const Process = () => {
    return (
        <section className="py-24 bg-[#0A1020] border-t border-white/5 relative z-10" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Predictable Execution
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
                        How We Work Together
                    </h2>
                    <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
                        A structured, transparent engineering process designed to eliminate risk and deliver high-ROI software on time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div 
                                key={idx}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-black text-blue-500/40">
                                            {step.num}
                                        </span>
                                        <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <Icon className="text-base" />
                                        </div>
                                    </div>

                                    <h3 className="text-base font-bold text-white mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-xs text-neutral-400 leading-relaxed">
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
