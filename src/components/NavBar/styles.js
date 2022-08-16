import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 30px",
    },
  },
  image1: {
    height: "45px",
    [theme.breakpoints.down("sm")]: {
      height: "30px",
    },
  },
  image2: {
    marginLeft: "15px",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
    },
  },
  toolbar: {
    padding: 0,
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      justifyContent: "space-between",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      marginRight: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "0 10px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
