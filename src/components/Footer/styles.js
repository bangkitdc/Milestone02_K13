import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    footer: {
        position: "relative",
        bottom: 0,
        left: 0,
        color: "white",
        margin: "30px 0 15px",
        textAlign: "center",
        width: "100%",
    },
    about: {
        width: "80px",
        margin: "0 auto",
        cursor: "pointer",
        color: "white",
        "&:hover": {
            color: "#8FE3CF"
        },
    }
}));
