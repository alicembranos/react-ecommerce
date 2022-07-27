import { useContext, useState } from "react";
import GlobalContext from "context/GlobalContext";
import UserContext from "context/UserContext";
import { Link } from "wouter";
import { addSummaryQuantity } from "services/functions";
import DisplayItems from "components/DisplayCart/DisplayItems";
import useUser from "hooks/useUser";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../assets/img/gallery/logo.png";

import "./NavBar.css";

const NavBar = () => {
  const {
    wishList,
    cartItems,
    addProductToCart,
    removeProductFromCart,
    removeAllProductFromCart,
  } = useContext(GlobalContext);
  const totalCartItems = addSummaryQuantity(cartItems).toString();
  const totalWishItems = addSummaryQuantity(wishList).toString();
  const { isLogged, logout } = useUser();
  const { user } = useContext(UserContext);
  const [isHovering, setIsHovering] = useState(false);

  const renderLoginButtons = () => {
    console.log(user);
    return isLogged ? (
      <div className="navbar__user">
        <p className="navbar__user-text">
          Hi {user.firstname} {user.lastname}!
        </p>
        <button onClick={logout}>
          <PersonIcon fontSize="medium" />
        </button>
      </div>
    ) : (
      <Link to={"/login"}>
        <AccountCircleIcon fontSize="medium" />
      </Link>
    );
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <header>
      <div className="container__div">
        <div className="logo__div">
          <img className="logo__img" src={logo} alt="Logo" />
          <p className="logo__p"></p>
        </div>
        <nav className="navbar__nav">
          <ul className="navbar__ul">
            <li>
              <Link className="navbar__li" to={"/"}>
                VOIZZ
              </Link>
            </li>
            <li>
              <Link className="navbar__li" to={"/shop"}>
                SHOP
              </Link>
            </li>
            <li>
              <Link className="navbar__li" to={"/shop"}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="account__div">
          <ul className="icons__ul">
            <li className="icons__li">{renderLoginButtons()}</li>
            <li className="icons__li">
              <Link to={"/wishlist"}>
                <span
                  className="numberItems"
                  data-count={totalWishItems}
                >
                  <FavoriteIcon style={{ margin: "1px" }} fontSize="medium" />
                </span>
              </Link>
            </li>
            <li className="icons__li">
              <Link to={"/cart"}>
                <span
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="numberItems"
                  data-count={totalCartItems}
                >
                  <ShoppingCartIcon
                    style={{ margin: "1px" }}
                    fontSize="medium"
                  />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {isHovering && (
          <div className="navbar__cart">
            <DisplayItems
              cartItems={cartItems}
              onAdd={addProductToCart}
              onRemove={removeProductFromCart}
              onRemoveAll={removeAllProductFromCart}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
