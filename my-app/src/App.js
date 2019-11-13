import React, { Component } from 'react';
import {City} from "./components"
require("dotenv").config()



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            city: "",
            errorMessage: ""
        }
    }

    fetchData = (lat, long) => {
        const coords = `${lat}%2C+${long}`
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({city: data.results[0].components.city}))
        .catch(error => console.log(error.message))
        
    }
    

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.fetchData(position.coords.latitude, position.coords.longitude),
            error => this.setState({errorMessage: error.message})
        ) 
    }

    render() { 
        return (
            <div>
                <City city={this.state.city}>

                </City>
            </div>
          );
    }
}
 
export default App;