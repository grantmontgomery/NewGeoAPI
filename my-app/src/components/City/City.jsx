import React, { Component } from 'react';


class City extends Component {
    state={}
    render() { 
        return (
            <div>
                <p>You are located in...</p>
                <p>{this.props.city}</p>
            </div>
          );
    }
}
 
export default City;