import ButtonsGroup from "components/ButtonsGroup/ButtonsGroup";
import SummaryCartItem from "components/SummaryCartItem/SummaryCartItem";
import { useEffect, useState } from "react";
import { addSummaryPrice, addSummaryQuantity } from "services/functions";
import "./SummaryCart.css";

const toolTipTextSubtotal =
  "The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.";
const toolTipTextShipping =
  "The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped.";

export const SummaryCart = ({ cartItems }) => {
  const initTotalQty = cartItems?.length > 0 ? addSummaryQuantity(cartItems) : 0;
  const initTotalPrice =
    cartItems?.length > 0 ? addSummaryPrice(cartItems) : 0.0;

  const [totalQuantity, setTotalQuantity] = useState(initTotalQty);
  const [totalPrice, setTotalPrice] = useState(initTotalPrice);

  useEffect(() => {
    setTotalQuantity(addSummaryQuantity(cartItems));
    setTotalPrice(addSummaryPrice(cartItems));
  }, [cartItems]);

  return (
    <div className="cartSummary__container">
      <h2 className="shoppingCart__h2">Summary</h2>
      {
        <>
          <SummaryCartItem
            concept="Subtotal"
            total={totalPrice}
            existToolTip={true}
            title={toolTipTextSubtotal}
          />
          <SummaryCartItem
            concept="Estimated Shipping & Handling"
            total={8.0}
            existToolTip={false}
          />
          <SummaryCartItem
            concept="Estimated Tax"
            total={0}
            existToolTip={true}
            title={toolTipTextShipping}
          />
          <SummaryCartItem
            concept="Total"
            total={totalPrice + 8.0}
            existToolTip={false}
            withBorder={true}
          />
          <p className="cartSummary__p">
            Total Items:{" "}
            <span className="cartSummary__qty">{totalQuantity}</span>
          </p>
        </>
      }
      <ButtonsGroup />
    </div>
  );
};
