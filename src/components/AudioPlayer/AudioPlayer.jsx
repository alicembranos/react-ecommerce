import { useState, useCallback } from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audioPlayer">
      <audio
        src="https://rascalsthemes.com/demo/vex/audio/Wok_Hard.mp3"
        preload="metadata"
      ></audio>
      <button className="forwardBackward">
        <KeyboardArrowLeftOutlinedIcon fontSize="large" />
      </button>
      <button className="playPause" onClick={togglePlayPause}>
        {isPlaying ? (
          <PauseOutlinedIcon fontSize="large" />
        ) : (
          <PlayArrowOutlinedIcon fontSize="large" />
        )}
      </button>
      <button className="forwardBackward">
        <KeyboardArrowRightOutlinedIcon fontSize="large" />
      </button>

      <div className="currentTime">0:00</div>
      <div>
        <input type="range" className="progressBar"/>
      </div>
      <div className="duration">2:49</div>
    </div>
  );
};

export default AudioPlayer;
