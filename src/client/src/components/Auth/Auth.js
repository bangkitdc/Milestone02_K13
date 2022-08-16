import React, { useState } from "react";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { AUTH } from "../../constants/actionTypes";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  emai: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSingup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSingup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);

    const result = decoded;
    const token = result.sub;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <div className={classes.googleButton}>
            <GoogleLogin
              //   shape="circle"
              //   type="icon"
              //   theme="filled_blue"
              text="continue_with"
              onSuccess={googleSuccess}
              onError={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </div>
          <Grid container justifyContent="center">
            <Grid item>
              <Button onClick={switchMode} className={classes.lowerButton}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
