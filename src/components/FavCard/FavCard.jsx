import { useRef } from "react";
import { findInArrayById } from "services/functions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./FavCard.css";
import { Link } from "react-router-dom";

const FavCard = (props) => {
  const { fav, wishList, toggleFavProductFromWishList } = props;
  const existInWishList = findInArrayById(wishList, fav);

  const favIcon = useRef(); //ref to fav icon for managing

  const manageFavAlbum = (product) => {
    toggleFavProductFromWishList(product);
    const existInWishList = findInArrayById(wishList, product);
    if (!existInWishList) {
      favIcon.current.style.color = "red";
    } else {
      favIcon.current.style.color = "aliceblue";
    }
  };
  return (
    <div className="favCard__container">
      <button
        className="card__button fav-btn"
        onClick={() => manageFavAlbum(fav)}
      >
        <FavoriteIcon
          ref={favIcon}
          fontSize="large"
          style={existInWishList ? { color: "red" } : { color: "" }}
        />
      </button>
      <Link to={`/detail/${fav.id}`}>
        <img src={fav.img} alt={fav.title} />
      </Link>
      <div className="favCard__body">
        <h3 className="favCard__title">{fav.title}</h3>
        <p className="favCard__artist">{fav.artist}</p>
      </div>
    </div>
  );
};

export default FavCard;
