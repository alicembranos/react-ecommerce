import Counter from "components/Counter/Counter";
import { setPrice } from "services/functions";
import { Link } from "wouter";
import "./ItemCart.css";

const ItemCart = (props) => {
  const { item, onAdd, onRemove, onRemoveAll } = props;

  return (
    <div key={item.id} className="cartItem__row">
      <Link to={`/detail/${item.id}`}>
        <div className="cartItem__imageBox">
          <img src={item.img} alt={item.album} />
        </div>
      </Link>
      <div className="cartItem__info">
        <h4 className="cartItem__album">{item.album}</h4>
        <p className="cartItem__artist">{item.artist}</p>
      </div>
      <div className="cartItem__buttons">
        <Counter item={item} onAdd={onAdd} onRemove={onRemove} />
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
