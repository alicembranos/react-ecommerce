import { useField } from "formik";
import { at } from "lodash";
import PropTypes from "prop-types";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import themeInputForm from "./theme/theme";
import { ThemeProvider } from "@mui/system";

const SelectField = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;

  function renderHelperText() {
    return isError && <FormHelperText>{error}</FormHelperText>;
  }

  return (
    <ThemeProvider theme={themeInputForm}>
      <FormControl {...rest} error={isError}>
        <InputLabel>{label}</InputLabel>
        <Select
          {...field}
          value={selectedValue ? selectedValue : ""}
          variant="standard"
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {renderHelperText()}
      </FormControl>
    </ThemeProvider>
  );
};

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectField;
