import React from 'react';
import { Typography } from "@material-ui/core";
import useStyles from './styles';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const about = () => {
        navigate('/about');
    }

    return (
        <div className={classes.footer}>
            <div className={classes.hehe}>
                <Typography className={classes.about} variant='subtitle1' onClick={about}>About Us</Typography>
            </div>
            <Typography variant='subtitle1'>©2022 Milestone_K13 | All rights reserved.</Typography>
        </div>
    )
}

export default Footer;
