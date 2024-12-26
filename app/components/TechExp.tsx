import React from 'react';

const technologies = [
    // Programming Languages
    { name: 'Java', logo: '/logo/java.png' },
    { name: 'JavaScript/TypeScript', logo: '/logo/js-ts.jpg' },
    { name: 'Python', logo: '/logo/python.png' },
    { name: 'C++', logo: '/logo/cpp.png' },
    { name: 'Bash', logo: '/logo/bash.png' },
    { name: 'Apps Script', logo: '/logo/apps-script.png' },
    { name: 'VBA', logo: '/logo/vba.png' },

    // Web Frameworks and Libraries
    { name: 'ReactJS', logo: '/logo/reactjs.png' },
    { name: 'NextJS', logo: '/logo/nextjs.png' },
    { name: 'Express', logo: '/logo/express.webp' },
    { name: 'FastAPI', logo: '/logo/fastapi.webp' },
    { name: 'React Native', logo: '/logo/react-native.png' },

    // Databases and Caching
    { name: 'MySQL', logo: '/logo/mysql.png' },
    { name: 'Redis', logo: '/logo/redis.png' },

    // Cloud and DevOps Tools
    { name: 'AWS', logo: '/logo/aws.png' },
    { name: 'Terraform', logo: '/logo/tf.png' },
    { name: 'Packer', logo: '/logo/packer.png' },
    { name: 'Docker', logo: '/logo/docker.webp' },
    { name: 'Cloud Custodian', logo: '/logo/cc.png' },

    // CI/CD and Version Control
    { name: 'GitHub', logo: '/logo/github.png' },
    { name: 'GitLab', logo: '/logo/gitlab.webp' },

    // Other Tools
    { name: 'Firebase', logo: '/logo/firebase.png' },
    { name: 'ZAP', logo: '/logo/zap.png' },
];


const TechStack = () => {
    return (
        <div className="text-white px-6 pt-40 py-20 z-0 bg-gradient-to-b from-[#0A1020] to-[#565963]">
            <h1 className="text-4xl text-center font-bold my-10">Hands-On Experience</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="group  hover:bg-white hover:shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:-translate-y-2"
                    >
                        <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                        />
                        <p className="mt-4 text-center text-sm font-medium group-hover:text-black">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
