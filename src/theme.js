import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI, Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  palette: {
    secondary: {
      main: "#FE4A49",
    },
  },
});

export default theme;
