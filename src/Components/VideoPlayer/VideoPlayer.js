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
        // src="https://www.youtube.com/embed/WMweEpGlu_U"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
