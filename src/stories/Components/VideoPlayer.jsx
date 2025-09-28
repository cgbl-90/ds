import { useRef } from "react";
import PropTypes from "prop-types";
import { Button } from "../Atoms/Button";
import "./videoplayer.css";

export const VideoPlayer = ({ videoId }) => {
  const iframeRef = useRef(null);

  const sendCommand = (command) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: "" }),
        "*"
      );
    }
  };

  return (
    <div className="video-player-container">
      <iframe
        ref={iframeRef}
        className="video-player-iframe"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="video-player-controls">
        <Button label="Play" onClick={() => sendCommand("playVideo")} primary />
        <Button label="Stop" onClick={() => sendCommand("stopVideo")} primary />
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};
