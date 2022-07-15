import NavBar from "components/NavBar/NavBar";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";

const Cart = () => {
  return (
    <div className="cart__container">
      <NavBar />
      <div className="container__cart">
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
};

export default Cart;
