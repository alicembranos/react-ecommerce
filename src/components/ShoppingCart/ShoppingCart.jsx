import GlobalContext from "context/GlobalContext";
import { useContext } from "react";
import DisplayItems from "components/DisplayCart/DisplayItems";
import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    removeAllProductFromCart,
  } = useContext(GlobalContext);

  const display =
    cartItems.length > 0 ? (
      <DisplayItems
        cartItems={cartItems}
        onAdd={addProductToCart}
        onRemove={removeProductFromCart}
        onRemoveAll={removeAllProductFromCart}
      />
    ) : (
      <DisplayInfo text="There aro no items in your bag." />
    );

  return <section className="shoppingCart__container">{display}</section>;
};

export default ShoppingCart;
