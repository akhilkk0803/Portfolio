import React from "react";
import SingleSkill from "./SingleSkill";

const Skills = () => {
  const skill = [
    {
      field: "FrontEnd Development",
      mainLogo:
        "https://cdn4.vectorstock.com/i/1000x1000/32/78/white-web-design-and-front-end-development-icon-vector-36723278.jpg",
      description:
        "I am a frontend devloper building beautiful , responsive and interactive websites/applications",
      hidden: [
        {
          language: "HTML5",
          logo: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
          description:
            "A markup language for structuring web content, essential for creating the skeleton of web pages.",
        },
        {
          language: "CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
          description:
            "Styles web pages by defining their appearance, including layout, colors, and fonts, enhancing visual appeal.",
        },
        {
          language: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          description:
            "Enables dynamic behavior and interactivity on web pages, enhancing user experience and engagement.",
        },
        {
          language: "Tailwind CSS",
          logo: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
          description:
            "Utility-first CSS framework, facilitates rapid UI development with customizable designs directly in HTML markup.",
        },
        {
          language: "ReactJS",
          logo: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
          description:
            "Library for building interactive user interfaces, particularly for single-page applications, using reusable UI components.",
        },
        {
          language: "Framer Motion",
          logo: "https://cdn.dribbble.com/users/3490038/screenshots/13820034/media/b97df08e400f38b1e4bc08b8475d78f9.png",
          description:
            "Library for adding animations and gestures to React applications, enhancing visual appeal and usability.",
        },
      ],
    },
    {
      field: "BackEnd Development",
      mainLogo:
        "https://static.vecteezy.com/system/resources/previews/016/865/530/non_2x/backend-development-line-gradient-circle-background-icon-vector.jpg",
      description:
        "I am a backend devloper ensuring smooth connectivity between using apis and ensuring data storage using complex logic",

      hidden: [
        {
          language: "Node.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
          description:
            "JavaScript runtime for server-side scripting, enabling scalable network applications outside web browsers.",
        },
        {
          language: "Express.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
          description:
            "Minimal Node.js web framework, simplifies API and web server development, ideal for scalable applications.",
        },
        {
          language: "MongoDB",
          logo: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
          description:
            "NoSQL database storing flexible JSON-like documents, suitable for diverse applications like real-time analytics.",
        },
        {
          language: "Mongoose",
          logo: "https://miro.medium.com/v2/resize:fit:1050/1*OYpEW3PMltGC2MVvJ-5QTw.png",
          description:
            "Elegant MongoDB object modeling tool for Node.js, simplifies data validation and interaction with databases.",
        },
        {
          language: "Postman",
          logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
          description:
            "Collaboration platform for API development, streamlines testing, documentation, and sharing of APIs.",
        },
      ],
    },
    {
      field: "Problem Solving using Algorithms",
      mainLogo:
        "https://static.studytonight.com/css/resource.v3/icons/subject/logo-ds.svg",
      description:
        "Showcasing my algorithmic skills solved many problems by finding optimal solutions by using necessary data structures ",
      hidden: [
        {
          language: "C++",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
          description:
            "Language for mastering data structures and algorithms, honed through solving over 550 problems on platforms like LeetCode and GeeksforGeeks.",
        },
      ],
    },
  ];

  return (
    <div className="text-white" id="skills">
      <h1 className="text-heading text-center mb-2">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-3 ">
        {skill.map((el, i) => (
          <SingleSkill key={i} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
