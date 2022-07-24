import { useCallback, useState, useContext } from "react";
import NavBar from "components/NavBar/NavBar";
import useAlbums from "hooks/useAlbums";
import ProductsGallery from "components/ProductsGallery/ProductsGallery";
import SearchBar from "components/SearchBar/SearchBar";
import GlobalContext from "context/GlobalContext";

const Shop = () => {
  const {
    cartItems,
    addProductToCart,
    wishList,
    toggleFavProductFromWishList,
  } = useContext(GlobalContext);
  const [keyword, setKeyword] = useState("");
  const { loading, albums, search, match } = useAlbums({ keyword });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const value = document.getElementById("search").value;
    setKeyword(value);
  }, []);

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <div className="shop__container">
      <NavBar />
      <div className="container__gallery">
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
      </div>
    </div>
  );
};

export default Shop;
