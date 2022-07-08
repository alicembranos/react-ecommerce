import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { setPrice } from "../../store/functions";
import "./ItemCart.css";

const ItemCart = (props) => {
  const { item, onAdd, onRemove, onRemoveAll } = props;
  return (
    <div key={item.data.id} className="cartItem__row">
      <div className="cartItem__imageBox">
        <img src={item.data.coverArt.sources[0].url} alt={item.data.name} />
      </div>
      <div className="cartItem__info">
        <h4 className="cartItem__album">{item.data.name}</h4>
        <p className="cartItem__artist">
          {item.data.artists.items[0].profile.name}
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
        {setPrice(item.qty, item.data.price.toFixed(2)).toFixed(2)}€
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
