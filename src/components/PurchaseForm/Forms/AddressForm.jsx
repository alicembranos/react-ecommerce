import { Grid, Typography } from "@mui/material";
import InputField from "components/FormFields/InputField";
import CheckboxField from "components/FormFields/CheckboxField";
import SelectField from "components/FormFields/SelectField";

const cities = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "Paris",
  },
  {
    value: "2",
    label: "Rouen",
  },
  {
    value: "3",
    label: "Toulon",
  },
  {
    value: "4",
    label: "Lyon",
  },
];

const states = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "11",
    label: "Île-de-France",
  },
  {
    value: "22",
    label: "Seine Maritime",
  },
  {
    value: "33",
    label: "Var",
  },
  {
    value: "33",
    label: "Rhône",
  },
];

const countries = [
  {
    value: null,
    label: "None",
  },
  {
    value: "111",
    label: "France",
  },
  {
    value: "222",
    label: "Spain",
  },
  {
    value: "333",
    label: "Germany",
  },
  {
    value: "444",
    label: "Denmark",
  },
];

const AddressForm = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
    },
  } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom color="aliceblue" marginBottom="20px">
        Shipping Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
