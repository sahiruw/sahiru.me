import React from "react";
import { Timeline } from "./ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2025 Jun - To Present",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Software Engineer
              </h4>
              <div className="text-sm text-blue-500 font-medium">
                Sysco Labs Pvt Ltd. — SWMS
              </div>
            </div>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Backend engineering for large-scale supply chain systems. Building and integrating
            high-throughput services with a strong emphasis on data integrity, reliability,
            and operational resilience.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>
              Built and integrated multiple SIGMA and BlueYonder interfaces using
              <span className="font-medium"> Spring Boot, Kafka, PostgreSQL, and PL/pgSQL</span>,
              handling complex data mapping, staging, and status workflows.
            </li>
            <li>
              Designed automated purge and archival processes and authored supporting
              <span className="font-medium"> Bash utilities</span> to improve operational efficiency.
            </li>
            <li>
              Implemented unit and end-to-end tests using
              <span className="font-medium"> JUnit and Cypress</span>,
              improving confidence in critical data pipelines.
            </li>
            <li>
              Contributed to production readiness through DR runbooks and
              database performance optimization research.
            </li>
          </ul>
        </div>
      ),
    }
    ,
    {
      title: "2023 Dec - 2024 May",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Software Engineering Intern
            </h4>
            <div className="text-sm text-blue-500 font-medium">
              GTN Technologies — Platform Engineering
            </div>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Platform engineering internship focused on infrastructure automation,
            CI/CD reliability, cloud security, and developer productivity for fintech systems.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>
              Enhanced CI pipelines with static code analysis and automated
              <span className="font-medium"> DAST using OWASP ZAP</span>.
            </li>
            <li>
              Optimized AWS resource usage by implementing policy-driven governance with
              <span className="font-medium"> Cloud Custodian</span>.
            </li>
            <li>
              Modularized and standardized infrastructure using
              <span className="font-medium"> Terraform</span> for reusable IaC components.
            </li>
            <li>
              Reduced AMI build times by <span className="font-medium">62.5%</span> through
              <span className="font-medium"> Packer</span> optimizations.
            </li>
            <li>
              Implemented <span className="font-medium">DORA metrics</span> and observability
              dashboards using <span className="font-medium">Datadog</span>.
            </li>
          </ul>
        </div>
      ),
    }
    ,
    {
      title: "2021 Aug - 2025 Jun",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              B.Sc. Engineering (Hons) — Computer Science & Engineering
            </h4>
            <div className="text-sm text-blue-500 font-medium">
              University of Moratuwa — Faculty of Engineering
            </div>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Graduated with <span className="font-medium">First Class Honors</span> (CGPA:{" "}
            <span className="font-medium">3.73</span>) and a <span className="font-medium">Minor in Mathematics</span>.
            Strong focus on software engineering, distributed systems, backend development,
            and cloud-native architectures.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>
              <span className="font-medium">Dean’s List:</span> Semesters 02, 06, 07, and 08
            </li>
            <li>
              Relevant coursework: Algorithms, Data Structures, Systems Design,
              Software Engineering, Databases
            </li>
            <li>
              <span className="font-medium">Publication:</span> MERCon 2025 — Transformer-based intent
              classification for automated software deployment plan generation
            </li>
            <li>
              Competitive programming & engineering competitions:
              IEEEXtreme 16.0 (Sri Lanka Rank 9, Global Rank 220),
              Bashaway 2022 (Winners),
              Code Squad V3.0 (Second Runners-Up)
            </li>
          </ul>
        </div>
      ),
    }
    ,
    {
      title: "2019 Dec - Present",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Freelance Developer
            </h4>
            <div className="text-sm text-blue-500 font-medium">Apps Script & VBA</div>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Specialize in Google Apps Script and VBA for automation, spreadsheet tools, and
            lightweight web tooling.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>Delivered 600+ projects across automation, reporting, and custom client workflows.</li>
            <li>Focus on clear requirements, maintainable scripts, and user-friendly results.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019 Sep - 2020 Jan",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Project Associate
            </h4>
            <div className="text-sm text-blue-500 font-medium">Innodate Lanka Pvt Ltd</div>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Worked on textbook digitization and XML markup for UK-standard documents, using
            automation to improve throughput and accuracy.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>Developed Python scripts and markup tools to streamline document processing.</li>
            <li>Applied regex and automated checks to ensure markup consistency.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2010 Jan - 2019 Aug",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Richmond College
            </h4>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Completed G.C.E. A/L (Physical Science Stream) with 3 A passes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
