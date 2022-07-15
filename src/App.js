import { Route, Switch } from "wouter";
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Cart from "pages/Cart/Cart";
import DetailProduct from "pages/DetailProduct/DetailProduct";
import { AlbumsContextProvider } from "context/AlbumsContext";
import { CartContextProvider } from "context/CartContext";

const App = () => {
  return (
      <AlbumsContextProvider>
        <CartContextProvider>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/detail/id" component={DetailProduct} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </CartContextProvider>
      </AlbumsContextProvider>
  );
};

export default App;
