import React from 'react';

const Feedback = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-neutral-900 mt-24">
            <p className="text-white text-center text-2xl leading-relaxed max-w-4xl">
                A <span className="text-orange-700">Computer Science and Engineering</span> undergraduate at the <span className="text-orange-700">University of Moratuwa</span>, specializing in <span className="text-orange-700">backend development</span>, <span className="text-orange-700">cloud engineering</span>, and <span className="text-orange-700">DevOps</span>. Passionate about building robust systems and scalable solutions, I thrive on turning complex challenges into elegant code.
            </p>
            <p className="text-white text-center text-sm leading-relaxed max-w-4xl mt-16 opacity-75">
                I love learning new things and finding creative solutions to problems. I enjoy working with different teams and bringing fresh ideas to projects. My goal is to use technology to make a positive difference in the world and help improve people&apos;s lives.
            </p>
        </div>
    );
}

export default Feedback;
