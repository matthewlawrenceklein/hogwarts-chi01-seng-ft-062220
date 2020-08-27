import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'


class HogCard extends Component {


    constructor(){
        super()
        this.state = {
            isHidden : true, 
        }
    }
    
    hogPic = () => {
        let pigImage = require(`../hog-imgs/${this.props.hogData.name.toLowerCase().split(' ').join('_')}.jpg`)
        return pigImage
    }

    handleClick = () => {
        
        this.setState({
            isHidden : !this.state.isHidden
        })
    }

    renderDetails = () => {
       return  <div id='sandwich'>
                <div>
                    <div class="meta">
                        <span class="date">  GREASED { this.props.hogData.greased ? 'true' : 'false'}</span>
                    </div>
                    <div class="description">
                        SPECIALTY { this.props.hogData.specialty }
                    </div>
                    </div>
                    <div class="extra content">
                    <a>
                        <i class="user icon"></i>
                        { this.props.hogData.weight } lbs 
                    </a>
                    </div>
                </div>
    }

    render() {
        return (
            <div class="ui card pigTile">
            <div class="image">
                <img src={ this.hogPic() } /> 
            </div>
            <div class="content">
              <a class="header">NAME { this.props.hogData.name }</a>
              {/* <button onClick={ () => this.props.handleShow(this.props.hogData.name) }>SHOW DETAILS</button> */}
              <button onClick={ () => this.handleClick() }>TOGGLE DETAILS</button>
              
              { this.state.isHidden ? undefined : this.renderDetails()  }

            </div>
          </div>
        );
    }
}

export default HogCard;

