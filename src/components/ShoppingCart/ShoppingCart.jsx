import GlobalContext from "context/GlobalContext";
import { useContext } from "react";
import ButtonsGroup from "components/ButtonsGroup/ButtonsGroup";
import DisplayItems from "components/DisplayCart/DisplayItems";
import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, addProductToCart, removeProductFromCart, removeAllProductFromCart } = useContext(GlobalContext);

  const display =
    cartItems.length > 0 ? (
      <DisplayItems
        cartItems={cartItems}
        onAdd={addProductToCart}
        onRemove={removeProductFromCart}
        onRemoveAll={removeAllProductFromCart}
      />
    ) : (
      <DisplayInfo text="Cart is empty" />
    );

  return (
    <section className="shoppingCart__container">
      <h2 className="shoppingCart__h2">Shopping Cart</h2>
      {display}
      <ButtonsGroup />
    </section>
  );
};

export default ShoppingCart;
