import { Typography } from "@mui/material";
import React from "react";

const CheckoutSuccess = ({ orderNumber }) => {
  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "aliceblue", marginTop: "20px" }}
      >
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#ccc" }}>
        {`Your order number is ${orderNumber}. We have emailed your order confirmation,
        and will send you an update when your order has shipped.`}
      </Typography>
    </>
  );
};

export default CheckoutSuccess;
