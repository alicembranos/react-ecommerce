import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { album, artist, year, price, image, onAdd } = props;
  return (
    <div className="card">
      <div className="images__box">
        <img src={image} alt="" />
      </div>
      <section className="card__body">
        <h2 className="card__title">{album}</h2>
        <div className="card__info">
          <h3 className="card__artist">{artist}</h3>
          <p className="card__year">Year: {year}</p>
        </div>
        <div className="card__end">
          <p className="card__price">
            <span className="card__price-span">{price}</span>€
          </p>
          <button className="card__button" onClick={onAdd}>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
