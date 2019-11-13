import React, { Component } from 'react';
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
                <p>
                    Hallo Welt!
                </p>
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