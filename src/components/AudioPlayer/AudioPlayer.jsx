import { useState, useRef, useEffect } from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //references
  const audioPlayer = useRef();

  const handleDuration = () => {
    const seconds = Math.floor(audioPlayer?.current?.duration);
    setDuration(seconds);
  };

  const calculateTime = (secs) => {
    console.log(secs);
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(minutes % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  console.log("esto es " + duration);
  return (
    <div className="audioPlayer">
      <audio
        ref={audioPlayer}
        src="https://rascalsthemes.com/demo/vex/audio/Wok_Hard.mp3"
        preload="metadata"
        onLoadedMetadata={handleDuration}
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

      <div className="currentTime">{calculateTime(currentTime)}</div>
      <div>
        <input type="range" className="progressBar" defaultValue={0}/>
      </div>
      <div className="duration">
        {!isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default AudioPlayer;
