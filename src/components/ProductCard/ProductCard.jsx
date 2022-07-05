import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./ProductCard.css";

const ProductCard = (...product) => {
  return (
    <div className="card">
      <div className="images__box">
        <img src={product[0].image} alt="" />
      </div>
      <section className="card__body">
        <h2 className="card__title">{product[0].album}</h2>
        <div className="card__info">
          <h3 className="card__artist">{product[0].artist}</h3>
          <p className="card__year">Year: {product[0].year}</p>
        </div>
        <div className="card__end">
          <p className="card__price">
            <span className="card__price-span">{product[0].price}</span>€
          </p>
          <button className="card__button">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
