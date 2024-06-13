'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';


const HelloCard = () => {
    let passions = ["Computer Science Undergraduate", "Web Developer", "Software Developer", "Programmer", "Tech Enthusiast", "Learner"]

    return (

        <div className='text-white absolute bottom-0 left-0 w-3/6 p-10'>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Sahiru Wijesinghe</h1>
            <p className="text-xl md:text-2xl">A Passionate <Typewriter
                options={{
                    strings: passions,
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true
                }}
            /></p>
            
        </div>

    );
};

export default HelloCard;
