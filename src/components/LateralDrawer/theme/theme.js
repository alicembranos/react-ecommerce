const { createTheme } = require("@mui/material");

const themeDrawer = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          "&.MuiDrawer-docked": {
            position: "relative",
            "& .MuiDrawer-paper": {
              height: "300px",
            },
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiDrawer-paper": {
            position: "relative",
            background: "#390b48",
            color: "aliceblue",
            borderRadius: "20px",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "aliceblue",
          minWidth: "30px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            opacity: "0.8",
          },
        },
      },
    },
  },
});

export default themeDrawer;
