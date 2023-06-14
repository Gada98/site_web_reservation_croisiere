/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first_name: "", last_name: "", phone: "", email: "", password: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
    handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("first_name", this.state.first_name);
        formData.append("last_name", this.state.last_name);
        formData.append("phone", this.state.phone);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        axios({
                method: "post",
                url: "http://localhost/exemple/inscrir.php",
                data: formData,
                config: { headers: { "Content-Type": "multipart/form-data" } },
            })
            .then(function(response) {
                //handle success
                console.log(response);
                alert("New Contact Successfully Added.");
            })
            .catch(function(response) {
                //handle error
                // console.log(response);
            });
    }
    render() {
        return ( <
            div >
            <
            form onSubmit = { this.handleSubmit } >
            <
            div className = "row" >
            <
            div className = "col-md-12 text-center" >
            <
            h2 > Page d 'Inscription </h2>{" "} <
            /div> <
            /div><br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            h4 > Nom < /h4> <
            /div> <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "first_name"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.first_name }
            />{" "} <
            /div>{" "} <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Prénom < /h4> <
            /div>{" "} <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "last_name"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.last_name }
            />{" "} <
            /div>{" "} <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Numéro_téléphone < /h4> <
            /div>{" "} <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "phone"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.phone }
            />{" "} <
            /div>{" "} <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Email < /h4>{" "} <
            /div>{" "} <
            div className = "col-md-6" >
            <
            input type = "email"
            name = "email"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.email }
            />{" "} <
            /div>{" "} <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Mot de passe < /h4> <
            /div>{" "} <
            div className = "col-md-6" >
            <
            input type = "password"
            name = "password"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.password }
            />{" "} <
            /div>{" "} <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-12 text-center" >
            <
            input type = "submit"
            name = "submit"
            value = "REGISTER"
            className = "btn-success" /
            >
            <
            /div>{" "} <
            /div>{" "} <
            /form>{" "} <
            /div>
        );
    }
}
export default Register;