import React, { Component } from 'react';
import {City} from "./components"
require("dotenv").config()



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            lat: null,
            long: null,
            errorMessage: ""
        }
    }

    fetchData = () => {
        const coords = `${this.state.lat}%2C+${this.state.long}`
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data.results))
        .catch(error => console.log(error.message))
        
    }
    

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            error => this.setState({errorMessage: error.message})
        ) 
        this.fetchData()
    }

    render() { 
        return (
            <div>
                <City>

                </City>
                <p>
                    {this.state.lat}
                    <br/>
                    {this.state.long}
                </p>
            </div>
          );
    }
}
 
export default App;