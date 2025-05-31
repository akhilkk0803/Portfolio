import { Avatar } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  const profiles = [
    {
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
      name: "LeetCode",
      description:
        "I hone my problem-solving skills on LeetCode, mastering algorithms and data structures.",
      link: "https://leetcode.com/Akhilkk03/",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/1280px-GeeksforGeeks.svg.png",
      name: "Geeks For Geeks",
      description:
        "I explore various problem-solving techniques and algorithms on Geeks for Geeks, enhancing my coding skills.",
      link: "https://www.geeksforgeeks.org/user/akhilkk0803/",
    },
    {
      logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      name: "GitHub",
      description:
        "Check out my GitHub profile where I showcase my development projects and contributions to open-source.",
      link: "https://github.com/akhilkk0803",
    },
  ];

  const ProfileCard = ({ logo, name, description, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:no-underline"
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform group-hover:scale-105">
        <div className="flex items-center gap-6">
          <Avatar src={logo} alt={name} size="lg" />
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="text-white p-6" id="profile">
      <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-8">
        My Profiles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
