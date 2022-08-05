const { createTheme } = require("@mui/material");

const themeInputForm = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#7b7b7b",
          "&.Mui-focused": {
            color: "#c50c91",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "aliceblue",
          "&::before": {
            borderBottom: "1px solid #7b7b7b",
          },
          "&:hover:not(.Mui-disabled)&::before": {
            borderBottom: "1px solid aliceblue",
          },
          "&::after": {
            borderBottom: "2px solid #c50c91",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "aliceblue",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#7b7b7b",
          "&.Mui-checked": {
            color: "#c50c91",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: { color: "aliceblue" },
      },
    },
  },
});

export default themeInputForm;
