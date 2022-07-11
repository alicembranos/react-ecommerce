import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { setPrice } from "services/functions";
import "./ItemCart.css";

const ItemCart = (props) => {
  const { item, onAdd, onRemove, onRemoveAll } = props;
  return (
    <div key={item.id} className="cartItem__row">
      <div className="cartItem__imageBox">
        <img src={item.img} alt={item.album} />
      </div>
      <div className="cartItem__info">
        <h4 className="cartItem__album">{item.album}</h4>
        <p className="cartItem__artist">
          {item.artist}
        </p>
      </div>
      <div className="cartItem__buttons">
        <button onClick={() => onRemove(item)} className="cartItem__button">
          <RemoveIcon />
        </button>
        <input
          type="text"
          name="quantity"
          id="quantity"
          className="cartItem__qty"
          value={item.qty}
          readOnly
        />
        <button onClick={() => onAdd(item)} className="cartItem__button">
          <AddIcon />
        </button>
      </div>
      <p className="text-right cartItem__price">
        {setPrice(item.qty, item.price.toFixed(2)).toFixed(2)}€
      </p>
      <button
        onClick={() => onRemoveAll(item)}
        className="cartItemDelete__button"
      >
        X
      </button>
    </div>
  );
};

export default ItemCart;
