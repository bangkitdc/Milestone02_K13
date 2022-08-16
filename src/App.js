import React from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/Pagenotfound';
import About from './components/About/About';

import theme from './theme';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}`}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Container maxWidth="xl" style={{ minHeight: "97vh", display: "flex", flexDirection: "column" }}>
                        <div style={{ flex: "1" }}>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Navigate replace to="/posts" />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/posts" exact element={<Home />} />
                            <Route path="/posts/search" exact element={<Home />}/>
                            <Route path="/posts/:id" exact element={<PostDetails />}/>
                            <Route path="/auth" exact element={(!user ? <Auth /> : <Navigate replace to="/posts" />)} />
                            <Route path="/404" exact element={<PageNotFound />}/>
                            <Route path="*" element={<Navigate replace to="/404" />}/>
                        </Routes>
                        </div>
                        <Footer />
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;
