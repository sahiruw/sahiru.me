import React from 'react';

const Feedback = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#0A1020] to-neutral-950 px-4 sm:px-6 py-16 sm:py-24">
            <p className="text-white text-center text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl">
                A <span className="text-blue-500">Computer Science and Engineering</span> undergraduate at the <span className="text-blue-500">University of Moratuwa</span>, specializing in <span className="text-blue-500">backend development</span>, <span className="text-blue-500">cloud engineering</span>, and <span className="text-blue-500">DevOps</span>. Passionate about building robust systems and scalable solutions, I thrive on turning complex challenges into elegant code.
            </p>
            <p className="text-white text-center text-xs sm:text-sm leading-relaxed max-w-4xl mt-8 sm:mt-16 opacity-75">
                I love learning new things and finding creative solutions to problems. I enjoy working with different teams and bringing fresh ideas to projects. My goal is to use technology to make a positive difference in the world and help improve people&apos;s lives.
            </p>
        </div>
    );
}

export default Feedback;
