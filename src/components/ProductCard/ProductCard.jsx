import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import { findInArrayById } from "services/functions";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useContext, useRef } from "react";
import UserContext from "context/UserContext";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { user, jwt } = useContext(UserContext);
  const { product, onAdd, cartItems, wishList, toggleFavProductFromWishList } =
    props;
  const existInCart = findInArrayById(cartItems, product);
  const existInWishList = findInArrayById(wishList, product);

  const favIcon = useRef(); //ref to fav icon for managing

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const manageFavAlbum = async (product) => {
    if (!user) {
      navigateToLogin();
      return;
    }
    toggleFavProductFromWishList(product);
    const existInWishList = findInArrayById(wishList, product);
    if (!existInWishList) {
      favIcon.current.style.color = "red";
    } else {
      favIcon.current.style.color = "aliceblue";
    }
  };

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="animate__animated animate__bounce animate__slow"
    >
      <div className="card">
        {existInCart && (
          <p className="card__text-added">
            <span className="circle-sketch-highlight">Added</span>
          </p>
        )}
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
            <h3 className="card__artist">
              {product.artist}
              <span className="card__year"> ({product.year})</span>
            </h3>
          </div>
          <div className="card__end">
            <p className="card__price">
              <span className="card__price-span">{product.price}</span>€
            </p>
            <div className="card_buttons">
              <button
                className="card__button"
                onClick={() => manageFavAlbum(product)}
              >
                <FavoriteIcon
                  ref={favIcon}
                  fontSize="large"
                  style={existInWishList ? { color: "red" } : { color: "" }}
                />
              </button>
              <button className="card__button" onClick={() => onAdd(product)}>
                <ShoppingCartOutlinedIcon fontSize="large" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </AnimationOnScroll>
  );
};

export default ProductCard;
