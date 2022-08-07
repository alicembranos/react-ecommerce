import { FormControl, Grid, Typography } from "@mui/material";
import DatePickerField from "components/FormFields/DatePickerField";
import InputField from "components/FormFields/InputField";

const PaymentForm = (props) => {
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv },
  } = props;

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        color="aliceblue"
        marginBottom="20px"
      >
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <FormControl fullWidth>
            <InputField name={nameOnCard.name} label={nameOnCard.label} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputField
              name={cardNumber.name}
              label={cardNumber.label}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <DatePickerField
              name={expiryDate.name}
              label={expiryDate.label}
              format="MM/yy"
              views={["year", "month"]}
              minDate={new Date()}
              maxDate={new Date("2050/12/31")}
            ></DatePickerField>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputField name={cvv.name} label={cvv.label} />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;
