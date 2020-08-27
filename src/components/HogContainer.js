import React, { Component } from 'react';
import HogCard from "./HogCard"



class HogContainer extends Component {


    renderHogs = () => {
        return this.props.allHogs.map((hog) => {
           return <HogCard hogData={ hog } handleShow={this.props.handleShow} /> 
        })
    }


    render() {
        return (
            // <div className="ui grid container">
                <div className='ui grid cards'>
                    { this.renderHogs() } 
                </div>
            // </div>
        );
    }
}

export default HogContainer;
