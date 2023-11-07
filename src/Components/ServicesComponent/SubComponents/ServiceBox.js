import "../../../style.css";
import "../services.css";
import React from "react";

const ServiceBox = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="services--group">
      <div className="services--title">
        <img className="img-2" alt={altText} src={imgSrc} />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceBox;
