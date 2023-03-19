import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#DF6E57",
    },
    secondary: {
      main: "#DF6E57",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
