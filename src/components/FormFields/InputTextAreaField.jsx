import { TextField, ThemeProvider } from "@mui/material";
import { useField } from "formik";
import { at } from "lodash";
import themeInputForm from "./theme/theme";

const InputTextAreaField = (props) => {
  const { ...rest } = props;
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
        error={meta.touched && meta.error && true}
        helperText={renderHelperText()}
        {...field}
        {...rest}
        variant="standard"
        multiline
        minRows={5}
        maxRows={10}
      />
    </ThemeProvider>
  );
};

export default InputTextAreaField;
