'use client';
import React from 'react'

const TimelineC = () => {
    return (
        <div className='relative bg-neutral-900  z-0'>
            <div className="absolute inset-0 bg-cover bg-center blur h-full" style={{ backgroundImage: `url("./road.jpg")`}}>
                <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div className="relative z-10 w-5/6 ml-32 p-40">
                <h1 className="text-white text-2xl text-left my-10">My Journey</h1>

                <div className='flex justify-center items-center '>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        {TimelineItem('GTN Technologies', '2023 Dec - 2024 May', 'Joining as a Software Engineering Intern in the Platform Engineering Team, I got the oppertunity to contribute to the development of the core platform of the organization. I was able to work with the latest technologies and tools in the industry and gained valuable experience in the field of software engineering and platform engineering.')}
                        {TimelineItem('University of Moratuwa - Faculty of Engineering', '2021 Aug - Present', 'Currently pursuing my degree in Computer Science and Engineering.')}
                        {TimelineItem('Freelance Developer - Apps Script & VBA', '2019 Dec - Present', 'Started freelancing as a developer, specializing in Google Apps Script and VBA. I have completed over 600 projects to date, ranging from simple automation scripts to complex web applications.')}
                        {TimelineItem('Innodate Lanka Pvt Ltd', '2019 Sep - 2020 Jan', 'Joined as a Project Associate and worked on a project to digitalize textbooks and contributed to an XML markup project for UK standard documents.'
                            + ' My role entailed the strategic use of regex, markup tools, and Python to automate essential tasks, contributing effectively as a collaborative team member.')}
                        {TimelineItem('Richmond College', '2019', 'Passed G.C.E A/Ls in Physical Science Stream with 3A passes.')}
                    </ol>

                </div>
            </div>
        </div>

    )
}


const TimelineItem = (title: string, date: string, description: string) => {
    return (
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
        </li>
    )
}

export default TimelineC