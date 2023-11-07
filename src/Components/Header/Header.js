import React from "react";
import "../../style.css";
import "./header.css";
import { PrimaryButton } from "../Navbar/Navbar";

const Header = () => {
  const launchAppUrl = "https://task.humandao.org/";

  const handleButtonClick = () => {
    window.open(launchAppUrl, "_blank");
  };

  return (
    <header className="header">
      <div className="header--group">
        <div className="header--group--copy">
          <div className="header--title">HTF Assistants on Standby!</div>
          <p className="header--subtext">
            Delegate tasks, focus on priorities.
            <br />
            <br />
            Each task completed on our platform empowers an underserved
            individual.
            <br />
            <br />
            Save time, boost impact, uplift lives!
          </p>
          {/* PrimaryButton component located in Navbar */}
          <PrimaryButton onClick={handleButtonClick} label="Launch App" />
        </div>
        <div className="header--group--img">
          <img
            className="header--image"
            alt="Header"
            src="/img/header-image.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
