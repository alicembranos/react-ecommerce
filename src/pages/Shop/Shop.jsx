import { useCallback, useState, useContext } from "react";
import NavBar from "components/NavBar/NavBar";
import useAlbums from "hooks/useAlbums";
import ProductsGallery from "components/ProductsGallery/ProductsGallery";
import SearchBar from "components/SearchBar/SearchBar";
import CartContext from "context/CartContext";

const Shop = () => {
  const { cartItems, onAdd } = useContext(CartContext);
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
          <ProductsGallery onAdd={onAdd} albums={search} loading={loading} />
        ) : !match ? (
          <ProductsGallery
            cartItems={cartItems}
            onAdd={onAdd}
            albums={search}
            match={match}
            loading={loading}
          />
        ) : (
          <ProductsGallery
            cartItems={cartItems}
            onAdd={onAdd}
            albums={albums}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Shop;
