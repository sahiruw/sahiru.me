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
              <div className="text-sm text-blue-500 font-medium">Sysco Labs Pvt Ltd.</div>
            </div>
          </div>

          <p className="text-sm md:text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Backend systems and cloud-native solutions. Design, develop, and maintain scalable
            services with a focus on reliability, performance, and clean architecture.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>Design and implement robust backend services and APIs.</li>
            <li>Improve observability and automation for production systems.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023 Dec - 2024 May",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Software Engineering Intern
            </h4>
            <div className="text-sm text-blue-500 font-medium">GTN Technologies — Platform Engineering</div>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Contributed to core platform development and internal tooling while working alongside the
            Platform Engineering team.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>Developed features and automation to improve developer workflows.</li>
            <li>Collaborated on platform reliability and CI/CD improvements.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021 Aug - 2025 Jun",
      content: (
        <div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              B.Sc. Engineering (Hons) — Computer Science & Engineering
            </h4>
            <div className="text-sm text-blue-500 font-medium">University of Moratuwa — Faculty of Engineering</div>
          </div>

          <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300">
            Graduated with First Class honors and a minor in Mathematics. Focused on software
            engineering principles, systems, and collaborative projects.
          </p>

          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>Relevant coursework: algorithms, systems design, software engineering.</li>
            <li>Capstone and team projects emphasizing practical software development.</li>
          </ul>
        </div>
      ),
    },
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
