import { useContext } from "react";
import CartContext from "context/CartContext";
import ButtonsGroup from "components/ButtonsGroup/ButtonsGroup";
import DisplayItems from "components/DisplayCart/DisplayItems";
import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, onAdd, onRemove, onRemoveAll } = useContext(CartContext);

  const display =
    cartItems.length > 0 ? (
      <DisplayItems
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onRemoveAll={onRemoveAll}
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
