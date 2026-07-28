'use client';
import React, { useState } from 'react';
import { FaCalendarCheck, FaEnvelope, FaPaperPlane, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { LuClock, LuDollarSign, LuUserCheck } from 'react-icons/lu';

const ContactSection = () => {
    const [budget, setBudget] = useState<string>('$15k - $30k');
    const [selectedServices, setSelectedServices] = useState<string[]>(['AI Automation']);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState({ name: '', email: '', company: '', description: '' });

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const servicesList = ["AI Automation & RAG", "Internal Web Application", "Cloud & DevOps", "High-Throughput APIs", "Spreadsheet Modernization"];
    const budgetRanges = ["$5k - $15k", "$15k - $30k", "$30k - $50k+"];

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '12px',
        border: '1px solid var(--border)',
        background: 'var(--bg)',
        color: 'var(--text)',
        fontSize: '14px',
        outline: 'none',
    } as React.CSSProperties;

    return (
        <section
            className="py-24 relative z-10 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
            id="contact"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left column */}
                    <div className="lg:col-span-5 space-y-6">
                        <span
                            className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                            style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                        >
                            Initiate Collaboration
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight leading-tight" style={{ color: 'var(--text)' }}>
                            Ready to Eliminate Operational Bottlenecks?
                        </h2>

                        <p className="text-base leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                            Whether you need to convert fragile spreadsheet workflows, build custom AI pipelines, or architect enterprise backend services, let&apos;s map out your solution.
                        </p>

                        {/* Strategy call card */}
                        <div className="p-6 rounded-2xl border space-y-4" style={{ background: 'var(--bg-card)', borderColor: 'var(--amber)' }}>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl border" style={{ background: 'var(--amber-light)', color: 'var(--amber)', borderColor: 'var(--amber)' }}>
                                    <FaCalendarCheck className="text-lg" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-serif" style={{ color: 'var(--text)' }}>Free 30-Min Strategy Call</h3>
                                    <div className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>Direct 1-on-1 with Sahiru</div>
                                </div>
                            </div>
                            <p className="text-xs leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
                                Zero pressure. We evaluate your current workflow, spot bottlenecks, and design a custom architecture outline.
                            </p>
                            <a
                                href="https://wa.me/94772626113?text=Hi%20Sahiru%2C%20I%20would%20like%20to%20schedule%20a%20free%2030-minute%20architecture%20consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
                                style={{ background: 'var(--amber)', color: '#fff' }}
                            >
                                <FaWhatsapp className="text-lg" />
                                <span>Book via WhatsApp</span>
                            </a>
                        </div>

                        {/* Guarantees */}
                        <div className="p-5 rounded-2xl border space-y-3" style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)' }}>
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>Engagement Guarantees:</h4>
                            {[
                                { icon: LuClock, text: <><strong>48-Hour Response SLA</strong> · Fast turnaround on inquiries & RFPs.</> },
                                { icon: LuDollarSign, text: <><strong>Fixed-Fee Quotes</strong> · Clear scope with zero billing surprises.</> },
                                { icon: LuUserCheck, text: <><strong>Direct Engineer Access</strong> · Work directly with me - no middlemen.</> },
                            ].map(({ icon: Icon, text }, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-xs font-sans" style={{ color: 'var(--text-muted)' }}>
                                    <Icon className="text-sm flex-shrink-0" style={{ color: 'var(--amber)' }} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: Intake form */}
                    <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                        {submitted ? (
                            <div className="text-center py-12 space-y-4">
                                <FaCheckCircle className="text-5xl mx-auto" style={{ color: 'var(--amber)' }} />
                                <h3 className="text-2xl font-bold font-serif" style={{ color: 'var(--text)' }}>Inquiry Received!</h3>
                                <p className="text-sm max-w-md mx-auto font-sans leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                    I&apos;ll review your details and reply within 12–24 hours with initial architecture notes.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div>
                                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                                        Project Scope (select all that apply):
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {servicesList.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <button
                                                    type="button"
                                                    key={service}
                                                    onClick={() => toggleService(service)}
                                                    className="px-3 py-2 rounded-xl text-xs font-medium transition-all border"
                                                    style={isSelected
                                                        ? { background: 'var(--amber)', color: '#fff', borderColor: 'var(--amber)', fontWeight: 600 }
                                                        : { background: 'var(--bg-muted)', color: 'var(--text-muted)', borderColor: 'var(--border)' }
                                                    }
                                                >
                                                    {service}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                                        Budget Range:
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {budgetRanges.map((range) => (
                                            <button
                                                type="button"
                                                key={range}
                                                onClick={() => setBudget(range)}
                                                className="py-2.5 rounded-xl text-xs font-medium transition-all border"
                                                style={budget === range
                                                    ? { background: 'var(--amber)', color: '#fff', borderColor: 'var(--amber)', fontWeight: 600 }
                                                    : { background: 'var(--bg-muted)', color: 'var(--text-muted)', borderColor: 'var(--border)' }
                                                }
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs mb-1" style={{ color: 'var(--text-faint)' }}>Your Name *</label>
                                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Alex Morgan" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label className="block text-xs mb-1" style={{ color: 'var(--text-faint)' }}>Work Email *</label>
                                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="alex@company.com" style={inputStyle} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs mb-1" style={{ color: 'var(--text-faint)' }}>Company / Website</label>
                                    <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Acme Corp" style={inputStyle} />
                                </div>

                                <div>
                                    <label className="block text-xs mb-1" style={{ color: 'var(--text-faint)' }}>Project Details & Pain Points *</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="Describe the current operational bottleneck or goals..."
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                                    style={{ background: 'var(--amber)', color: '#fff' }}
                                >
                                    <FaPaperPlane className="text-xs" />
                                    <span>Submit Project Inquiry</span>
                                </button>

                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
