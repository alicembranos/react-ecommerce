import { useField } from "formik";
import { Grid, TextField, ThemeProvider } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useEffect } from "react";
import themeInputForm from "./theme/theme";

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

  const handleChange = (date) => {
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
    <ThemeProvider theme={themeInputForm}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          input
          inputFormat="MM/yyyy"
          {...field}
          {...props}
          value={selectedDate}
          onChange={handleChange}
          error={isError}
          helperText={isError && error}
          renderInput={(params) => (
            <TextField
              {...params}
              error={isError}
              invalidDateMessage={isError && error}
              helperText={isError && error}
              className="datepicker"
            />
          )}
        ></DatePicker>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DatePickerField;
