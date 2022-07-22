import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "wouter";
import { findInArrayById } from "services/functions";

import "./ProductCard.css";

const ProductCard = (props) => {
  const { product, onAdd, cartItems } = props;
console.log(cartItems)
  const existInCart = findInArrayById(cartItems, product);

  return (
    <div className="card">
      {existInCart && <p className="card__text-added"><span class="circle-sketch-highlight">Added</span></p>}
      <Link to={`/detail/${product.id}`}>
        <div
          className="images__box"
          style={{
            backgroundImage: "url(" + product.img + ") ",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>
      <section className="card__body">
        <div className="card__info">
          <h2 className="card__title">{product.title}</h2>
          <h3 className="card__artist">{product.artist}<span className="card__year"> ({product.year})</span></h3>
        </div>
        <div className="card__end">
          <p className="card__price">
            <span className="card__price-span">{product.price}</span>€
          </p>
          <div className="card_buttons">
            <button className="card__button">
              <FavoriteIcon fontSize="large" />
            </button>
            <button className="card__button" onClick={() => onAdd(product)}>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
