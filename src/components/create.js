import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            destination: '',
            nombrepersonnes: '',
            Date_reservation: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('destination', this.state.destination)
        formData.append('nombrepersonnes', this.state.nombrepersonnes)
        formData.append('Date_reservation', this.state.Date_reservation)

        axios({
                method: 'post',
                url: 'http://localhost/exemple/fich.php',
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
            .then(function(response) {
                //handle success
                console.log(response)
                alert('New Contact Successfully Added.');
            })
            .catch(

                function(response) {
                    //handle error
                    console.log(response)
                });

    }
    render() {
        return ( <
            div className = "container" >
            <
            h2 > Reservation d 'une croisiére</h2> <
            Link to = "/"
            className = "btn btn-primary btn-xs" > Home < /Link> <
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
            /> <
            label > Nom < /label> <
            input type = "text"
            name = "name"
            className = "form-control"
            value = { this.state.name }
            onChange = { this.handleChange }
            />

            <
            label > Email < /label> <
            input type = "text"
            name = "email"
            className = "form-control"
            value = { this.state.email }
            onChange = { this.handleChange }
            />

            <
            label > Destination < /label> <
            input type = "text"
            name = "destination"
            className = "form-control"
            value = { this.state.destination }
            onChange = { this.handleChange }
            />

            <
            label > Nombre personnes < /label> <
            input type = "text"
            name = "nombrepersonnes"
            className = "form-control"
            value = { this.state.nombrepersonnes }
            onChange = { this.handleChange }
            />

            <
            label > Date_reservation < /label> <
            input type = "text"
            name = "Date_reservation"
            className = "form-control"
            value = { this.state.Date_reservation }
            onChange = { this.handleChange }
            /> <
            br / >
            <
            input type = "submit"
            className = "btn btn-primary btn-block"
            value = "Réserver" / >
            <
            /form> < /
            div > <
            /div> < /
            div > <
            /div>
        );
    }
}

export default Create;