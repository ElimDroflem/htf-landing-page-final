import React from "react";
import "../../style.css";
import "./services.css";
import { serviceData } from "./serviceData";
import ServiceBox from "./SubComponents/ServiceBox";

const Services = () => {
  return (
    <div className="services">
      {/* title */}
      <div className="services--header">Current Services</div>
      {/* top line of boxes */}
      <div className="services--top">
        {serviceData.map((service, index) => (
          <ServiceBox
            key={index}
            imgSrc={service.imgSrc}
            altText={service.altText}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      {/* wide box */}
      <div className="services--tailored">
        <h2>Tailored For You</h2>
        <p>Need something unique? Reach out for custom services.</p>
        <button className="button--main">Contact Us</button>
      </div>
    </div>
  );
};

export default Services;
