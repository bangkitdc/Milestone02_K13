import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    box: {
        width: "100%",
        textAlign: "center",
    },
    heading: {
        color: "white",
        fontWeight: "600",
        [theme.breakpoints.down("xs")]: {
            fontSize: "4rem",
        },
    },
    paragraph: {
        fontSize: "1.2rem",
        marginTop: theme.spacing(6),
        color: "#FCF8E8",
        width: "65%",
        margin: "0 auto",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.05rem",
            width: "95%",
            marginTop: theme.spacing(5),
        },
    },
    dor: {
        color: "#8FE3CF"
    }
}));
