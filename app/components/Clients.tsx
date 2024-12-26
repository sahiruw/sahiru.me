
import React from 'react';

const Feedback = () => {
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
            logo: 'https://cyntox.com/hubfs/raw_assets/public/Cyntox/images/cyntox-logo.svg'
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
    ]

    return (
        <div className="flex flex-col items-center p-4 grayscale">
            <h1 className="text-2xl text-center text-white my-10">Trusted By</h1>  
            <div className="flex flex-wrap justify-center items-center ">
                {clients.map((client) => (
                    <div key={client.id} className="flex flex-col items-center m-4 p-2 ">
                        <img src={client.logo} alt={`${client.name} logo`} className="h-8" />
                    </div>
                ))
                    }
            </div>

        </div>
    );
}

export default Feedback;
