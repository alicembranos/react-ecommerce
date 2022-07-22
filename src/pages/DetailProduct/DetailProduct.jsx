import { useContext, useState, useEffect } from "react";
import AlbumsContext from "context/AlbumsContext";
import NavBar from "components/NavBar/NavBar";
import AlbumDetail from "components/AlbumDetail/AlbumDetail";
import Playlist from "components/Playlist/Playlist";

const DetailProduct = ({ params }) => {
  const { id } = params;
  const [idAlbum, setIdAlbum] = useState(id);

  useEffect(() => {
    setIdAlbum(id);
  }, [id]);

  const { albums } = useContext(AlbumsContext);

  const product = albums.find((album) => album.id === Number(idAlbum));

  return (
    <section className="detail__section">
      <NavBar />
      <div className="detail__container">
        <AlbumDetail product={product} />
        <Playlist product={product}/>
      </div>
    </section>
  );
};

export default DetailProduct;
