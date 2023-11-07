import React from "react";
import "../../style.css";
import "./skills.css";
import ServiceBox from "../ServicesComponent/SubComponents/ServiceBox";

const skillsData = [
  {
    imgSrc: "/img/new-person.svg",
    altText: "Vector",
    title: "Growth",
    description:
      "We scout intelligent individuals from underserved communities.",
  },
  {
    imgSrc: "/img/money.svg",
    altText: "Vector",
    title: "Income",
    description:
      "Task completion on our platform generates revenue for Assistants.",
  },
  {
    imgSrc: "/img/degree-hat.png",
    altText: "Mdi university",
    title: "Upskill",
    description:
      "We furnish the training and platform for self-driven upskilling.",
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills--container">
        <p className="skills--title">
          Improving Lives Through Human Task Force
        </p>
        <div className="skills--container-group">
          {/* ServiceBox component is in the ServicesComponent -> SubComponent */}
          {skillsData.map((service, index) => (
            <ServiceBox
              key={index}
              imgSrc={service.imgSrc}
              altText={service.altText}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
