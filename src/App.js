import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ProductsGallery from "./components/ProductsGallery/ProductsGallery.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const onAddItem = 
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container__main">
        <ProductsGallery />
        <ShoppingCart cartItems={cartItems} />
      </main>
    </>
  );
};

export default App;
