import { Grid, ThemeProvider, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import PaymentDetails from "./PaymentDetails";
import ProductDetail from "./ProductDetail";
import ShippingDetails from "./ShippingDetails";
import themeReviewOrder from "./theme/theme";

const ReviewOrder = () => {
  const { values: formValues } = useFormikContext();
  return (
    <ThemeProvider theme={themeReviewOrder}>
      <Typography variant="h6" gutterBottom sx={{textDecoration: 'underline'}}>
        Order summary
      </Typography>
      <ProductDetail />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid>
    </ThemeProvider>
  );
};

export default ReviewOrder;
