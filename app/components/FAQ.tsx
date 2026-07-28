'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    {
        q: "Who do you typically work with?",
        a: "Everyone from solo founders and freelancers needing a specific tool, to small business owners who want to clean up their operations, to mid-sized teams dealing with complex workflows. You don't need a big budget or a clear spec to reach out - just a problem worth solving."
    },
    {
        q: "What's the smallest project you'll take on?",
        a: "Quite small. A Google Sheets automation, a simple dashboard, a data script - if it's a real problem and I can genuinely help, I'm interested. I don't have a fixed minimum. We'd just scope it out and find something that works for both sides."
    },
    {
        q: "Do you build spreadsheet systems or do you only replace them with apps?",
        a: "Both. Sometimes the right answer is a well-structured Google Sheet or Excel system with automation built on top. Other times it's a lightweight web app. I figure out which one makes sense for your situation, resources, and budget - without pushing you toward something more complex than you need."
    },
    {
        q: "How fast can something be delivered?",
        a: "Scripts and lightweight automations are typically done in 1–2 weeks. More structured web tools take 3–6 weeks. Larger full-stack applications run in agile 4–8 week sprints with working staging builds every week so you're never in the dark."
    },
    {
        q: "How does pricing work?",
        a: "Most projects are fixed-fee with clear milestones so there are no surprise hours. Smaller work like scripts or spreadsheet automation can be scoped by the task. We'd figure out what makes sense when we talk."
    },
    {
        q: "What happens after the project is done?",
        a: "All projects include a post-launch period for bug fixes and adjustments. I also offer ongoing support, feature additions, or retainer arrangements if you want continued help as things evolve."
    }
];

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section
            className="py-24 relative z-10 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-muted)' }}
            id="faq"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span
                        className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                    >
                        Got Questions?
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 tracking-tight" style={{ color: 'var(--text)' }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                        Everything you need to know about working together.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((item, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border overflow-hidden transition-all duration-200"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                            >
                                <button
                                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                                >
                                    <span className="text-base font-bold font-serif" style={{ color: 'var(--text)' }}>
                                        {item.q}
                                    </span>
                                    <FaChevronDown
                                        className={`text-sm flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        style={{ color: 'var(--amber)' }}
                                    />
                                </button>
                                {isOpen && (
                                    <div
                                        className="px-6 pb-6 text-sm leading-relaxed border-t pt-4 font-sans"
                                        style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
                                    >
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
