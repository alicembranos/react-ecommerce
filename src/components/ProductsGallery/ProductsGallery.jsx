import ProductCard from "components/ProductCard/ProductCard";
import Spinner from "components/Spinner/Spinner";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const {
    cartItems,
    onAdd,
    loading,
    albums,
    match = true,
    wishList,
    toggleFavProductFromWishList,
  } = props;
  if (loading) return <Spinner />;

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
            <ProductCard
              key={album.id}
              product={album}
              onAdd={onAdd}
              cartItems={cartItems}
              wishList={wishList}
              toggleFavProductFromWishList={toggleFavProductFromWishList}
            />
          ))
        )}
      </section>
    </>
  );
};

export default ProductsGallery;
