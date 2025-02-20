import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Counter.css";

const Counter = ({ onRemove, onAdd, item }) => {
  
  return (
    <div className="cartItem__buttons">
      <button onClick={() => onRemove(item)} className="cartItem__button">
        <RemoveIcon fontSize="small"/>
      </button>
      <input
        type="text"
        name="quantity"
        id="quantity"
        className="cartItem__qty"
        value={item?.qty ? item.qty : 0}
        readOnly
      />
      <button onClick={() => onAdd(item)} className="cartItem__button">
        <AddIcon fontSize="small"/>
      </button>
    </div>
  );
};

export default Counter;
