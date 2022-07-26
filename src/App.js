import { Route, Switch } from "wouter";

import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Cart from "pages/Cart/Cart";
import DetailProduct from "pages/DetailProduct/DetailProduct";
import LoginPage from "pages/LoginPage/LoginPage";
import Register from "components/Register/Register";
import User from "pages/User/User";
import WishList from "pages/WishList/WishList";
import ErrorPage from "pages/ErrorPage/ErrorPage";

import { AlbumsContextProvider } from "context/AlbumsContext";
import { UserContextProvider } from "context/UserContext";
import { GlobalContextProvider } from "context/GlobalContext";

const App = () => {
  return (
    <UserContextProvider>
      <AlbumsContextProvider>
        <GlobalContextProvider>
          <Switch>
            <Route component={Home} path="/" />
            <Route component={Shop} path="/shop" />
            <Route component={DetailProduct} path="/detail/:id" />
            <Route component={Cart} path="/cart" />
            <Route component={LoginPage} path="/login" />
            <Route component={Register} path="/signup" />
            <Route component={User} path="/user" />
            <Route component={WishList} path="/wishlist" />
            <Route component={ErrorPage} path="/:rest*" />
          </Switch>
        </GlobalContextProvider>
      </AlbumsContextProvider>
    </UserContextProvider>
  );
};

export default App;
