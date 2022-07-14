import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { addSummaryQuantity } from "services/functions";
import { Link } from "wouter";
import logo from "../../assets/img/gallery/logo.png";
import "./NavBar.css";

const NavBar = (props) => {
  const { cartItems } = props;
  const total = addSummaryQuantity(cartItems).toString();
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
            <li className="icons__li">
              <a href="https://www.google.fr/">
                <AccountCircleIcon fontSize="large" />
              </a>
            </li>
            <li className="icons__li">
              <a href="https://www.google.fr/">
                <span className="numberItems" data-count={total}>
                  <ShoppingCartIcon fontSize="large" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
