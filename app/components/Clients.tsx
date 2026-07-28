'use client';
import React from 'react';

const Clients = () => {
    const clients = [
        { id: 1, name: 'Way of Music', logo: '/clients/wayofmusic.png' },
        { id: 2, name: 'Craig', logo: '/clients/craig.png' },
        { id: 3, name: 'Cyntox', logo: 'https://cdn-ildoame.nitrocdn.com/ZqFwFBjwpWBxMmZTSPKSdactsMJGXyBn/assets/images/optimized/rev-0a1502e/cyntox.com/wp-content/uploads/2025/04/cyntox-logo.png' },
        { id: 6, name: 'Forfend', logo: '/clients/forfend.png' },
        { id: 4, name: 'Pokemon', logo: 'https://corporate.pokemon.com/nav-logo-e51b9dccc59253c037a68511544ae97a.png' },
        { id: 5, name: 'Capstone', logo: '/clients/capstone.png' },
        { id: 7, name: 'Rividco', logo: '/clients/rividco.png' }
    ];

    return (
        <section
            className="w-full py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-muted)' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <span
                        className="text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                        style={{ color: 'var(--amber)', borderColor: 'var(--amber)', background: 'var(--amber-light)' }}
                    >
                        Client Trust
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif mt-3 tracking-tight" style={{ color: 'var(--text)' }}>
                        Clients & Collaborators
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="group flex items-center justify-center p-4 rounded-xl border transition-all duration-300"
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                            title={client.name}
                        >
                            <div className="relative h-10 w-28 flex items-center justify-center">
                                <img
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
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
