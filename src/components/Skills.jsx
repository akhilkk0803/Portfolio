import React, { useState } from "react";
import skillsData from "../skillsData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab index

  return (
    <div className="text-white" id="skills">
      <h1 className="text-heading text-center mb-10 text-4xl font-bold">
        My <span className="text-primary">Skills</span>
      </h1>

      {/* Tabs for Skill Categories */}
      <div className="flex justify-center gap-6 mb-8">
        {skillsData.map((category, index) => (
          <button
            key={index}
            className={`relative py-2 px-4 rounded-lg text-lg font-semibold ${
              activeTab === index
                ? "text-white after:content-[''] after:absolute after:w-full after:h-1 after:bg-purple-500 after:rounded-md after:bottom-0 after:left-0"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {category.field}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData[activeTab].hidden.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-900"
          >
            <img
              src={skill.logo}
              alt={`${skill.language} logo`}
              className="w-18 h-16 mx-auto mb-4 rounded-full bg-gray-700 p-2"
            />
            <h3 className="text-lg font-semibold text-center text-purple-400">
              {skill.language}
            </h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
