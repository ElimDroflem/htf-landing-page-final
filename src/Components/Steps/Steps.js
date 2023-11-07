import React from "react";
import "../../style.css";
import "./steps.css";

const Steps = () => {
  return (
    <div className="steps">
      {/* Left side img & Copy */}
      <div className="steps--container">
        <div className="steps--left">
          <img
            className="HTF-platform-image"
            alt="Htf platform image"
            src="/img/htf-platform-image-2-1.png"
          />
          <div className="steps--left-copy">
            <h2>How it Works</h2>
            <p>
              Maximize efficiency with the HTF platform in just three simple
              steps.
            </p>
          </div>
        </div>
        {/* right side steps */}
        {/* first step */}
        <div className="steps--right">
          <div className="steps--right-group">
            <div className="steps--right-title">Step 1: Energy</div>
            <img
              className="img"
              alt="Iconamoon lightning"
              src="/img/iconamoon-lightning-1-fill.svg"
            />
            <p className="steps--right-text">
              Purchase energy and gain entry to our pool of expert assistants
            </p>
          </div>
          {/* first line */}
          <img className="line" alt="Line" src="/img/line-1.svg" />
          {/* second step */}
          <div className="steps--right-group">
            <div className="steps--right-title">Step 2: Delegate Work</div>
            <img
              className="img"
              alt="Mdi briefcase"
              src="/img/mdi-briefcase.svg"
            />
            <p className="steps--right-text">
              Trade your energy to enlist assistance tailored to your needs
            </p>
          </div>
          {/* second line */}
          <img className="line" alt="Line" src="/img/line-1.svg" />
          {/* third step */}
          <div className="steps--right-group">
            <div className="steps--right-title">Step 3: Achieve Excellence</div>
            <img className="img" alt="Uis chart" src="/img/uis-chart.svg" />
            <p className="steps--right-text">
              Receive the completed task, saving you time and resources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
