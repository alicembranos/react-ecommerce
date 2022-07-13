import useLocalStorage from "hooks/useLocalStorage";
import { Route, Switch } from "wouter";
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Cart from "pages/Cart/Cart";
import DetailProduct from "pages/DetailProduct/DetailProduct";


const App = () => {
  const [cartItems, setCartItems] = useLocalStorage("userCart", []);

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/detail" component={DetailProduct} />
        <Route path="/cart" component={Cart} />
      </Switch>
      {/* <section className="container__section">
        <ProductsGallery onAdd={onAdd} />
        <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
          cartItems={cartItems}
        />
      </section> */}
    </>
  );
};

export default App;
