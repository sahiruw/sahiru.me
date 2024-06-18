import React from 'react';

const technologies = [
    { name: 'Java', logo: '/logo/java.png' },
    //   { name: 'JavaScript', logo: '/logo/javascript.png' },
    //   { name: 'TypeScript', logo: '/logo/typescript.png' },
    { name: 'JavaScript/TypeScript', logo: '/logo/js-ts.jpg' },
    { name: 'Python', logo: '/logo/python.png' },
    { name: 'C++', logo: '/logo/cpp.png' },
    { name: 'Bash', logo: '/logo/bash.png' },
    { name: 'VBA', logo: '/logo/vba.png' },
    { name: 'Apps Script', logo: '/logo/apps-script.png' },
    { name: 'ReactJS', logo: '/logo/reactjs.png' },
    { name: 'NextJS', logo: '/logo/nextjs.png' },
    { name: 'Express', logo: '/logo/express.png' },
    { name: 'Firebase', logo: '/logo/firebase.png' },
    { name: 'MySQL', logo: '/logo/mysql.png' },
    { name: 'React Native', logo: '/logo/react-native.png' },
    { name: 'Docker', logo: '/logo/docker.svg' },
    { name: 'GitLab', logo: '/logo/gitlab.webp' },
    { name: 'GitHub', logo: '/logo/github.png' },
    { name: 'ZAP', logo: '/logo/zap.png' },
    { name: 'AWS', logo: '/logo/aws.png' },
    { name: 'Packer', logo: '/logo/packer.png' },
    { name: 'Terraform', logo: '/logo/tf.png' },
    { name: 'Cloud Custodian', logo: '/logo/cc.png' },
];

const TechStack = () => {
    return (
        <div className='bg-neutral-600 p-6 my-32 z-0 transition-all duration-700 ease-in-out '>
            <h1 className="text-2xl text-center my-10">Hands-On Experience</h1>
            <div className="flex flex-wrap justify-center items-center ">

                {technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center m-4 hover:bg-neutral-50 p-2 ">
                        <img src={tech.logo} alt={`${tech.name} logo`} className="h-16 focus:h-24" />
                        <p className=" mt-2 text-center">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
