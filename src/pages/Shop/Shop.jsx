import { useCallback, useState, useContext } from "react";
import useAlbums from "hooks/useAlbums";
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
  // const [keyword, setKeyword] = useState("");
  const { loading, albums, search, match, keyword, setKeyword } = useContext(AlbumsContext);
  console.log(loading, albums, match, search);
  // const { loading, albums, search, match } = useAlbums({ keyword });
  // const { loading, search, match } = useAlbums({ keyword });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const value = document.getElementById("search").value;
    setKeyword(value);
  }, []);

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
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
