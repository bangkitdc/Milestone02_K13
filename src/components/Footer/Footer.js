import React from "react";
import { Typography } from "@material-ui/core";
<<<<<<< HEAD
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
=======
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="subtitle2">
        Copyright ©2022 Milestone_K13 | All rights reserved.
      </Typography>
    </div>
  );
};
>>>>>>> 8a7bef78551d05ee39fcf6439ca71b4782f95e72

export default Footer;
