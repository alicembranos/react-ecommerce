import CartContext from "context/CartContext";
import Counter from "components/Counter/Counter";

import "./AlbumDetail.css";
import { useContext } from "react";

const AlbumDetail = ({ product }) => {
  const { onAdd, onRemove, cartItems } = useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === Number(product.id));

  return (
    <>
      <section className="album__cover">
        <div className="album__coverImage">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="album__info">
          <span className="album__stock">In stock</span>
          <h1 className="album__title">
            {product.title} <span>_</span>
          </h1>
          <p className="album__price">
            <span>€</span>
            {product.price}
          </p>
          <p className="album__artist">
            Artist: <span>{product.artist}</span>
          </p>
          <p className="album__artist">
            Categories: <span>Pop, Tecno</span>
          </p>
          <div className="album__actions">
            <p className="action__text">Add to cart</p>
            <Counter
              item={cartItem ? cartItem : product}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDetail;
