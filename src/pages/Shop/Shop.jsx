import NavBar from "components/NavBar/NavBar";
import { useCallback, useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import useAlbums from "hooks/useAlbums";
import ProductsGallery from "components/ProductsGallery/ProductsGallery";
import SearchBar from "components/SearchBar/SearchBar";

const Shop = () => {
  const [cartItems, setCartItems] = useLocalStorage("userCart", []);
  const [keyword, setKeyword] = useState("");
  const { loading, albums, search, match } = useAlbums({ keyword });
  console.log(albums);
  console.log(search);
  const onAdd = (product) => {
    const exist = cartItems.find((prodCart) => prodCart.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((prodCart) =>
          prodCart.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : prodCart
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((prodCart) => prodCart.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((prodCart) => prodCart.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((prodCart) =>
          prodCart.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : prodCart
        )
      );
    }
  };

  const onRemoveAll = (product) => {
    const exist = cartItems.find((prodCart) => prodCart.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((prodCart) => prodCart.id !== product.id));
    }
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const value = document.getElementById("search").value;
    setKeyword(value);
  }, []);

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <>
      <NavBar cartItems={cartItems} />
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
            onAdd={onAdd}
            albums={search}
            match={match}
            loading={loading}
          />
        ) : (
          <ProductsGallery onAdd={onAdd} albums={albums} loading={loading} />
        )}
      </div>
      {/* <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
          cartItems={cartItems}
        /> */}
    </>
  );
};

export default Shop;
