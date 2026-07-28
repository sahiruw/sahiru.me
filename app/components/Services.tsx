'use client';
import React from 'react';
import { FaRobot, FaTable, FaCloud, FaServer, FaSyncAlt } from 'react-icons/fa';

const services = [
  {
    icon: FaRobot,
    title: "AI Business Automation",
    badge: "High Impact",
    description: "Build custom LLM agents, LangChain RAG systems, and document processing pipelines that automate repetitive operational workflows.",
    deliverables: ["Custom RAG Knowledge Bases", "Automated Document Parsing", "LLM API Integrations", "Workflow Bottleneck Elimination"]
  },
  {
    icon: FaTable,
    title: "Internal Business Web Apps",
    badge: "Popular",
    description: "Replace error-prone Excel spreadsheets and Google Sheets with modern, multi-user web applications designed for multi-location teams.",
    deliverables: ["Custom Inventory Platforms", "Order & PO Management", "Role-Based Access Control", "Mobile Floor-Staff Interfaces"]
  },
  {
    icon: FaCloud,
    title: "Cloud Infrastructure & DevOps",
    badge: "Scalability",
    description: "Architect secure, cost-optimized cloud infrastructure on AWS using Infrastructure-as-Code (Terraform) and automated CI/CD pipelines.",
    deliverables: ["Terraform Infrastructure Modules", "Containerization (Docker)", "Automated Cloud Cost Guardrails", "CI/CD & DAST Security Scans"]
  },
  {
    icon: FaServer,
    title: "High-Throughput API & Microservices",
    badge: "Enterprise",
    description: "Design high-concurrency backend services, message queues, and staging database pipelines capable of handling millions of records.",
    deliverables: ["Spring Boot & NestJS REST APIs", "Event-Driven Queues (Kafka)", "PostgreSQL Query Optimization", "Warehouse/ERP Integrations"]
  },
  {
    icon: FaSyncAlt,
    title: "Legacy Software Modernization",
    badge: "Migration",
    description: "Safely transition legacy VBA macros, Microsoft Access tools, and desktop scripts into modern cloud-native software architectures.",
    deliverables: ["Google Apps Script & Webhooks", "VBA to Cloud Web App Migration", "Database Schema Refactoring", "Zero-Downtime Cutover"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-[#070D1B] border-t border-white/5 relative z-10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            What I Can Build For You
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Specialized Engineering Services
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
            From initial architecture discovery to production deployment, here is how I help businesses save time, lower costs, and scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <Icon className="text-xl" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-neutral-400 border border-white/5">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
