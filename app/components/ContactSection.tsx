'use client';
import React, { useState } from 'react';
import { FaCalendarCheck, FaEnvelope, FaPaperPlane, FaWhatsapp, FaCheckCircle, FaLock } from 'react-icons/fa';

const ContactSection = () => {
    const [budget, setBudget] = useState<string>('$15k - $30k');
    const [selectedServices, setSelectedServices] = useState<string[]>(['AI Automation']);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        description: ''
    });

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const servicesList = [
        "AI Automation & RAG",
        "Internal Web Application",
        "Cloud & DevOps Infrastructure",
        "High-Throughput APIs",
        "Excel / Sheet Modernization"
    ];

    const budgetRanges = [
        "$5k - $15k",
        "$15k - $30k",
        "$30k - $50k+"
    ];

    return (
        <section className="py-24 bg-[#0A1020] border-t border-white/5 relative z-10" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Value Prop & Lead Magnet */}
                    <div className="lg:col-span-5">
                        <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                            Start Your Project
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
                            Let&apos;s Build Something Scalable Together.
                        </h2>
                        <p className="text-neutral-300 text-base mt-4 leading-relaxed">
                            Have a spreadsheet workflow that needs converting, an AI system to build, or cloud infrastructure to automate? Schedule a call or submit your project details below.
                        </p>

                        {/* Free Consultation Callout Card */}
                        <div className="mt-8 p-6 rounded-2xl bg-blue-950/30 border border-blue-500/30 backdrop-blur-md">
                            <div className="flex items-center gap-3 mb-2">
                                <FaCalendarCheck className="text-blue-400 text-xl" />
                                <h3 className="text-lg font-bold text-white">
                                    Free 30-Min Architecture Consultation
                                </h3>
                            </div>
                            <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                                No obligation. We will review your current technical bottleneck, evaluate spreadsheet workflows, and outline a high-level system architecture.
                            </p>
                            <a
                                href="https://wa.me/94772626113?text=Hi%20Sahiru%2C%20I%20would%20like%20to%20schedule%20a%20free%2030-minute%20architecture%20consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
                            >
                                <FaWhatsapp className="text-lg" />
                                Book Call via WhatsApp / Direct
                            </a>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="mt-8 space-y-3 text-xs text-neutral-400">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-400" />
                                <span>Direct Email: <a href="mailto:contact@sahiru.me" className="text-white hover:underline">contact@sahiru.me</a></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLock className="text-blue-400" />
                                <span>NDA Compliant & Strict Confidentiality Guaranteed</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: High-Converting Project Intake Form */}
                    <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                        {submitted ? (
                            <div className="text-center py-12">
                                <FaCheckCircle className="text-emerald-400 text-5xl mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Project Submission Received!</h3>
                                <p className="text-neutral-300 text-sm max-w-md mx-auto">
                                    Thank you for reaching out. I will review your project details and respond within 12 hours with initial architecture notes.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Services Selection */}
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                                        I Need Help With (Select all that apply):
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {servicesList.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <button
                                                    type="button"
                                                    key={service}
                                                    onClick={() => toggleService(service)}
                                                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                                                        isSelected
                                                            ? 'bg-blue-600 text-white border border-blue-500'
                                                            : 'bg-white/5 text-neutral-400 border border-white/5 hover:text-white'
                                                    }`}
                                                >
                                                    {service}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Budget Range */}
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                                        Estimated Project Budget:
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {budgetRanges.map((range) => (
                                            <button
                                                type="button"
                                                key={range}
                                                onClick={() => setBudget(range)}
                                                className={`py-2.5 rounded-xl text-xs font-medium transition-all text-center ${
                                                    budget === range
                                                        ? 'bg-blue-600 text-white border border-blue-500'
                                                        : 'bg-white/5 text-neutral-400 border border-white/5 hover:text-white'
                                                }`}
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Form Input Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs text-neutral-400 mb-1">Your Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="e.g. John Smith"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs text-neutral-400 mb-1">Work Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-neutral-400 mb-1">Company / Website</label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        placeholder="Company Name or URL"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs text-neutral-400 mb-1">Project Description & Outcomes *</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="Describe the business problem, current workflow, or desired feature set..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                                >
                                    <FaPaperPlane className="text-xs" />
                                    Submit Project Inquiry
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
