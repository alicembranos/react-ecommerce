import { Route, Switch } from "wouter";
import { AlbumsContextProvider } from "context/AlbumsContext";
import { CartContextProvider } from "context/CartContext";
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Cart from "pages/Cart/Cart";
import DetailProduct from "pages/DetailProduct/DetailProduct";
import ErrorPage from "pages/ErrorPage/ErrorPage";

const App = () => {
  return (
      <AlbumsContextProvider>
        <CartContextProvider>
          <Switch>
            <Route  component={Home} path="/" />
            <Route component={Shop} path="/shop" />
            <Route component={DetailProduct} path="/detail/id" />
          <Route component={Cart} path="/cart" />
          <Route component={ErrorPage} path="/:rest*"/>
          </Switch>
        </CartContextProvider>
      </AlbumsContextProvider>
  );
};

export default App;
