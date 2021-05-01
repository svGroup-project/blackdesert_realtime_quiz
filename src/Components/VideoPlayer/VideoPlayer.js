import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = () => {
  return (
    <div className="videoPlayer">
      <iframe
        className="video"
        type="text/html"
        width="1040"
        height="584.9"
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
