'use client';
import React from "react";
import { motion } from "framer-motion";
import { LuBuilding2, LuGraduationCap, LuGlobe2, LuTrendingUp, LuCheckCircle2 } from "react-icons/lu";

const experiences = [
    {
        period: "2025 Jun – Present",
        role: "Software Engineer - Supply Chain & Logistics",
        company: "Sysco Labs (Fortune 500)",
        icon: LuBuilding2,
        metric: "Millions",
        metricLabel: "Daily Warehouse Records",
        summary: "Engineering high-throughput integration services that automate warehouse operations for one of the world's largest food distribution networks.",
        achievements: [
            "High-concurrency SIGMA & BlueYonder backend interfaces using Spring Boot, Kafka, and PostgreSQL.",
            "Automated database archival & purging with Bash & PL/pgSQL, preventing lock bottlenecks.",
            "Comprehensive test automation (JUnit & Cypress) across critical logistics pipelines."
        ],
        tech: ["Spring Boot", "Kafka", "PostgreSQL", "Bash", "PL/pgSQL", "JUnit"]
    },
    {
        period: "2023 Dec – 2024 May",
        role: "Software Engineering Intern - Platform & Security",
        company: "GTN Technologies (Fintech)",
        icon: LuTrendingUp,
        metric: "62.5%",
        metricLabel: "Faster Cloud Builds",
        summary: "Architected cloud governance rules and infrastructure automation pipelines to cut AWS costs and eliminate release bottlenecks.",
        achievements: [
            "Reduced AMI build times by 62.5% using optimized Packer pipelines.",
            "Enforced automated AWS cost governance via Cloud Custodian, saving thousands monthly.",
            "Integrated OWASP ZAP DAST security scanning directly into deployment pipelines."
        ],
        tech: ["AWS", "Packer", "Terraform", "Cloud Custodian", "OWASP ZAP", "Docker"]
    },
    {
        period: "2021 – 2025",
        role: "B.Sc. Engineering (Hons) - CS & Engineering",
        company: "University of Moratuwa",
        icon: LuGraduationCap,
        metric: "3.73 GPA",
        metricLabel: "First Class Honors",
        summary: "Graduated First Class with a Minor in Mathematics. Dean's List in Semesters 02, 06, 07, and 08.",
        achievements: [
            "IEEE Published: Transformer-based intent classification for deployment plan automation (MERCon 2025).",
            "National Hackathon Winner: Bashaway 2022 Champions.",
            "Focus: Distributed Systems, Cloud Architecture, and Machine Learning."
        ],
        tech: ["Machine Learning", "Python", "Transformers", "Algorithms"]
    },
    {
        period: "2019 – Present",
        role: "Freelance Automation Engineer",
        company: "Independent Consultancy",
        icon: LuGlobe2,
        metric: "5.0 ★",
        metricLabel: "Client Satisfaction",
        summary: "Helping individuals and small businesses automate manual tasks, upgrade messy spreadsheets into structured systems, and build custom web tools.",
        achievements: [
            "Converting repetitive spreadsheet processes into automated tools and web apps.",
            "Building custom AI integrations for document parsing and data classification.",
            "Working directly with clients from initial concept to launch and support."
        ],
        tech: ["React / Next.js", "Node.js", "Python", "PostgreSQL", "Google Apps Script", "Excel VBA"]
    }
];

export default function TimelineDemo() {
    return (
        <section
            className="py-24 relative z-10 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
            id="experience"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                    >
                        Background
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 tracking-tight" style={{ color: 'var(--text)' }}>
                        Experience &amp; Background
                    </h2>
                    <p className="text-base sm:text-lg mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                        Engineering background and practical hands-on experience.
                    </p>
                </div>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {experiences.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="p-6 sm:p-8 rounded-2xl border grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-all duration-300"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                            >
                                <div className="lg:col-span-5 space-y-3">
                                    <span
                                        className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold border"
                                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                                    >
                                        {item.period}
                                    </span>

                                    <h3 className="text-xl font-bold font-serif leading-snug" style={{ color: 'var(--text)' }}>
                                        {item.role}
                                    </h3>

                                    <div className="text-sm font-sans font-medium flex items-center gap-1.5" style={{ color: 'var(--violet)' }}>
                                        <Icon className="text-base flex-shrink-0" />
                                        <span>{item.company}</span>
                                    </div>

                                    <div className="p-4 rounded-xl border mt-4" style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                                        <div className="text-2xl sm:text-3xl font-extrabold font-serif" style={{ color: 'var(--amber)' }}>
                                            {item.metric}
                                        </div>
                                        <div className="text-xs font-sans mt-0.5" style={{ color: 'var(--text-muted)' }}>
                                            {item.metricLabel}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-7 space-y-4">
                                    <p className="text-sm leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                                        {item.summary}
                                    </p>

                                    <ul className="space-y-2">
                                        {item.achievements.map((ach, aIdx) => (
                                            <li key={aIdx} className="text-xs flex items-start gap-2.5 font-sans" style={{ color: 'var(--text-muted)' }}>
                                                <LuCheckCircle2 className="text-xs mt-0.5 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                                                <span className="leading-relaxed">{ach}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-3 flex flex-wrap gap-1.5 border-t" style={{ borderColor: 'var(--border)' }}>
                                        {item.tech.map((t, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-1 rounded text-[11px] font-mono border"
                                                style={{ background: 'var(--bg-muted)', color: 'var(--text-faint)', borderColor: 'var(--border)' }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
