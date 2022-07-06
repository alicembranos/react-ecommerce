import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ProductsGallery from "./components/ProductsGallery/ProductsGallery.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";

const App = () => {
  const serverUri = "http://localhost:3000/albums";
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getProducts = async () => {
    try {
      const request = await fetch(serverUri);
      if (request.ok) {
        const response = await request.json();
        setProducts(response.items);
      } else {
        console.log("Network request ok but http response no ok");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        <ProductsGallery onAdd={onAdd} products={products} />
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
