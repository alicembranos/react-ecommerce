import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumsContext from "context/AlbumsContext";
import AlbumDetail from "components/AlbumDetail/AlbumDetail";
import Playlist from "components/Playlist/Playlist";

const DetailProduct = () => {
  const { id } = useParams();
  const [idAlbum, setIdAlbum] = useState(id);

  useEffect(() => {
    setIdAlbum(id);
  }, [id]);

  const { albums } = useContext(AlbumsContext);

  const product = albums.find((album) => album.id === Number(idAlbum));

  return (
      <div className="detail__container">
        <AlbumDetail product={product} />
        <Playlist product={product} />
      </div>
  );
};

export default DetailProduct;
