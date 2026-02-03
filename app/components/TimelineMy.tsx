import React from "react";
import { Timeline } from "./ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2025 Jun - To Present",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
            Sysco Labs Pvt Ltd.
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Working as a Software Engineer, focusing on backend systems and cloud-native solutions.
        Involved in designing, developing, and maintaining scalable services with an emphasis on
        reliability, performance, and clean architecture. 
          </p>
        </div>
      ),
    },
    {
      title: "2023 Dec - 2024 May",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
            GTN Technologies
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Joining as a Software Engineering Intern in the Platform Engineering Team, I had the opportunity to contribute to the development of the core platform of the organization. I worked with the latest technologies and tools in the industry, gaining valuable experience in software engineering and platform engineering.
          </p>
        </div>
      ),
    },
    {
      title: "2021 Aug - 2025 Jun",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
            University of Moratuwa - Faculty of Engineering
          </h3>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Graduated with a Bachelor of Science in Engineering (Hons) in Computer Science and Engineering (First Class), with a minor in Mathematics. Gained a strong foundation in computer science principles, software development, and engineering practices through coursework, projects, and internships.
            </p>
        </div>
      ),
    },
    {
      title: "2019 Dec - Present",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
            Freelance Developer - Apps Script & VBA
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Started freelancing as a developer, specializing in Google Apps Script and VBA. I have completed over 600 projects to date, ranging from simple automation scripts to complex web applications.
          </p>
        </div>
      ),
    },
    {
      title: "2019 Sep - 2020 Jan",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
            Innodate Lanka Pvt Ltd
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Joined as a Project Associate and worked on a project to digitalize textbooks and contributed to an XML markup project for UK standard documents. My role involved strategic use of regex, markup tools, and Python to automate essential tasks, effectively contributing as a collaborative team member.
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
            Richmond College
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Passed G.C.E A/Ls in the Physical Science Stream with 3A passes.
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
