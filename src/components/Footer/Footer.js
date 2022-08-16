import React from 'react';
import { Typography } from "@material-ui/core";
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography variant='subtitle1'>©2022 Milestone_K13 | All rights reserved.</Typography>
        </div>
    )
}

export default Footer;
