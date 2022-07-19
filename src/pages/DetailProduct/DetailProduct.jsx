import { useContext, useState, useEffect } from "react";
import AlbumsContext from "context/AlbumsContext";
import NavBar from "components/NavBar/NavBar";
import AlbumDetail from "components/AlbumDetail/AlbumDetail";

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
      <AlbumDetail product={product} />
    </section>
  );
};

export default DetailProduct;
