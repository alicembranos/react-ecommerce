import GlobalContext from "context/GlobalContext";
import { useContext } from "react";
import { addSummaryQuantity } from "services/functions";
import { Link } from "wouter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/img/gallery/logo.png";
import useUser from "hooks/useUser";

import "./NavBar.css";

const NavBar = () => {
  const { cartItems } = useContext(GlobalContext);
  const total = addSummaryQuantity(cartItems).toString(); 
  const { isLogged, logout } = useUser();

  const renderLoginButtons = () => {
    return isLogged ? (
      <button onClick={logout}>
        <LogoutIcon fontSize="large" />
      </button>
    ) : (
      <Link to={"/login"}>
        <AccountCircleIcon fontSize="large" />
      </Link>
    );
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
              <Link to={"/cart"}>
                <span className="numberItems" data-count={total}>
                  <ShoppingCartIcon fontSize="large" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
