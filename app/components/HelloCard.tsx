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
            className="text-white absolute inset-0 flex flex-col items-center justify-center px-4 py-6 sm:p-10 mb-10 sm:mb-20"
            
        >
            <img 
                src={portraitUrl} 
                alt="Sahiru Wijesinghe" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-60 md:h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4 sm:mb-6 -pt-10" 
            />
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center">
                Hello, I&apos;m <span className="text-blue-500">Sahiru</span>
            </h1>
            <span className="text-neutral-500 text-center mt-3 sm:mt-4">
                <span className="text-base sm:text-xl md:text-2xl">A Computer Science & Engineering Undergraduate, Freelancer</span>
                <p className='text-sm sm:text-base'>Passionate About</p>
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
            </span>            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6 w-full sm:w-auto px-4 sm:px-0">
                <a
                    href="/Sahiru 1.2.1.pdf"
                    download
                    className="text-white bg-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-200 rounded-lg text-sm px-4 py-2.5 sm:py-2 text-center w-full sm:w-auto"
                >
                    Download CV
                </a><a
                    href="https://wa.me/94772626113?text=Hi%20Sahiru%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-200 rounded-lg text-sm px-4 py-2.5 sm:py-2 text-center w-full sm:w-auto"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default HelloCard;
