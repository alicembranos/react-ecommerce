import GlobalContext from "context/GlobalContext";
import { useContext } from "react";
import Counter from "components/Counter/Counter";
import "./AlbumDetail.css";

const AlbumDetail = ({ product }) => {
  const { addProductToCart, removeProductFromCart, cartItems } =
    useContext(GlobalContext);

  const cartItem = cartItems.find((item) => item.id === Number(product.id));

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${product.img})`,
          backgroundSize: "cover",
          backgroundAttachment:"fixed",
          opacity: 0.3
        }}
      ></div>
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
              onAdd={addProductToCart}
              onRemove={removeProductFromCart}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDetail;
