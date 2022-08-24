import { useCallback, useContext } from "react";
import ProductsGallery from "components/ProductsGallery/ProductsGallery";
import SearchBar from "components/SearchBar/SearchBar";
import GlobalContext from "context/GlobalContext";
import AlbumsContext from "context/AlbumsContext";

const Shop = () => {
  const {
    cartItems,
    addProductToCart,
    wishList,
    toggleFavProductFromWishList,
  } = useContext(GlobalContext);
  const { loading, albums, search, match, keyword, setKeyword } =
    useContext(AlbumsContext);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const value = document.getElementById("search").value;
    setKeyword(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container__gallery">
      <SearchBar
        keyword={keyword}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></SearchBar>
      {search.length > 0 ? (
        <ProductsGallery
          onAdd={addProductToCart}
          albums={search}
          loading={loading}
          wishList={wishList}
          toggleFavProductFromWishList={toggleFavProductFromWishList}
        />
      ) : !match ? (
        <ProductsGallery
          cartItems={cartItems}
          onAdd={addProductToCart}
          albums={search}
          match={match}
          loading={loading}
          wishList={wishList}
          toggleFavProductFromWishList={toggleFavProductFromWishList}
        />
      ) : (
        <ProductsGallery
          cartItems={cartItems}
          onAdd={addProductToCart}
          albums={albums}
          loading={loading}
          wishList={wishList}
          toggleFavProductFromWishList={toggleFavProductFromWishList}
        />
      )}
    </section>
  );
};

export default Shop;
