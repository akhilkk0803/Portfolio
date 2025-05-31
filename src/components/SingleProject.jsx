import React, { useState } from "react";
import { Card, CardFooter, Image, Link } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SingleProject = ({ el, changeState, image, full = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handlers for navigating images
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Card
      maxW={full ? "xl" : "md"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.800"
      boxShadow="xl"
      p="6"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "2xl",
      }}
    >
      {/* Image Carousel */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {full && (
          <button
            onClick={handlePrevImage}
            style={{
              position: "absolute",
              top: "50%",
              left: "5px",
              transform: "translateY(-50%)",
              zIndex: "1",
            }}
            className="text-purple-500 hover:text-purple-300"
          >
            <FiChevronLeft size={28} />
          </button>
        )}
        <Image
          src={image[currentImageIndex]}
          alt={el.name}
          borderRadius="lg"
          transition="transform 0.3s"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
        {full && (
          <button
            onClick={handleNextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: "5px",
              transform: "translateY(-50%)",
              zIndex: "1",
            }}
            className="text-purple-500 hover:text-purple-300"
          >
            <FiChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex gap-2 flex-wrap mt-4">
        {el.Techstack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-sm px-3 py-1 rounded-lg text-gray-200 hover:bg-purple-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Details */}
      <div className="flex flex-col mt-4 gap-3">
        <h3 className="text-2xl font-bold text-white">{el.name}</h3>
        <p className="text-slate-300 text-start text-sm leading-6">
          {full ? el.description : `${el.description.slice(0, 150)}...`}
        </p>
      </div>

      {/* Footer Links */}
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <Link
            href={el.githubLink}
            target="_blank"
            color="blue.400"
            fontWeight="bold"
            _hover={{ color: "blue.300", textDecoration: "underline" }}
          >
            View GitHub Repo
          </Link>
          <Link
            href={el.websiteLink}
            target="_blank"
            color="purple.400"
            fontWeight="bold"
            _hover={{ color: "purple.300", textDecoration: "underline" }}
          >
            View Website
          </Link>
          {!full && (
            <button
              className="text-red-500 font-medium hover:underline hover:text-red-400"
              onClick={() => changeState(el.id)}
            >
              View More
            </button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default SingleProject;
