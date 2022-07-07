import { useEffect, useState } from "react";
import { addSummaryPrice, addSummaryQuantity } from "../../functions";
import "./SummaryCart.css";

export const SummaryCart = ({ cartItems }) => {
  const initTotalQty = cartItems.length > 0 ? addSummaryQuantity(cartItems) : 0;
  const initTotalPrice =
    cartItems.length > 0 ? addSummaryPrice(cartItems) : 0.0;

  const [totalQuantity, setTotalQuantity] = useState(initTotalQty);
  const [totalPrice, setTotalPrice] = useState(initTotalPrice);

  useEffect(() => {
    setTotalQuantity(addSummaryQuantity(cartItems));
    setTotalPrice(addSummaryPrice(cartItems));
  }, [cartItems]);

  return (
    <div className="cartSummary__container">
      <p className="cartSummary__p">
        Total Items: <span className="cartSummary__qty">{totalQuantity}</span>
      </p>
      <p className="cartSummary__p">
        Subtotal: <span className="cartSummary__price">{totalPrice} €</span>
      </p>
    </div>
  );
};
