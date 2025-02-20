import React from "react";
import { Grid, Typography } from "@mui/material";
import moment from "moment";

const PaymentDetails = (props) => {
  const { formValues } = props;
  const { nameOnCard, cardNumber, expiryDate } = formValues;

  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography
        variant="h6"
        gutterBottom
        className="paymentDetails-title"
        sx={{ textDecoration: "underline" }}
      >
        Payment Details
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card type:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Visa</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card holder:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{nameOnCard}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card number:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{cardNumber}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Expiry Date:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>
              {moment(expiryDate).format("MM/YY")}
            </Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
};

export default PaymentDetails;
