import ProductCard from "components/ProductCard/ProductCard";
import Spinner from "components/Spinner/Spinner";
import { useEffect, useState } from "react";
import getAlbums from "services/getAlbums";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const { onAdd } = props;
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAlbums().then((albums) => {
      setAlbums(albums);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <section className="galleryProducts__container">
        {albums.length === 0 && (
          <p className="shoppingCart__p">No products to show</p>
        )}
        {albums.map((album) => (
          <ProductCard key={album.id} product={album} onAdd={onAdd} />
        ))}
      </section>
    </>
  );
};

export default ProductsGallery;
