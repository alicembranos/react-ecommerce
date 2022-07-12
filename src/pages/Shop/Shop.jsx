import ProductsGallery from "components/ProductsGallery/ProductsGallery";
import SearchBar from "components/SearchBar/SearchBar";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import useLocalStorage from "hooks/useLocalStorage";
import { useState } from "react";

const Shop = () => {
  const [cartItems, setCartItems] = useLocalStorage("userCart", []);
  const [keyword, setKeyword] = useState("");

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


  return (
    <>
      <SearchBar></SearchBar>
      <section className="container__section">
        <ProductsGallery onAdd={onAdd} />
        <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
          cartItems={cartItems}
        />
      </section>
    </>
  );
};

export default Shop;
