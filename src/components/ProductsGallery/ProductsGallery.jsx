import ProductCard from "components/ProductCard/ProductCard";
import Spinner from "components/Spinner/Spinner";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const { onAdd, loading, albums, noMatch = false } = props;

  console.log('se está renderizando este');
  
  if (loading) return <Spinner />;

  return (
    <>
      <section className="galleryProducts__container">
        {albums.length === 0 && !noMatch && (
          <p className="shoppingCart__p">No products to show</p>
        )}
        {noMatch ? (
          <p className="shoppingCart__p">No results founded</p>
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
