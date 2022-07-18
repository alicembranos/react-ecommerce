import { Route, Switch } from "wouter";

import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Cart from "pages/Cart/Cart";
import DetailProduct from "pages/DetailProduct/DetailProduct";
import LoginPage from "pages/LoginPage/LoginPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";

import { AlbumsContextProvider } from "context/AlbumsContext";
import { CartContextProvider } from "context/CartContext";
import { UserContextProvider } from "context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <AlbumsContextProvider>
        <CartContextProvider>
          <Switch>
            <Route component={Home} path="/" />
            <Route component={Shop} path="/shop" />
            <Route component={DetailProduct} path="/detail/id" />
            <Route component={Cart} path="/cart" />
            <Route component={LoginPage} path="/login" />
            <Route component={ErrorPage} path="/:rest*" />
          </Switch>
        </CartContextProvider>
      </AlbumsContextProvider>
    </UserContextProvider>
  );
};

export default App;
