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

    // fetchData(){
            
    //         fetch(`https://api.opencagedata.com/geocode/v1/json?q=${}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`, {
    //         method: "GET",
    //         withCredentials: true,
    //         credentials: "include",
    //         headers: {
    //         Authentication: `${process.env.REACT_APP_OPENCAGE_API_KEY}`
    //     }
    //     })
        
    // }
    

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            error => this.setState({errorMessage: error.message})
        ) 
        console.log("My component was rendered to the screen.")
    }
    render() { 
        console.log(process.env.REACT_APP_OPENCAGE_API_KEY)
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