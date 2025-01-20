import { color } from "framer-motion";

export const projects = [
  {
    id: 1,
    title: "B-Airways: A Flight Booking System",
    category: "Web Development",
    imageUrl: "/projects/BAirways.jpg",
    description_md: "This is a description of project one.",
    shortDescription: "A flight booking system with Seat Selection, Payment Gateway, and Admin Panel.",
    tags: ["React", "Express", "Node", "MySQL"],
    urls: [
      {
        title: "View Code",
        url: "https://github.com/sahiruw/bairways",
        type: "codebase",
      },
    ],
    color: "#BAE2C7",	
  },

  {
    id: 2,
    title: "Deplora: AI Powered Deployment Platform",
    category: "Research & Development",
    imageUrl: "/projects/deplora.png",
    description_md: "This is a description of project one.",
    shortDescription: "A tool automating deployment plans via code analysis and user-adaptive CI/CD workflows, leveraging Agentic Workflows and KnowledgeGraph personalization.",
    tags: ["React", "Express", "Node", "MySQL"],
    urls: [
      {
        title: "View Code",
        url: "https://github.com/sahiruw/bairways",
        type: "codebase",
      },
    ],
    color: "#000FFF",
  },
  {
    id: 3,
    title: "Post Office Automation System",
    category: "Mobile App Development",
    imageUrl: "/projects/poapp.jpg",
    description_md: "This is a description of project one.",
    shortDescription: "Development of the Mobile Application for handling Mail and Parcel Delivery System of the Post Office.",
    tags: ["React", "Express", "Node", "MySQL"],
    urls: [
      {
        title: "View Code",
        url: "https://github.com/sahiruw/bairways",
        type: "codebase",
      },
    ],color: "#FFFFFF"
  },

  {
    id: 4,
    title: "Medicare-Tantun",
    category: "Web App Development",
    imageUrl: "/projects/tantun.jpg",
    description_md: "This project is a web-based healthcare management system designed to streamline patient care, appointment scheduling, and medical record management.",
    shortDescription: "Development of a Web Application for providing medical insuarance assistance.",
    tags: ["NextJS", "FastAPI", "AWS"],
    urls: [
      {
        title: "View Code",
        url: "https://github.com/sahiruw/medicare-tantun",
        type: "codebase"
      }
    ],
    color: "#E6F7FF"
  }
  
  
];
