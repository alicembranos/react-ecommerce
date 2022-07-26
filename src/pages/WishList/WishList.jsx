import FavGallery from "components/FavGallery/FavGallery";
import NavBar from "components/NavBar/NavBar";

const WishList = () => {
  return (
    <section className="wishList__container">
      <NavBar />
      <FavGallery />
    </section>
  );
};

export default WishList;
