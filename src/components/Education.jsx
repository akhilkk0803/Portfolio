import React from "react";
import {
  Avatar,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
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
    study: "Bachelor of Engineering -Information Science and Engineering",
    info: "Object Oriented Programming , Database Managment Systems ,Data Structes and Alogirthm ,Finite Automata,Computer Networks,Operating Systems",
  },
];

const Education = () => {
  return (
    <div className="text-white p-6 flex flex-col gap-2 items-center justify-center " id="education">
      <p className="text-3xl">Education</p>
      <Stepper orientation="vertical" colorScheme="purple">
        {steps.map((el, ind) => (
          <div className="p-4">
            <Step key={ind}>
              <StepIndicator>{ind + 1}</StepIndicator>
              <div className="flex flex-col   border border-blue-400 p-4 rounded-lg">
                <div className="flex justify-start p-2 gap-3">
                  <img
                    src={el.logo}
                    className="h-12 w-12 rounded-lg"
                    alt="logo"
                  />
                  <div>
                    <p className="text-lg font-semibold">{el.school}</p>
                    <p>{el.study}</p>
                    <p>{el.year}</p>
                  </div>
                </div>
                {el.cgpa && (
                  <div>
                    <p>CGPA/Percentage: {el?.cgpa}</p>
                  </div>
                )}
                <div>{el?.info}</div>
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
