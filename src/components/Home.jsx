import React from "react";
import ProfilePic from "../assets/myimg.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Profile from "./Profile";
import Footer from "./Footer";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <motion.div
        className="flex justify-center text-white"
        initial={{
          y: -1000,
        }}
        animate={{
          y: 0,
        }}
        transition={{ duration: 1 }}
      >
        <div className="flex md:flex-row  flex-col  justify-center gap-10 p-4  items-center">
          <div className="max-w-[45%] flex flex-col gap-6">
            <h2 className="text-xl">Akhil K Kulkarni</h2>
            <h1 className="text-3xl">
              A Engineering Student and a{" "}
              <span className="text-purple-500"> FULL STACK WEB DEVELOPER</span>
            </h1>
            <p className="">
              From front-end finesse to back-end brilliance, I am your{" "}
              <span className="text-purple-500"> full stack architect.</span>
            </p>
            <div className="flex gap-4 items-center mt-4 mb-5">
              <div className="">
                <a
                  href="../../public/Final-resume.pdf"
                  download={"AKHILKKULKARNI_resume.pdf"}
                >
                  <span className="text-purple-600 flex gap-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Resume
                  </span>
                </a>
              </div>
              <p className=" bg-purple-600 px-4 py-1 rounded-3xl">
                <NavLink>Contact Me</NavLink>
              </p>
            </div>
          </div>
          <div className="md:block hidden">
            <div className="relative">
              <img src={ProfilePic} alt="" className="rounded-full " />
              <FaGithub
                className="text-3xl absolute bottom-14 left-8 bg-purple-600 rounded-full hover:bg-black 
          cursor-pointer"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <Skills />
      <Projects />
      <Education />
      <Profile />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
