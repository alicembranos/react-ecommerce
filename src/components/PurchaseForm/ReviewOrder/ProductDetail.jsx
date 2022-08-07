import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Box,
} from "@mui/material";
import { useContext } from "react";
import GlobalContext from "context/GlobalContext";
import { addSummaryPrice } from "services/functions";
import themeReviewOrder from "./theme/theme";

const ProductDetail = () => {
  const { cartItems } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={themeReviewOrder}>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem className="detail-listItem" key={item.id}>
            <ListItemText primary={item.title} secondary={item.artist} />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "center",
                // p: 1,
                // m: 1,
                // bgcolor: "black",
                // borderRadius: 1,
              }}
            >
              <Typography variant="body2">{item.qty} units</Typography>
              <Typography variant="body2">{item.price}€</Typography>
            </Box>
          </ListItem>
        ))}
        <ListItem className="detail-listItem">
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className="detail-listTotal">
            {addSummaryPrice(cartItems)}€
          </Typography>
        </ListItem>
      </List>
    </ThemeProvider>
  );
};

export default ProductDetail;
