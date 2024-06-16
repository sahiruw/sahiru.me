'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';


const HelloCard = () => {
    let passions = ["Computer Science & Engineering Undergraduate", "Web Developer", "Mobile App Developer", "Apps Script & VBA Expert"]

    return (

        <div className='text-white absolute bottom-0 left-0 w-3/6 p-10'>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, <span className='text-orange-700'>I'm Sahiru Wijesinghe</span></h1>
            <span className='text-neutral-500'>
            <p className="text-xl md:text-2xl">A Passionate </p>
            <span className='text-neutral-300'>
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
        </div>

    );
};

export default HelloCard;
