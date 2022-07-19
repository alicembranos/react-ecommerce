import { useContext, useState, useEffect } from "react";
import AlbumsContext from "context/AlbumsContext";
import NavBar from "components/NavBar/NavBar";
import AlbumDetail from "components/AlbumDetail/AlbumDetail";
import Playlist from "components/Playlist/Playlist";

const DetailProduct = ({ params }) => {
  const { id } = params;
  const [idAlbum, setIdAlbum] = useState(id);
  console.log(idAlbum);

  useEffect(() => {
    setIdAlbum(id);
  }, [id]);

  const { albums } = useContext(AlbumsContext);
  console.log(albums);
  const product = albums.find((album) => album.id === Number(idAlbum));
  console.log(product);
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
