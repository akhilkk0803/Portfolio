import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <div className="text-white ">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#150f34a0"
            fill-opacity="1"
            d="M0,192L60,181.3C120,171,240,149,360,138.7C480,128,600,128,720,133.3C840,139,960,149,1080,138.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className=" absolute top-[50%] right-[40%] p-4 flex flex-col  gap-2 ">
          <div className="text-center text-primary text-xl">Akhil K Kulkarni</div>
          <div className="flex gap-3 ">
            <a href="#">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>
          <div className="flex justify-between text-2xl">
            <a
              href="https://www.linkedin.com/in/akhil-k-kulkarni-6a2b65223/"
              target="_blank"
            >
              <CiLinkedin />
            </a>
            <a href="https://github.com/akhilkk0803" target="_blank">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/Akhilkk03/" target="_blank">
              <SiLeetcode />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/akhilkk0803/"
              target="_blank"
            >
              <SiGeeksforgeeks />
            </a>
          </div>
        </div>
      </div>
      {/* Footer content */}
    </div>
  );
};

export default Footer;
