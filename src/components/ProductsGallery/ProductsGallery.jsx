import ProductCard from "components/ProductCard/ProductCard";
import Spinner from "components/Spinner/Spinner";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const { onAdd, loading, albums, match = true } = props;

  if (loading) return <Spinner />;

  console.log(match);
  return (
    <>
      <section className="galleryProducts__container">
        {albums.length === 0 && match && (
          <p className="displayInfo__p">No products to show</p>
        )}
        {!match ? (
          <p className="displayInfo__p">No results founded</p>
        ) : (
          albums.map((album) => (
            <ProductCard key={album.id} product={album} onAdd={onAdd} />
          ))
        )}
      </section>
    </>
  );
};

export default ProductsGallery;
