/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import img1 from "./images/logo.jpg";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from "react-router-dom";
const Header = () => {
    const [auth, setAuth] = useState("");
    const [user, setUser] = useState("");
    let navigate = useNavigate();
    useEffect(() => {
        //console.log(auth)
        var UserName = localStorage.getItem("useName");
        setUser(UserName);
    });
    return ( <
        nav class = "navbar navbar-expand-lg navbar-light bg-light" >
        <
        div class = "container-fluid" >
        <
        a class = "navbar-brand"
        href = "#" > Navbar: < /a> <
        div class = "collapse navbar-collapse"
        id = "navbarText" >
        <
        ul class = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li class = "nav-item" >
        <
        Link to = "/"
        class = "nav-link active" > Home < /Link> < /
        li > <
        li class = "nav-item" >
        <
        Link to = "/register"
        class = "nav-link active" > Register < /Link> < /
        li > <
        li class = "nav-item" >
        <
        Link to = "/login"
        class = "nav-link active" > Login < /Link> < /
        li > <
        /ul> <
        span class = "navbar-text" > Welcome { user } < /span>{" "} < /
        div > <
        /div> < /
        nav >
    );
};
export default Header;