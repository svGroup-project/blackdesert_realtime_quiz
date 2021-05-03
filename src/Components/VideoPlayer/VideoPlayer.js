import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ width, height }) => {
  return (
    <div className="videoPlayer">
      <iframe
        className="video"
        type="text/html"
        width={width}
        height={height}
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
