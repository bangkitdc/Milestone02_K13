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
    marginLeft: "10px",
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
  recommendedPosts: {
    marginTop: "20px",
  },
  recommend: {
    cursor: "pointer",
  },
  writeComment: {
    width: "100%",
  },
  buttonComment: {
    marginTop: "10px",
  },
  recImg: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "6px",
  },
  recCard: {
    background: "#F8F7F3",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
}));
