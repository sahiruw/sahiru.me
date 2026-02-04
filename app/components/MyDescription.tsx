import React from 'react';

const Feedback = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#0A1020] to-neutral-950 px-4 sm:px-6 py-16 sm:py-24">
            <p className="text-white text-center text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl">
                <span className="text-blue-500">Computer Science Engineer</span> from the{' '}
                <span className="text-blue-500">University of Moratuwa</span>, currently working as a{' '}
                <span className="text-blue-500">Software Engineer</span> at{' '}
                <span className="text-blue-500">Sysco Labs</span>. I specialize in{' '}
                <span className="text-blue-500">Backend Development</span>,{' '}
                <span className="text-blue-500">Cloud Engineering</span>, and{' '}
                <span className="text-blue-500">DevOps</span> — transforming complex challenges into elegant, scalable solutions.
            </p>
            <p className="text-white text-center text-xs sm:text-sm leading-relaxed max-w-4xl mt-8 sm:mt-16 opacity-75">
                Driven by curiosity and a passion for continuous learning, I thrive on collaboration and bringing innovative ideas to every project. My mission is to leverage technology to create meaningful impact and build solutions that improve lives.
            </p>
        </div>
    );
}

export default Feedback;
