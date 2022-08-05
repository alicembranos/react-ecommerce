import { useField } from "formik";
import { Grid } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useState } from "react";
import { useEffect } from "react";

const DatePickerField = (props) => {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);

  const onChange = (date) => {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  };

  return (
    <Grid container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <KeyboardDatePicker
          {...field}
          {...props}
          value={selectedDate}
          onChange={onChange}
          error={isError}
          invalidDateMessage={isError && error}
          helperText={isError && error}
          variant="standard"
        />
      </LocalizationProvider>
    </Grid>
  );
};

export default DatePickerField;
