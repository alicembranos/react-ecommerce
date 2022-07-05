import "./NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavBar = () => {
  return (
    <div className="container__div">
      <div className="logo__div">
        <img className="logo__img" src="" alt="Logo" />
        <p className="logo__p"></p>
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__ul">
          <li className="navbar__li">VOIZZ</li>
          <li className="navbar__li">SHOP</li>
          <li className="navbar__li">CONTACT</li>
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
              <ShoppingCartIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
