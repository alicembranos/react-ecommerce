import { tracksList } from "services/tracks";
import { useRef, useState } from "react";

import "./Playlist.css";
import PlayListItem from "components/PlayListItem/PlayListItem";

const Playlist = ({ product }) => {
  const [tracks] = useState(tracksList); //state of list of tracks

  const defaultAudio = tracks && tracks[0].track; //first audio track default option

  const playlist = useRef();

  return (
    <section className="playlist__container">
      <h2 className="playlist__title">
        <span>{product.title}</span> Album playlist
        <span className="dots">...</span>
      </h2>
      <ul className="playlist__list" ref={playlist}>
        {tracks &&
          tracks.map((track, index) => {
            return (
              <PlayListItem
                key={index}
                track={track}
                defaultAudio={defaultAudio}
                playlist={playlist}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default Playlist;
