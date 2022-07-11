import ItemCart from "components/ItemCart/ItemCart";
import { SummaryCart } from "components/SummaryCart/SummaryCart";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const { cartItems, onAdd, onRemove, onRemoveAll } = props;

  return (
    <aside className="shoppingCart__container">
      <h2 className="shoppingCart__h2">Shopping Cart</h2>
      <div>
        {cartItems.length === 0 && (
          <p className="shoppingCart__p">Cart is empty</p>
        )}
      </div>
      {cartItems.map((item) => (
        <ItemCart
          key={item.data.id}
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />
      ))}
      <SummaryCart cartItems={cartItems} />
    </aside>
  );
};

export default ShoppingCart;
