import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="card">
      <div className="images__box">
        <img src={product.img} alt="" />
      </div>
      <section className="card__body">
        <h2 className="card__title">{product.title}</h2>
        <div className="card__info">
          <h3 className="card__artist">{product.artist}</h3>
          <p className="card__year">Year: {product.year}</p>
        </div>
        <div className="card__end">
          <p className="card__price">
            <span className="card__price-span">{product.price}</span>€
          </p>
          <button className="card__button" onClick={() => onAdd(product)}>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
