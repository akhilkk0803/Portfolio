import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // FiX for close icon
import ProfilePhoto from "../assets/myimg.png";
import { Avatar } from "@chakra-ui/react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-white flex justify-between p-4 md:p-10">
      <div>
        <h2>
          <span className="md:hidden inline">
            <Avatar
              src={
                "https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png"
              }
            />
          </span>
          AKHIL <span className="text-purple-800">K KULKARNI</span>
        </h2>
      </div>
      <div className="relative">
        {/* Menu icon */}
        <div className="md:hidden">
          <FiMenu
            className="text-xl cursor-pointer text-primary"
            onClick={toggleMenu}
          />
        </div>
        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-64 bg-gray-800 z-50 transition-all duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:bg-transparent md:w-auto md:flex md:flex-row md:items-center md:translate-x-0`}
        >
          <div className="flex flex-col md:flex-row gap-4 p-4">
            {/* Close icon */}
            <div className="md:hidden">
              <FiX
                className="text-xl cursor-pointer absolute top-4 right-4"
                onClick={toggleMenu}
              />
            </div>
            {/* Menu items */}
            <motion.a
              whileHover={{ y: -2, scale: 1.1 }}
              href="#"
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://drive.google.com/file/d/1c_03qvmhVJLqB5t73auuK6O7XhwluJNM/view?usp=drivesdk "
              target="_blank"
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#skills"
              className="text-white "
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#projects"
              className="text-white "
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#education"
              className="text-white "
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#profile"
              className="text-white "
              onClick={() => setIsMenuOpen(false)}
            >
              Profiles
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#contact"
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
