import React from 'react';
import Image from 'next/image';

const techSections = [
    {
        title: 'Languages',
        items: [
            { name: 'Java', logo: '/logo/java.png' },
            { name: 'JavaScript/TypeScript', logo: '/logo/js-ts.jpg' },
            { name: 'Python', logo: '/logo/python.png' },
            { name: 'C++', logo: '/logo/cpp.png' },
            { name: 'Bash', logo: '/logo/bash.png' },
            { name: 'Apps Script', logo: '/logo/apps-script.png' },
            { name: 'VBA', logo: '/logo/vba.png' },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        items: [
            { name: 'ReactJS', logo: '/logo/reactjs.png' },
            { name: 'NextJS', logo: '/logo/nextjs.png' },
            { name: 'Express', logo: '/logo/express.webp' },
            { name: 'FastAPI', logo: '/logo/fastapi.webp' },
            { name: 'React Native', logo: '/logo/react-native.png' },
        ],
    },
    {
        title: 'Databases & Caching',
        items: [
            { name: 'MySQL', logo: '/logo/mysql.png' },
            { name: 'Redis', logo: '/logo/redis.png' },
        ],
    },
    {
        title: 'Cloud & DevOps',
        items: [
            { name: 'AWS', logo: '/logo/aws.png' },
            { name: 'Terraform', logo: '/logo/tf.png' },
            { name: 'Packer', logo: '/logo/packer.png' },
            { name: 'Docker', logo: '/logo/docker.webp' },
            { name: 'Cloud Custodian', logo: '/logo/cc.png' },
        ],
    },
    {
        title: 'CI / Version Control',
        items: [
            { name: 'GitHub', logo: '/logo/github.png' },
            { name: 'GitLab', logo: '/logo/gitlab.webp' },
        ],
    },
    {
        title: 'Other Tools',
        items: [
            { name: 'Firebase', logo: '/logo/firebase.png' },
            { name: 'ZAP', logo: '/logo/zap.png' },
        ],
    },
];


const TechStack = () => {
    return (
        <section className="text-white px-6 pt-24 pb-20 bg-gradient-to-b from-[#0A1020] to-neutral-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-2">Hands-On Experience</h2>
                <p className="text-center text-sm text-neutral-300 mb-8 max-w-2xl mx-auto">
                    Tools, frameworks and platforms I use regularly to build reliable systems and automation.
                </p>

                <div className="space-y-8">
                    {techSections.map((section) => (
                        <div key={section.title}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm uppercase tracking-wide text-neutral-300 font-medium">{section.title}</h3>
                                <span className="text-xs text-neutral-400">{section.items.length}</span>
                            </div>

                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {section.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        role="listitem"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/7 transition transform hover:-translate-y-1 shadow-sm"
                                    >
                                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-white/6 dark:bg-white/3 flex items-center justify-center border border-white/6 overflow-hidden">
                                            <Image src={tech.logo} alt={`${tech.name} logo`} width={40} height={40} className="object-contain" />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-medium truncate">{tech.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
