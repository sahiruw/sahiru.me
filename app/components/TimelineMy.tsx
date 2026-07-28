import React from "react";
import { Timeline } from "./ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2025 Jun - Present",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white">
                Software Engineer — Supply Chain & Logistics
              </h4>
              <div className="text-sm text-blue-400 font-medium mt-0.5">
                Sysco Labs (Fortune 500 Enterprise Supply Chain)
              </div>
            </div>
          </div>

          <p className="text-sm mt-3 text-neutral-300 leading-relaxed">
            Engineering high-throughput integration services that automate warehouse operations and real-time inventory staging for one of the world&apos;s largest food distribution networks.
          </p>

          <ul className="mt-4 list-disc list-inside text-xs sm:text-sm text-neutral-400 space-y-1.5">
            <li>
              Engineered high-concurrency SIGMA & BlueYonder backend interfaces handling millions of warehouse shipment records daily using <span className="text-white font-medium">Spring Boot, Kafka, and PostgreSQL</span>.
            </li>
            <li>
              Designed automated database archival & purging utilities with <span className="text-white font-medium">Bash & PL/pgSQL</span>, preventing database lock bottlenecks.
            </li>
            <li>
              Established comprehensive test automation (<span className="text-white font-medium">JUnit & Cypress</span>) ensuring zero regression bugs across critical logistics pipelines.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023 Dec - 2024 May",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white">
              Software Engineering Intern — Platform & Security
            </h4>
            <div className="text-sm text-blue-400 font-medium mt-0.5">
              GTN Technologies (Fintech Platform Engineering)
            </div>
          </div>

          <p className="text-sm mt-3 text-neutral-300 leading-relaxed">
            Architected cloud governance rules and infrastructure automation pipelines to cut AWS cloud costs and eliminate release bottlenecks for enterprise fintech systems.
          </p>

          <ul className="mt-4 list-disc list-inside text-xs sm:text-sm text-neutral-400 space-y-1.5">
            <li>
              Reduced cloud AMI build times by <span className="text-emerald-400 font-bold">62.5%</span> using optimized <span className="text-white font-medium">Packer</span> pipelines.
            </li>
            <li>
              Enforced automated AWS cost governance via policy rules (<span className="text-white font-medium">Cloud Custodian</span>), saving thousands monthly in orphan resources.
            </li>
            <li>
              Integrated automated dynamic security scanning (<span className="text-white font-medium">OWASP ZAP DAST</span>) directly into deployment pipelines.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021 Aug - 2025 Jun",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white">
              B.Sc. Engineering (Hons) — Computer Science & Engineering
            </h4>
            <div className="text-sm text-blue-400 font-medium mt-0.5">
              University of Moratuwa — Faculty of Engineering
            </div>
          </div>

          <p className="text-sm mt-3 text-neutral-300 leading-relaxed">
            Graduated with <span className="text-white font-semibold">First Class Honors (CGPA: 3.73/4.00)</span> and a Minor in Mathematics.
          </p>

          <ul className="mt-4 list-disc list-inside text-xs sm:text-sm text-neutral-400 space-y-1.5">
            <li><span className="text-white font-medium">Dean’s List Honors:</span> Semesters 02, 06, 07, and 08</li>
            <li><span className="text-white font-medium">IEEE Published Researcher:</span> Transformer-based intent classification for deployment plan automation (MERCon 2025)</li>
            <li><span className="text-white font-medium">National Hackathon Winner:</span> Bashaway 2022 Champions, Code Squad V3.0 2nd Runners-Up</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019 Dec - Present",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white">
              Freelance AI & Automation Engineer
            </h4>
            <div className="text-sm text-blue-400 font-medium mt-0.5">Independent Consultancy</div>
          </div>

          <p className="text-sm mt-3 text-neutral-300 leading-relaxed">
            Delivered over <span className="text-emerald-400 font-bold">600+ custom software and automation solutions</span> for international businesses and mid-market companies.
          </p>

          <ul className="mt-4 list-disc list-inside text-xs sm:text-sm text-neutral-400 space-y-1.5">
            <li>Specializing in converting spreadsheet workflows into full-stack web platforms and cloud automations.</li>
            <li>Consistent 5.0-star rating across global freelancing platforms.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          Professional Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Track Record & Enterprise Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
