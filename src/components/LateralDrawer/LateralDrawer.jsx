import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { ThemeProvider } from "@mui/material";
import themeDrawer from "./theme/theme";
import { useNavigate } from "react-router-dom";
import useUser from "hooks/useUser";

const drawerWidth = 180;

const selectIcon = (icon) => {
  switch (icon) {
    case "My details":
      return <PersonIcon />;
    case "My orders":
      return <ShoppingCartIcon />;
    case "My wishlist":
      return <FavoriteIcon />;
    case "Settings":
      return <SettingsIcon />;
    case "Logout":
      return <LogoutIcon />;
    default:
      break;
  }
};

const navigateRoutes = (text) => {
  switch (text) {
    case "My details":
      return "/profile";
    case "My orders":
      return "userOrder";
    case "My wishlist":
      return "userWishlist";
    default:
      break;
  }
};

const PermanentDrawerLeft = () => {
  const navigate = useNavigate();
  const { isLogged, logout } = useUser();

  const handleNavigate = (route) => {
    navigate(navigateRoutes(route));
  };

  if (!isLogged) {
    navigate("/");
  }

  return (
    <ThemeProvider theme={themeDrawer}>
      <Drawer
        sx={{
          position: "absolute",
          margin: 2,
          width: { xs:60, sm:drawerWidth },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs:60, sm:drawerWidth },
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {["My details", "My orders", "My wishlist"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleNavigate(text);
                }}
              >
                <ListItemIcon>{selectIcon(text)}</ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Settings", "Logout"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => logout()}>
                <ListItemIcon>{selectIcon(text)}</ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default PermanentDrawerLeft;
