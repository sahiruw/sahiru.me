'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    {
        q: "What typical budget range & project scopes do you take on?",
        a: "I work with clients ranging from $5,000 to $50,000+ depending on complexity. My sweet spot is building custom AI automation systems, internal business web apps (replacing Excel/Sheets), high-throughput API integrations, and cloud infrastructure."
    },
    {
        q: "How fast can a custom system or automation be delivered?",
        a: "Focused automation scripts and lightweight web tooling are typically delivered within 1 to 2 weeks. Comprehensive full-stack web applications and enterprise integrations are delivered in agile 4 to 8 week sprints with working staging builds every week."
    },
    {
        q: "Can you safely migrate our complex Google Sheets or Excel spreadsheets into a web app?",
        a: "Yes! Modernizing spreadsheet-heavy workflows into secure, multi-user web applications (React, Node.js, PostgreSQL) with automated PDF exports and role-based permissions is one of my core specializations. Your historical data is cleanly migrated with zero downtime."
    },
    {
        q: "Do you work with existing dev teams or international companies?",
        a: "Absolutely. I regularly collaborate with international founders, agency leads, and enterprise engineering teams across North America, Europe, Australia, and Asia. I operate seamlessly with GitHub, Jira, Slack, and standard asynchronous workflows."
    },
    {
        q: "How does pricing work? Is it hourly or fixed-fee?",
        a: "Most custom projects are scoped as fixed-fee, milestone-based deliverables. This guarantees predictable timelines and costs for your business—no surprise billable hours."
    },
    {
        q: "What happens after the project is deployed?",
        a: "All projects include a 30-day post-launch warranty period for bug fixes and adjustments. Additionally, I offer ongoing SLA maintenance and retainer support options for continuous feature additions."
    }
];

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#070D1B] border-t border-white/5 relative z-10" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Got Questions?
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-neutral-400 text-base mt-2">
                        Everything you need to know about working together.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div 
                                key={idx}
                                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                                >
                                    <span className="text-base sm:text-lg font-bold text-white">
                                        {item.q}
                                    </span>
                                    <FaChevronDown className={`text-blue-400 text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 text-neutral-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
