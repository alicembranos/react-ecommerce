import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/img/gallery/logo.png";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./AppNavBar.css";
import GlobalContext from "context/GlobalContext";
import { addSummaryQuantity } from "services/functions";
import useUser from "hooks/useUser";
import UserContext from "context/UserContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getDisplayName } from "@mui/utils";

const drawerWidth = 200;
const navItems = ["Home", "Shop", "Contact"];

const AppNavBar = (props) => {
  const { window } = props; //manage size o viewport

  const [mobileOpen, setMobileOpen] = useState(false); //manage drawer open state
  const [anchorEl, setAnchorEl] = useState(null); //menu user desktop
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null); //menu user mobile

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //get global context and user context
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
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  /**
   * If the name is Home, return /, if the name is Shop, return /shop, if the name is Contact, return
   * /Contact, otherwise, do nothing.
   * @returns the value of the switch statement.
   */
  const routes = (name) => {
    switch (name) {
      case "Home":
        return "/";
      case "Shop":
        return "/shop";
      case "Contact":
        return "/contact";
      default:
        break;
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        VOIZZ
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} className="navbar__li-drawer" to={routes(item)}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={navigateToLogin}>Profile</MenuItem>
      <MenuItem onClick={navigateToLogin}>My account</MenuItem>
      {isLogged && <MenuItem onClick={logout}>Log out</MenuItem>}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to={"/wishlist"} className="navbar__icon-menu">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={totalWishItems} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <p>Wishlist</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to={"/cart"} className="navbar__icon-menu">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={totalCartItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Shopping Cart</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderUserName = () => {
    return (
      isLogged && <p className="navbar__user-text">Hi {user.firstname}!</p>
    );
  };

  return (
    <main className="main__container">
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Logo" className="logo" />
            <Box sx={{ display: { xs: "none", sm: "block" }, ml: 5 }}>
              {navItems.map((item) => (
                <Link key={item} className="navbar__li" to={routes(item)}>
                  <Button sx={{ color: "#fff" }}>{item}</Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }}>{renderUserName()}</Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Link className="navbar__icon" to={"/wishlist"}>
                  <Badge badgeContent={totalWishItems} color="error">
                    <FavoriteIcon />
                  </Badge>
                </Link>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Link className="navbar__icon" to={"/cart"}>
                  <Badge badgeContent={totalCartItems} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Outlet />
    </main>
  );
};

export default AppNavBar;
