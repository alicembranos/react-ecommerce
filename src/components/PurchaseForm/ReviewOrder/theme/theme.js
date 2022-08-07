const { createTheme } = require("@mui/material");

const themeReviewOrder = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "aliceblue",
          "&.MuiTypography-body2": {
            color: "#7b7b7b",
          },
          "&.MuiTypography-subtitle1": {
            fontSize: "20px",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          marginBottom: "40px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #7b7b7b",
        },
        "&:last-child": {
          borderBottomWidth: 0,
        },
      },
    },
  },
});

export default themeReviewOrder;
