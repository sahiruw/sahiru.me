"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const reviews = [
  {
    platform: "Fiverr",
    rating: 3.5,
    reviewMessage: "Outstanding work! Highly recommend.",
    clientName: "John Doe1",
    date: "2023-05-14",
  },
  {
    platform: "Upwork",
    rating: 4.5,
    reviewMessage: "Great experience, delivered more than expected.",
    clientName: "Jane Smith2",
    date: "2023-06-10",
  },
  {
    platform: "Direct",
    rating: 1.5,
    reviewMessage: "Exceptional service and communication.",
    clientName: "Michael Brown3",
    date: "2023-07-21",
  },
  {
    platform: "Fiverr",
    rating: 4.5,
    reviewMessage: "Professional and reliable. Will hire again!",
    clientName: "Emily Clark4",
    date: "2023-08-05",
  },
  {
    platform: "Upwork",
    rating: 2.5,
    reviewMessage: "Excellent work ethic and quality.",
    clientName: "David Johnson5",
    date: "2023-09-02",
  },
  {
    platform: "Direct",
    rating: 4.5,
    reviewMessage: "Great communication and timely delivery.",
    clientName: "Sarah Wilson6",
    date: "2023-10-15",
  },
  {
    platform: "Fiverr",
    rating: 1,
    reviewMessage: "Highly professional and skilled developer.",
    clientName: "Robert White7",
    date: "2023-11-09",
  },
  {
    platform: "Fiverr",
    rating: 4,
    reviewMessage: "Outstanding work! Highly recommend.",
    clientName: "John Doe8",
    date: "2023-05-14",
  },
  {
    platform: "Upwork",
    rating: 4.5,
    reviewMessage: "Great experience, delivered more than expected.",
    clientName: "Jane Smith9",
    date: "2023-06-10",
  },
  {
    platform: "Direct",
    rating: 3,
    reviewMessage: "Exceptional service and communication.",
    clientName: "Michael Brown10",
    date: "2023-07-21",
  },
  {
    platform: "Fiverr",
    rating: 4.5,
    reviewMessage: "Professional and reliable. Will hire again!",
    clientName: "Emily Clark11",
    date: "2023-08-05",
  },
  {
    platform: "Upwork",
    rating: 1,
    reviewMessage: "Excellent work ethic and quality.",
    clientName: "David Johnson12",
    date: "2023-09-02",
  },
  {
    platform: "Direct",
    rating: 4.5,
    reviewMessage: "Great communication and timely delivery.",
    clientName: "Sarah Wilson13",
    date: "2023-10-15",
  },
  {
    platform: "Fiverr",
    rating: 5,
    reviewMessage: "Highly professional and skilled developer.",
    clientName: "Robert White14",
    date: "2023-11-09",
  },
];

const reviewsPerPage = 2;

const Feedback = () => {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl text-center font-bold my-10 text-white">
        What My Clients Say
      </h1>
      <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
    </div>
  );
};

export default Feedback;
