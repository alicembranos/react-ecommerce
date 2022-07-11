import ProductCard from "components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import getAlbums from "services/getAlbums";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const [albums, setAlbums] = useState([]);
  const { onAdd } = props;

  useEffect(() => {
    getAlbums().then((albums) => setAlbums(albums));
  }, []);

  return (
    <section className="galleryProducts__container">
      {albums.length === 0 && (
        <p className="shoppingCart__p">No products to show</p>
      )}
      {albums.map((album) => (
        <ProductCard key={album.id} product={album} onAdd={onAdd} />
      ))}
    </section>
  );
};

export default ProductsGallery;
