'use client';
import React from 'react';
import { FaTimesCircle, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const painPoints = [
    {
        problem: "Spreadsheet-based operational bottlenecks",
        problemDesc: "Managing multi-location inventory, orders, or schedules in complex Excel/Google Sheets prone to corruption.",
        solution: "Custom multi-user web application with relational database, role-based permissions, and instant audit trails.",
    },
    {
        problem: "Manual reporting & repetitive data entry",
        problemDesc: "Staff spending 10+ hours a week copying data between systems, generating PDFs, and sending manual emails.",
        solution: "End-to-end automated pipelines that generate reports, sync databases, and trigger alerts on schedule.",
    },
    {
        problem: "Disconnected legacy software systems",
        problemDesc: "Third-party tools and internal databases that don't talk to each other, creating data silos.",
        solution: "Robust REST & GraphQL APIs that unify your software ecosystem into a single source of truth.",
    },
    {
        problem: "Inefficient warehouse & inventory tracking",
        problemDesc: "Lack of real-time stock visibility causing overstocking, stockouts, and manual count errors.",
        solution: "Real-time stock management with barcode integration, automated purchase orders, and stockout alerts.",
    },
    {
        problem: "Scaling cloud infrastructure bottlenecks",
        problemDesc: "Slow API responses, high cloud server bills, and manual deployment procedures that delay releases.",
        solution: "Automated AWS/Terraform pipelines, containerization, and backend microservice optimization for sub-second speeds.",
    }
];

const ProblemsSolved = () => {
    return (
        <section className="py-24 bg-[#070D1B] border-t border-white/5 relative z-10" id="problems">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Operational Challenges
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
                        Is Your Business Struggling With...
                    </h2>
                    <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
                        I replace fragile manual processes with robust, high-availability software platforms that scale with your growth.
                    </p>
                </div>

                <div className="space-y-4 max-w-5xl mx-auto">
                    {painPoints.map((item, idx) => (
                        <div 
                            key={idx}
                            className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                        >
                            {/* The Pain Point (Problem) */}
                            <div className="md:col-span-5 flex items-start gap-3">
                                <FaTimesCircle className="text-rose-500 text-lg mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-base font-bold text-white mb-1">
                                        {item.problem}
                                    </h3>
                                    <p className="text-xs text-neutral-400 leading-relaxed">
                                        {item.problemDesc}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow Indicator */}
                            <div className="hidden md:flex md:col-span-2 justify-center">
                                <div className="p-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    <FaArrowRight className="text-sm" />
                                </div>
                            </div>

                            {/* The Transformation (Solution) */}
                            <div className="md:col-span-5 flex items-start gap-3 bg-blue-950/20 p-4 rounded-xl border border-blue-500/20">
                                <FaCheckCircle className="text-emerald-400 text-lg mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                                        The Software Solution
                                    </h4>
                                    <p className="text-xs text-neutral-200 leading-relaxed">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Schedule a process audit call to discuss your current bottleneck →
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ProblemsSolved;
