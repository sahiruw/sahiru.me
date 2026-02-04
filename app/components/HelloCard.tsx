'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

const HelloCard = () => {
    let passions = [
        "Web Development",
        "Mobile App Development",
        "Cloud & DevOps",
        "Genrative AI & ML",
        "Apps Script & VBA Automation",
    ];
    const portraitUrl = '/me3.png';

    return (
        <div 
            className="text-white absolute inset-0 flex flex-col items-center justify-center p-10 mb-20"
            
        >
            <img 
                src={portraitUrl} 
                alt="Sahiru Wijesinghe" 
                className="w-32 h-32 md:w-60 md:h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6 -pt-10" 
            />
            <h1 className="text-4xl md:text-6xl font-bold text-center">
                Hello, I&apos;m <span className="text-blue-500">Sahiru</span>
            </h1>
            <span className="text-neutral-500 text-center mt-4">
                <span className="text-xl md:text-2xl">A Computer Science & Engineering Undergraduate, Freelancer</span>
                <p className='text-base'>Passionate About</p>
                <span className="text-neutral-300">
                    <Typewriter
                        options={{
                            strings: passions,
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true
                        }}
                    />
                </span>
            </span>
            <div className="flex space-x-4 mt-6">
                <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-200 rounded-lg text-sm px-4 py-2 text-center"
                >
                    Download CV
                </button>
                <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-200 rounded-lg text-sm px-4 py-2 text-center"
                >
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default HelloCard;
