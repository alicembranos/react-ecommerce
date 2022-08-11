import { useContext } from "react";
import GlobalContext from "context/GlobalContext";
import DisplayItems from "components/DisplayCart/DisplayItems";
import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import { SummaryCart } from "components/SummaryCart/SummaryCart";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    removeAllProductFromCart,
  } = useContext(GlobalContext);

 
  const display =
    cartItems?.length > 0 ? (
      <DisplayItems
        cartItems={cartItems}
        onAdd={addProductToCart}
        onRemove={removeProductFromCart}
        onRemoveAll={removeAllProductFromCart}
      />
    ) : (
      <DisplayInfo text="There aro no items in your bag." />
    );

  return (
    <section className="shoppingCart__container">
      {display} <SummaryCart cartItems={cartItems} />
    </section>
  );
};

export default ShoppingCart;
