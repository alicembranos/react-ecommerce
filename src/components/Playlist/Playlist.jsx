import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import "./Playlist.css";
import MusicPlayer from "components/MusicPlayer/MusicPlayer";

const Playlist = ({ product }) => {
  return (
    <section className="playlist__container">
      <h2 className="playlist__title">
        <span>{product.title}</span> Album playlist{" "}
        <span className="dots">...</span>
      </h2>
      <ul className="playlist__list">
        <li className="playlist__track">
          <div className="playlist__start">
            <span>
              <PlayArrowIcon fontSize="large" />
            </span>
            <p className="playlist__track-text">Turbo Mix</p>
          </div>
          <p className="playlist__track-text">3:00</p>
          <a href="./">
            <DownloadIcon fontSize="large" />
          </a>
        </li>
        <li className="playlist__track">
          <div className="playlist__start">
            <span>
              <PlayArrowIcon fontSize="large" />
            </span>
            <p className="playlist__track-text">Turbo Mix</p>
          </div>
          <p className="playlist__track-text">3:00</p>
          <a href="./">
            <DownloadIcon fontSize="large" />
          </a>
        </li>
        <li className="playlist__track">
          <div className="playlist__start">
            <span>
              <PlayArrowIcon fontSize="large" />
            </span>
            <p className="playlist__track-text">Turbo Mix</p>
          </div>
          <p className="playlist__track-text">3:00</p>
          <a href="./">
            <DownloadIcon fontSize="large" />
          </a>
        </li>
        <li className="playlist__track">
          <div className="playlist__start">
            <span>
              <PlayArrowIcon fontSize="large" />
            </span>
            <p className="playlist__track-text">Turbo Mix</p>
          </div>
          <p className="playlist__track-text">3:00</p>
          <a href="./">
            <DownloadIcon fontSize="large" />
          </a>
        </li>
        <li className="playlist__track">
          <div className="playlist__start">
            <span>
              <PlayArrowIcon fontSize="large" />
            </span>
            <p className="playlist__track-text">Turbo Mix</p>
          </div>
          <p className="playlist__track-text">3:00</p>
          <a href="./">
            <DownloadIcon fontSize="large" />
          </a>
        </li>
        <li className="playlist__track">
          <div className="playlist__start">
            <span>
              <PlayArrowIcon fontSize="large" />
            </span>
            <p className="playlist__track-text">Turbo Mix</p>
          </div>
          <p className="playlist__track-text">3:00</p>
          <a href="./">
            <DownloadIcon fontSize="large" />
          </a>
        </li>
        <li className="playlist__track">
          <div className="playlist__start">
            <span>
              <PlayArrowIcon fontSize="large" />
            </span>
            <p className="playlist__track-text">Turbo Mix</p>
          </div>
          <p className="playlist__track-text">3:00</p>
          <a href="./">
            <DownloadIcon fontSize="large" />
          </a>
        </li>
      </ul>
      <div className="playlist__audioPlayer">
        {/* <MusicPlayer /> */}
      </div>
    </section>
  );
};

export default Playlist;
