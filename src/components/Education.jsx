import React from "react";
import {
  Step,
  StepIndicator,
  StepSeparator,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  {
    school: "Anthony Claret School (ICSE)",
    year: "2007-2015",
    logo: "https://acschool.edu.in/images/about/logo.png",
    study: "LKG-6th",
  },
  {
    school: "BEL VIDYALAYA CBSE",
    year: "2015-2019",
    logo: "https://e7.pngegg.com/pngimages/352/69/png-clipart-bel-high-school-bel-pre-university-college-bel-primary-school-central-board-of-secondary-education-school-electronics-text-thumbnail.png",
    cgpa: "85.2%",
    study: "7th-10th",
  },
  {
    school: "Vidyamandir Ind P.U College",
    year: "2019-2021",
    logo: "https://vmipuc.org/img/final-logo/vmipc-logo.png",
    cgpa: "90%",
    study: "11th-12th",
    info: "Physics, Chemistry, Math, ComputerScience",
  },
  {
    school: "National Institute of Engineering Mysore",
    year: "2021-2025",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/NIE_University_logo.svg",
    cgpa: "9",
    study: "Bachelor of Engineering - Information Science and Engineering",
    info: "OOP, DBMS, Data Structures, Algorithms, Finite Automata, Computer Networks, Operating Systems",
  },
];

const Education = () => {
  return (
    <div
      className="text-white p-6 flex flex-col gap-4 items-center justify-center"
      id="education"
    >
      <p className="text-3xl font-bold text-center mb-6 text-purple-500">
        Education
      </p>
      <Stepper orientation="vertical" colorScheme="purple">
        {steps.map((el, ind) => (
          <div className="p-4 w-full" key={ind}>
            <Step>
              <StepIndicator
                className="text-white"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                {ind + 1}
              </StepIndicator>
              <div className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-all">
                <div className="flex justify-start gap-4 items-center">
                  <img
                    src={el.logo}
                    className="h-16 w-16 rounded-full"
                    alt="school logo"
                  />
                  <div>
                    <p className="text-xl font-semibold">{el.school}</p>
                    <p className="text-sm">{el.study}</p>
                    <p className="text-sm text-gray-400">{el.year}</p>
                  </div>
                </div>
                {el.cgpa && (
                  <div className="mt-2">
                    <p className="text-lg font-medium text-gray-300">
                      CGPA/Percentage: {el.cgpa}
                    </p>
                  </div>
                )}
                {el.info && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">{el.info}</p>
                  </div>
                )}
              </div>
              <StepSeparator style={{ borderColor: "purple" }} />
            </Step>
          </div>
        ))}
      </Stepper>
    </div>
  );
};

export default Education;
