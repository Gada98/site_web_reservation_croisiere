/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Header from "./Header";
import Accueil from "./Accueil";
import Contact from "./components/contact";
import Create from "./components/create";
import Update from "./components/update";
import Help from "./Help";
// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";

function App() {
    return ( <
        div class = "container" >
        <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "/login"
        element = { < Login / > }
        />{" "} <
        Route path = "/register"
        element = { < Register / > }
        />{" "} <
        Route path = "/accueil"
        element = { < Accueil / > }
        />  <
        Route path = "/help"
        element = { < Help / > }
        /> <
        Route exact path = "/contact"
        element = { < Contact / > }
        /> <
        Route exact path = "/create"
        element = { < Create / > }
        /> <
        Route exact path = "/update/:id"
        element = { < Update / > }
        /> < /
        Routes > { " " } < /
        Router > { " " } <
        /div>
    );
}

export default App;