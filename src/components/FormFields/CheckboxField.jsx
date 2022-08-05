import { at } from "lodash";
import { useField } from "formik";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  ThemeProvider,
} from "@mui/material";
import themeInputForm from "./theme/theme";

const CheckboxField = (props) => {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <ThemeProvider theme={themeInputForm}>
      <FormControl {...rest}>
        <FormControlLabel
          value={field.checked}
          checked={field.checked}
          control={<Checkbox {...field} onChange={onChange} />}
          label={label}
          variant="standard"
        />
        {renderHelperText()}
      </FormControl>
    </ThemeProvider>
  );
};

export default CheckboxField;
