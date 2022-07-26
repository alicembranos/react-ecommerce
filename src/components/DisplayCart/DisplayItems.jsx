import ItemCart from "components/ItemCart/ItemCart";
import { SummaryCart } from "components/SummaryCart/SummaryCart";

const DisplayItems = ({ cartItems, onAdd, onRemove, onRemoveAll }) => {
  return (
    <>
      <div className="listItems__container">
      <h2 className="shoppingCart__h2">Shopping Cart</h2>
        {cartItems.map((item) => (
            <ItemCart
              key={item.id}
              item={item}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
        ))}
      </div>
      <SummaryCart cartItems={cartItems} />
    </>
  );
};

export default DisplayItems;
