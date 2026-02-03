
'use client';

import React from 'react';
import Image from 'next/image';

const Clients = () => {
    const clients = [
        {
            id: 1,
            name: 'Way of Music',
            logo: '/clients/wayofmusic.png'
        },
        {
            id: 2,
            name: 'Craig',
            logo: '/clients/craig.png'
        },
        {
            id: 3,
            name: 'Cyntox',
            logo: 'https://cdn-ildoame.nitrocdn.com/ZqFwFBjwpWBxMmZTSPKSdactsMJGXyBn/assets/images/optimized/rev-0a1502e/cyntox.com/wp-content/uploads/2025/04/cyntox-logo.png'
        },
        {
            id: 6,
            name: 'Forfend',
            logo: '/clients/forfend.png'
        },
        {
            id: 4,
            name: 'Pokemon',
            logo: 'https://corporate.pokemon.com/nav-logo-e51b9dccc59253c037a68511544ae97a.png'
        },
        {
            id: 5,
            name: 'Capstone',
            logo: '/clients/capstone.png'
        },
        {
            id: 7,
            name: 'Rividco',
            logo: '/clients/rividco.png'
        }
    ];

    return (
        <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Trusted By
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Working with amazing companies and teams
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="group flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            title={client.name}
                        >
                            <div className="relative h-12 w-32 flex items-center justify-center">
                                <img
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
