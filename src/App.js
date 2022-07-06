import { useState, useEffect } from "react";
import "./App.css";
import FetchProducts from "./components/FetchProducts/FetchProducts";
import NavBar from "./components/NavBar/NavBar.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [cartItems, setCartItems] = useLocalStorage("userCart", []);

  const onAdd = (product) => {
    console.log(product);
    const exist = cartItems.find(
      (prodCart) => prodCart.data.id === product.data.id
    );
    if (exist) {
      setCartItems(
        cartItems.map((prodCart) =>
          prodCart.data.id === product.data.id
            ? { ...exist, qty: exist.qty + 1 }
            : prodCart
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(
      (prodCart) => prodCart.data.id === product.data.id
    );
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((prodCart) => prodCart.data.id !== product.data.id)
      );
    } else {
      setCartItems(
        cartItems.map((prodCart) =>
          prodCart.data.id === product.data.id
            ? { ...exist, qty: exist.qty - 1 }
            : prodCart
        )
      );
    }
  };

  const onRemoveAll = (product) => {
    const exist = cartItems.find(
      (prodCart) => prodCart.data.id === product.data.id
    );
    if (exist) {
      setCartItems(
        cartItems.filter((prodCart) => prodCart.data.id !== product.data.id)
      );
    }
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container__main">
        <FetchProducts onAdd={onAdd} />
        <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
          cartItems={cartItems}
        />
      </main>
    </>
  );
};

export default App;
