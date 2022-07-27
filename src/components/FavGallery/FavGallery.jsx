import GlobalContext from "context/GlobalContext";
import { useContext } from "react";
import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import "./FavGallery.css";
import FavCard from "components/FavCard/FavCard";

const FavGallery = () => {
  const { wishList, toggleFavProductFromWishList } = useContext(GlobalContext);

  const display =
    wishList && wishList.length > 0 ? (
      wishList.map((fav) => (
        <FavCard
          key={fav.id}
          fav={fav}
          wishList={wishList}
          toggleFavProductFromWishList={toggleFavProductFromWishList}
        />
      ))
    ) : (
      <DisplayInfo text="There aro no favourites added." />
    );

  return (
    <div className="wishList-wrap">
      <h2 className="favGallery__h2">My wish list...</h2>
      <div className="favList__items">{display}</div>
    </div>
  );
};

export default FavGallery;
