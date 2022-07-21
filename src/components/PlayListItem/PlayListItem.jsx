import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import AudioPlayer from "components/AudioPlayer/AudioPlayer";
import { useState } from "react";

import "./PlayListItem.css";

const PlayListItem = ({ index, track, defaultAudio, playlist }) => {
  const [audioTrack, setAudioTrack] = useState(defaultAudio);
  const [hide, setHide] = useState(true);

  const handleTrack = ({ target }) => {
    console.log(target);
    setAudioTrack(target.dataset.audio);
    setHide(!hide);
  };

  return (
    <>
      <li
        key={index}
        className="playlist__track"
        onClick={handleTrack}
        data-audio={track.track}
      >
        <div className="playlist__start">
          <span>
            <PlayArrowIcon fontSize="medium" />
          </span>
          <p className="playlist__track-text">{track.name}</p>
        </div>
        <div className="playlist__li-end">
          <p className="playlist__track-text">{track.duration}</p>
          <a href="./">
            <DownloadIcon fontSize="medium" />
          </a>
        </div>
      </li>
      <div>
        <AudioPlayer classHide={hide} audioTrack={audioTrack} />
      </div>
    </>
  );
};

export default PlayListItem;
