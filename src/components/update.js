import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Update extends React.Component {
    state = { reservation: [] };

    componentDidMount() {
        axios.get('http://localhost/exemple/fich.php').then((res) => {
            const reservation = res.data;
            this.setState({ reservation });
        });
    }

    render() {
        return ( <
            div className = "container" >
            <
            h2 > Modifier réservation < /h2>{" "} <
            Link to = "/"
            className = "btn btn-primary btn-xs" > { " " }
            Home { " " } <
            /Link>{" "} <
            div className = "col-md-12" >
            <
            div className = "panel panel-primary" >
            <
            div className = "panel-body" >
            <
            form onSubmit = { this.handleSubmit } >
            <
            input type = "hidden"
            name = "id"
            value = { this.state.id }
            />{" "} <
            label > Nom < /label>{" "} <
            input type = "text"
            name = "name"
            className = "form-control"
            value = { this.state.name }
            onChange = { this.handleChange }
            />{" "} <
            label > Email < /label>{" "} <
            input type = "email"
            name = "email"
            className = "form-control"
            value = { this.state.email }
            onChange = { this.handleChange }
            />{" "} <
            label > Destination < /label>{" "} <
            input type = "text"
            name = "country"
            className = "form-control"
            value = { this.state.destination }
            onChange = { this.handleChange }
            />{" "} <
            label > Nombre personnes < /label>{" "} <
            input type = "text"
            name = "city"
            className = "form-control"
            value = { this.state.nombrepersonnes }
            onChange = { this.handleChange }
            />{" "} <
            label > Date_reservation < /label>{" "} <
            input type = "text"
            name = "job"
            className = "form-control"
            value = { this.state.Date_reservation }
            onChange = { this.handleChange }
            />{" "} <
            br / >
            <
            input type = "submit"
            className = "btn btn-primary btn-block"
            value = "modifier" /
            >
            <
            /form>{" "} < /
            div > { " " } <
            /div>{" "} < /
            div > { " " } <
            /div>
        );
    }
}
export default Update;