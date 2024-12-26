'use client';
import React, { useEffect, useState } from 'react';

const reviews = [
    {
        platform: 'Fiverr',
        rating: 5,
        reviewMessage: 'Outstanding work! Highly recommend.',
        clientName: 'John Doe1',
        date: '2023-05-14'
    },
    {
        platform: 'Upwork',
        rating: 4.5,
        reviewMessage: 'Great experience, delivered more than expected.',
        clientName: 'Jane Smith2',
        date: '2023-06-10'
    },
    {
        platform: 'Direct',
        rating: 5,
        reviewMessage: 'Exceptional service and communication.',
        clientName: 'Michael Brown3',
        date: '2023-07-21'
    },
    {
        platform: 'Fiverr',
        rating: 4.5,
        reviewMessage: 'Professional and reliable. Will hire again!',
        clientName: 'Emily Clark4',
        date: '2023-08-05'
    },
    {
        platform: 'Upwork',
        rating: 5,
        reviewMessage: 'Excellent work ethic and quality.',
        clientName: 'David Johnson5',
        date: '2023-09-02'
    },
    {
        platform: 'Direct',
        rating: 4.5,
        reviewMessage: 'Great communication and timely delivery.',
        clientName: 'Sarah Wilson6',
        date: '2023-10-15'
    },
    {
        platform: 'Fiverr',
        rating: 5,
        reviewMessage: 'Highly professional and skilled developer.',
        clientName: 'Robert White7',
        date: '2023-11-09'
    },
    {
        platform: 'Fiverr',
        rating: 5,
        reviewMessage: 'Outstanding work! Highly recommend.',
        clientName: 'John Doe8',
        date: '2023-05-14'
    },
    {
        platform: 'Upwork',
        rating: 4.5,
        reviewMessage: 'Great experience, delivered more than expected.',
        clientName: 'Jane Smith9',
        date: '2023-06-10'
    },
    {
        platform: 'Direct',
        rating: 5,
        reviewMessage: 'Exceptional service and communication.',
        clientName: 'Michael Brown10',
        date: '2023-07-21'
    },
    {
        platform: 'Fiverr',
        rating: 4.5,
        reviewMessage: 'Professional and reliable. Will hire again!',
        clientName: 'Emily Clark11',
        date: '2023-08-05'
    },
    {
        platform: 'Upwork',
        rating: 5,
        reviewMessage: 'Excellent work ethic and quality.',
        clientName: 'David Johnson12',
        date: '2023-09-02'
    },
    {
        platform: 'Direct',
        rating: 4.5,
        reviewMessage: 'Great communication and timely delivery.',
        clientName: 'Sarah Wilson13',
        date: '2023-10-15'
    },
    {
        platform: 'Fiverr',
        rating: 5,
        reviewMessage: 'Highly professional and skilled developer.',
        clientName: 'Robert White14',
        date: '2023-11-09'
    },

];

const reviewsPerPage = 2;

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const lastIndex = reviews.length - 1;
        let newIndex = currentIndex + reviewsPerPage - 1
        newIndex = newIndex > lastIndex - reviewsPerPage ? 0 : newIndex;
        setCurrentIndex(newIndex);
    
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000); // Change interval time (in milliseconds) as needed

        return () => clearInterval(interval);
    }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="flex flex-col items-center bg-neutral-900  p-4">
            <h2 className="text-white text-center text-3xl mb-8">Client Feedback</h2>
            <div className="flex  w-full overflow-hidden relative">
                <div className="flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex) * (100 / reviews.length)}%)` }}>
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-neutral-800 text-white p-6 mx-4 rounded-lg">
                            <h3 className="text-lg font-semibold">{review.clientName}</h3>
                            <p className="text-sm text-gray-400 mb-2">{review.date}</p>
                            {/* <p className="text-yellow-500">{review.rating} / 5</p> */}
                            {/* <p className="text-gray-400 mt-2">Platform: {review.platform}</p> */}
                            <p className="text-base mb-4">{review.reviewMessage}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Feedback;
