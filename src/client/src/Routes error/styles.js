import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    box: {
        width: "100%",
        textAlign: "center",
        // position: "relative",
    },
    middle: {
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    err1: {
        top: "200px",
        color: "white",
        fontWeight: "600",
    },
    err2: {
        color: "white",
    }
}));