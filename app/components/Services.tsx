'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuBot, LuTable, LuGlobe, LuCheck, LuArrowRight } from 'react-icons/lu';

const services = [
  {
    icon: LuTable,
    title: "Spreadsheet Automation",
    badge: "Sheets & Excel",
    description: "If you're spending hours on repetitive copy-paste, manual reports, or maintaining a complicated spreadsheet - I automate it. Google Sheets, Excel, or Apps Script.",
    deliverables: ["Automated Reports & Dashboards", "Data Validation & Cleanup", "Google Apps Script Tools", "Excel VBA Macros", "Form-to-Sheet Workflows", "Scheduled Email Reports"]
  },
  {
    icon: LuGlobe,
    title: "Custom Web Apps",
    badge: "Web Apps",
    description: "When a spreadsheet isn't enough, I build simple web tools tailored to your workflow - multi-user, accessible from any device, no bloat.",
    deliverables: ["Inventory & Order Systems", "Custom Dashboards", "Role-Based Access", "Mobile-Friendly Interfaces", "Form & Data Entry Tools", "Client-Facing Portals"]
  },
  {
    icon: LuBot,
    title: "AI Integrations",
    badge: "AI Tools",
    description: "Add practical AI to tools you already use - auto-categorise data, draft responses, extract info from documents, or build a knowledge base your team can query.",
    deliverables: ["ChatGPT / Gemini API Wrappers", "Document Parsing & Extraction", "AI-Powered Spreadsheet Tools", "Chatbots & Q&A Systems", "Auto-Tagging & Classification", "Workflow Assistants"]
  }
];

const Services = () => {
  return (
    <section
      className="py-24 relative z-10 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-muted)' }}
      id="services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
            style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
          >
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 tracking-tight" style={{ color: 'var(--text)' }}>
            Three Things, Done Well
          </h2>
          <p className="text-base sm:text-lg mt-4 leading-relaxed font-sans" style={{ color: 'var(--text-muted)' }}>
            I keep it focused. Spreadsheet automation, web apps, and AI integrations - practical solutions for real problems, whatever your size or budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="h-11 w-11 rounded-xl border flex items-center justify-center transition-all duration-300"
                      style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)', color: 'var(--amber)' }}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <span
                      className="text-[11px] font-mono font-medium px-3 py-1 rounded-md border"
                      style={{ background: 'var(--amber-light)', color: 'var(--amber)', borderColor: 'var(--amber)' }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif mb-3" style={{ color: 'var(--text)' }}>
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6 font-sans" style={{ color: 'var(--text-muted)' }}>
                    {service.description}
                  </p>
                </div>

                <div className="border-t pt-5 mt-2" style={{ borderColor: 'var(--border)' }}>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-faint)' }}>
                    Examples:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="text-xs flex items-center gap-2 font-sans" style={{ color: 'var(--text-muted)' }}>
                        <LuCheck className="text-xs flex-shrink-0" style={{ color: 'var(--amber)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl border transition-all"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            <span>Not sure which fits? Let&apos;s figure it out</span>
            <LuArrowRight className="text-xs" style={{ color: 'var(--amber)' }} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
