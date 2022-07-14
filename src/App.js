import useLocalStorage from "hooks/useLocalStorage";
import { Route, Switch } from "wouter";
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Cart from "pages/Cart/Cart";
import DetailProduct from "pages/DetailProduct/DetailProduct";


const App = () => {

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/detail/id" component={DetailProduct} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </>
  );
};

export default App;
