import React from "react";
import "../../style.css";
import "./video.css";

const Video = () => {
  return (
    <div className="video">
      <div className="video--container">
        <div className="video--title">Human Task Force: How It Works</div>
        <video
          className="video--screen"
          controls
          poster={`${process.env.PUBLIC_URL}/img/video-screen.png`}
        >
          <source
            src={`${process.env.PUBLIC_URL}/video/coverr-premium-ai-generated-autumn-serenity-by-the-lake-6371-1080p-w.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
