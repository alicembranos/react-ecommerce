import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import FavCard from "components/FavCard/FavCard";
import GlobalContext from "context/GlobalContext";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";

const UserWishList = () => {
  const user = useOutletContext();
  const { toggleFavProductFromWishList, wishList } = useContext(GlobalContext);

  const display = wishList ? (
    wishList.map((fav) => (
      <FavCard
        key={fav.id}
        fav={fav}
        wishList={wishList}
        toggleFavProductFromWishList={toggleFavProductFromWishList}
      />
    ))
  ) : (
    <DisplayInfo text="There are no favourites added." />
  );

  return (
    <article className="userDetail__article">
      <h2 className="userDetail__title">
        <span>{user?.firstname}, </span>Welcome to your personal space!{" "}
      </h2>
      <div className="userdetail__box">
        <h4 className="userDetail__subtitle">My Wishlist</h4>
        <div className="fav__container">{display}</div>
      </div>
    </article>
  );
};

export default UserWishList;
