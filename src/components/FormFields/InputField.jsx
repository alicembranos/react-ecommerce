import { at } from "lodash";
import { useField } from "formik";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import themeInputForm from "./theme/theme";

const InputField = (props) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <ThemeProvider theme={themeInputForm}>
      <TextField
        type="text"
        error={meta.touched && meta.error && true}
        helperText={renderHelperText()}
        {...field}
        {...rest}
        variant="standard"
      />
    </ThemeProvider>
  );
};

export default InputField;
