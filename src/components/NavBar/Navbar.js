import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import logo from '../../images/logo.png';
import text from '../../images/text.png';
import useStyles from './styles';
import { LOGOUT } from '../../constants/actionTypes';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: LOGOUT });
        navigate('/auth');
        window.location.reload();
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if (token) {
            
            if (token.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img className={classes.image1} component={Link} to="/" src={text} alt="icon" />
                <img className={classes.image2} src={logo} alt="icon" />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.given_name} src={user.result.picture}>{user.result.name.charAt(0) || user.result.given_name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name || user.result.given_name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar> 
        </AppBar>
  )
}

export default Navbar;
