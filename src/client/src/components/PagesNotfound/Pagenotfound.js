import React from 'react';
import useStyles from "./styles";
import { Box, Typography } from "@material-ui/core";

const PageNotFound = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <div className={classes.middle}>
                <Typography className={classes.err1} variant='h1'>404</Typography>
                <Typography className={classes.err2} variant='h4'>Page Not Found!</Typography>
            </div>
        </Box>
    )
}

export default PageNotFound;
