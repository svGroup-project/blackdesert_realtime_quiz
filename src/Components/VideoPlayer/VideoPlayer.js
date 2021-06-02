import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ width, height, movieUrl }) => {
  return (
    <div className="videoPlayer">
      <iframe
        className="video"
        type="text/html"
        width={width}
        height={height}
        src={movieUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
