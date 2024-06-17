'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

const HelloCard = () => {
    let passions = ["Computer Science & Engineering Undergraduate", "Web Developer", "Mobile App Developer", "Apps Script & VBA Expert"];
    const portraitUrl = '/me.png'; // Replace with your actual image URL

    return (
        <div className='text-white absolute bottom-0 left-0 w-3/6 p-10'>

            <img src={portraitUrl} alt="Sahiru Wijesinghe" className='h-60 mr-4' />
            <h1 className="text-4xl md:text-6xl font-bold">Hello, <span className='text-orange-700'>I'm Sahiru Wijesinghe</span></h1>
            <span className='text-neutral-500'>
                <p className="text-xl md:text-2xl">A Passionate</p>
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
            <button type="button" className="text-white bg-orange-700 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-200 rounded-lg text-sm px-2 py-1 text-center mt-2 mb-2 ">Download My CV</button>
        </div>
    );
};

export default HelloCard;
