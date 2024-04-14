import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Box,
} from "@chakra-ui/react";

const SingleSkill = ({ el }) => {
  return (
    <div className="p-5 bg-gray-900 rounded-lg  h-fit">
      <div className="p-6 flex flex-col justify-center gap-4">
        <p className="text-center text-2xl font-bold">{el.field}</p>
        <div className="flex items-center justify-center gap-4">
          <Avatar src={el.mainLogo} />
          <p className="text-sm text-gray-400">{el.description}</p>
        </div>
        <Accordion allowToggle>
          <AccordionItem
            border="none"
            _first={{ borderTop: "none" }}
            _last={{ borderBottom: "none" }}
          >
            <AccordionButton
              _expanded={{ border: "3px solid #9333ea" }}
              bg="gray.700"
              color="white"
              px={4}
              py={2}
              borderRadius="md"
              className="flex justify-between"
            >
              <p className="text-md">Skills</p>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <div className="flex flex-col gap-3">
                {el.hidden.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-purple-400 p-2 gap-3"
                  >
                    <Avatar src={skill.logo} size="lg" className="h-16 w-16" />
                    <div>
                      <p className="text-lg font-semibold">{skill.language}</p>
                      <p className="text-sm text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SingleSkill;
