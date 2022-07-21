import { useState, useRef, useEffect } from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import "./AudioPlayer.css";

const AudioPlayer = ({ audioTrack, classHide }) => {
  //state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  //references
  const audioPlayer = useRef(); //reference the audio component
  const progressBar = useRef(); //reference our progress bar
  const animationRef = useRef(); //reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const handleDuration = () => {
    const seconds = Math.floor(audioPlayer?.current?.duration);
    setDuration(seconds);
  };

  /**
   * If the number of minutes is less than 10, add a zero to the front of the number, otherwise just
   * return the number of minutes. Then, if the number of seconds is less than 10, add a zero to the
   * front of the number, otherwise just return the number of seconds. Then, return the number of minutes
   * and seconds with a colon in between.
   * @returns a string.
   */
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  /**
   * If the audio is playing, pause it and cancel the animation frame, otherwise play it and start the
   * animation frame.
   */
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  /**
   * WhilePlaying() is a function that is called every time the audio player is playing, and it updates
   * the progress bar and the current time display.
   */
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  /**
   * When the user clicks on the progress bar, the audio player's current time is set to the progress
   * bar's value, and the player's current time is changed.
   */
  const handleRange = (e) => {
    console.log(progressBar.current.value);
    audioPlayer.current.currentTime = progressBar.current.value;
    console.log("es mas 30" + audioPlayer.current.currentTime);
    changePlayerCurrentTime();
  };

  /**
   * ChangePlayerCurrentTime() is a function that changes the current time of the player to the value of
   * the progress bar.
   */
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  /**
   * When the backThirty button is clicked, the progress bar's value is decreased by 30 and the
   * handleRange function is called.
   */
  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    handleRange();
  };

  /**
   * When the forwardThirty function is called, the value of the progress bar is increased by 30 and the
   * handleRange function is called.
   */
  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    handleRange();
  };

  return (
    <div className={`audioPlayer ${classHide ? "hide" : ""}`}>
      <audio
        ref={audioPlayer}
        src={audioTrack}
        preload="metadata"
        onLoadedMetadata={handleDuration}
      ></audio>
      <button className="forwardBackward" onClick={backThirty}>
        <KeyboardArrowLeftOutlinedIcon fontSize="medium" />
        30
      </button>
      <button className="playPause" onClick={togglePlayPause}>
        {isPlaying ? (
          <PauseOutlinedIcon fontSize="large" />
        ) : (
          <PlayArrowOutlinedIcon fontSize="large" />
        )}
      </button>
      <button className="forwardBackward" onClick={forwardThirty}>
        30
        <KeyboardArrowRightOutlinedIcon fontSize="medium" />
      </button>

      <div className="managePlayer">
        <div className="currentTime">{calculateTime(currentTime)}</div>
        <div>
          <input
            type="range"
            className="progressBar"
            defaultValue={0}
            ref={progressBar}
            onChange={handleRange}
          />
        </div>
        <div className="duration">
          {!isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
