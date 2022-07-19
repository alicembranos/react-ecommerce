import "./Playlist.css";

const Playlist = ({ product }) => {
  return (
    <section className="playlist__container">
      <h2 className="playlist__title">
        <span>{product.title}</span> Album playlist...
      </h2>
    </section>
  );
};

export default Playlist;
