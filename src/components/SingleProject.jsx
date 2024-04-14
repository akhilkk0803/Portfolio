import React, { useState } from "react";
import { Card, CardFooter, Image, Link } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SingleProject = ({ el, changeState, image, full = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      boxShadow="md"
      padding={"15px"}
    >
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
            className="text-purple-500"
          >
            <FiChevronLeft size={24} />
          </button>
        )}
        <Image src={image[currentImageIndex]} alt={el.name} />
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
            className="text-purple-500"
          >
            <FiChevronRight size={24} />
          </button>
        )}
      </div>
      <div className="flex gap-2 flex-wrap text-primary mt-3 ">
        {el.Techstack.map((el) => (
          <div className="bg-gray-800 px-3 py-1  rounded-lg">{el}</div>
        ))}
      </div>

      <div className="flex flex-col items-start justify-start mt-3 gap-3">
        <p className="text-2xl text-white">{el.name}</p>
        <p className="text-slate-300 text-start">
          {full ? el.description : <>{el.description.slice(0, 150)}...</>}
        </p>
      </div>

      <CardFooter>
        <div className="flex justify-between w-full">
          <Link
            href={el.githubLink}
            target="_blank"
            color="blue.500"
            _hover={{ color: "blue.600" }}
            className="hover:underline"
          >
            View GitHub Repo
          </Link>
          <Link
            href={el.websiteLink}
            target="_blank"
            color="purple.500"
            _hover={{ color: "purple.300" }}
            className="hover:underline"
          >
            View Website
          </Link>
          {!full && (
            <button
              className="text-red-500 md:inline hidden hover:underline hover:text-red-400"
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
