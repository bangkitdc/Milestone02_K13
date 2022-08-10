import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "40vh",
    },
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column-reverse",
    },
  },
  section: {
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsInnerContainer: {
    height: "200px",
    width: "100%",
    overflowY: "auto",
  },
  recommend: {
    margin: "20px",
    cursor: "pointer",
    flex: 1,
  },
  writeComment: {
    width: "100%",
  },
  buttonComment: {
    marginTop: "10px",
  },
}));
