import React from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import { Container} from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

import theme from './theme';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}`}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Container maxWidth="xl">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Navigate replace to="/posts" />} />
                            <Route path="/posts" exact element={<Home />}/>
                            <Route path="/posts/search" exact element={<Home />}/>
                            <Route path="/posts/:id" exact element={<PostDetails />}/>
                            <Route path="/auth" exact element={(!user ? <Auth /> : <Navigate replace to="/posts" />)} />
                        </Routes>
                    </Container>
                </ThemeProvider>
                <Container maxWidth="xl">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/posts" />} />
                        <Route path="/posts" exact element={<Home />}/>
                        <Route path="/posts/search" exact element={<Home />}/>
                        <Route path="/posts/:id" exact element={<PostDetails />}/>
                        <Route path="/auth" exact element={(!user ? <Auth /> : <Navigate replace to="/posts" />)} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;
