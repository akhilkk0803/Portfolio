import React, { useEffect, useState } from "react";
import Connect from "../assets/projects/connect.png";
import HomeAway from "../assets/projects/homeaway.png";
import ChatterMate from "../assets/projects/chatter-mate.png";
import Announcment from "../assets/projects/connect-annoucne.png";
import Signup from "../assets/projects/connect-signup.png";
import Profile from "../assets/projects/connect-profile.png";
import SingleProject from "./SingleProject";
import Streamify from "../assets/projects/streamify.png";
import Elo from "../assets/projects/elo.png";
import Elo2 from "../assets/projects/elo2.png";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import arrow icons

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projectList = [
    {
      id: 1,
      name: "CONNECT",
      logo: [Connect, Profile, Announcment, Signup],
      Techstack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Aws",
        "RestApi",
        "ChakraUI",
      ],
      shortDescription:
        "A social media platform for campus communication built with MERN stack",
      description: `
  A social media platform for campus communication built with MERN stack:
  - Comprehensive platform designed for seamless communication within a college campus.
  - Centralized hub for clubs, departments, and students, facilitating efficient interaction and collaboration.
  - Features a wide array of functionalities, including announcements, authorization management, profile photo uploads, and a versatile posting system.
  - JWT authentication implemented to ensure secure user access to the platform, providing robust user authorization management.
  - Integrates with AWS services, particularly AWS S3 for image storage, ensuring scalability and reliability of image uploads.
  - Key highlights include RESTful APIs, which offer a standardized communication protocol for seamless interaction between the frontend and backend components.
  - Boasts a user-friendly interface, making it intuitive and easy to use for all users.
      `,
      githubLink: "https://github.com/akhilkk0803/NIECONNECT",
      websiteLink: "https://connect-lemon-delta.vercel.app/",
    },
    {
      id: 2,
      name: "Chatter Mate",
      logo: [ChatterMate],
      Techstack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "WebSockets",
        "SocketIo",
        "TailwindCss",
        "ChakraUI",
      ],
      shortDescription:
        "A real-time group messaging application built with MERN stack and WebSocket.",
      description: `
  A real-time group messaging application built with MERN stack and WebSocket:
  - Allows users to create groups and send instant messages in real-time.
  - Implements real-time communication using WebSocket and Socket.io, ensuring a seamless and responsive messaging experience.
  - Offline notifications alert users to missed messages, ensuring that important messages are never missed.
  - Technology stack includes MongoDB for database management, React.js for the frontend, Node.js with Express.js for the backend, and Tailwind CSS for styling.
  - Provides a user-friendly interface for smooth navigation and interaction.
      `,
      githubLink: "https://github.com/akhilkk0803/Chatter-Mate",
      websiteLink: "https://chatter-mate-763ed.web.app/",
    },
    {
      id: 3,
      name: "HomeAway",
      logo: [HomeAway],
      Techstack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TailwindCss",
      ],
      shortDescription:
        "A secure hotel booking application built with MERN stack.",
      description: `
  A secure hotel booking application built with MERN stack:
  - Features hotel booking, creation, image uploading, and cancellation through RESTful APIs (Express.js) and React.js with MATERIAL UI.
  - Utilizes MongoDB for efficient data storage and retrieval, ensuring a seamless and responsive user experience.
  - Key features include robust user authentication, property listings with high-quality images and descriptions, responsive design for various devices, and interactive maps for property locations and nearby attractions.
  - MERN stack was chosen for its seamless integration of MongoDB, Express.js, React, and Node.js, ensuring scalability and providing a top-notch user experience for the hotel booking platform.
      `,
      githubLink:
        "https://github.com/akhilkk0803/HomeAway-A-hotel-booking-Application",
      websiteLink: "https://homeaway-ea02b.web.app/",
    },
    {
      id: 4,
      name: "Streamify",
      logo: [Streamify],
      Techstack: ["HTML", "CSS", "JavaScript", "React.js", "Material-UI"],
      shortDescription:
        "A video streaming application with search capabilities, utilizing YouTube's API.",
      description: `
  A video streaming application with search capabilities, utilizing YouTube's API:
  - Allows users to search for videos and stream content using YouTube's API.
  - Provides a seamless and responsive user interface for an enhanced viewing experience.
  - Integration with YouTube's vast library of content.
      `,
      githubLink: "https://github.com/akhilkk0803/Youtube-clone",
      websiteLink: "https://clone-c0468.web.app/",
    },
    {
      id: 5,
      name: "ELO-ECOMMERCE",
      logo: [Elo, Elo2],
      Techstack: ["HTML", "CSS", "JavaScript", "React.js"],
      shortDescription:
        "An eCommerce website for tech products with essential functionalities.",
      description: `
  An eCommerce website for tech products with essential functionalities:
  - Offers a wide range of tech products and features essential functionalities such as checkout, add to cart, sorting, filtering, and searching.
  - Provides users with a seamless shopping experience and easy navigation.
  - Aims to provide customers with a convenient and hassle-free online shopping experience for tech products.
      `,
      githubLink: "https://github.com/akhilkk0803/Elo-ecommerce",
      websiteLink: "https://eloecommerce-7cea4.web.app/",
    },
  ];

  return (
    <div
      className="text-white text-center p-4 mt-5  w-full relative"
      id="projects"
    >
      <p className="text-heading mb-4">
        My <span className="text-primary"> Projects</span>
      </p>
      <div className="flex justify-center gap-5 mt-2 flex-wrap">
        {projectList.map((el) => (
          <motion.div key={el.id} layoutId={el.id}>
            <SingleProject
              el={el}
              changeState={setSelectedId}
              image={[el.logo[0]]}
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <div className="">
            <div
              className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75 z-30"
              onClick={() => setSelectedId(null)}
            />
            <div className="flex justify-center absolute top-[25%] left-0 w-full">
              <motion.div
                layoutId={selectedId}
                className="  bg-slate-900 p-6 z-40 relative"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-0 right-3 text-white"
                >
                  X
                </button>
                <div className="">
                  <SingleProject
                    full={true}
                    el={projectList.find((item) => item.id === selectedId)}
                    image={
                      projectList.find((item) => item.id === selectedId).logo
                    }
                  />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
