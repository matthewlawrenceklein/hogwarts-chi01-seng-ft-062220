import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer"
import Filter from "./Filter"



class App extends Component {

  // constructor method, set state for hogs: imported hogs
  // pass hogs as prop down to hogscontainer?
  // hogscontainer passes to hog card?

  // filtered state in app 
  // callback function within app 
  // update state when triggered 

  constructor() {
    super()
    this.state = {
      allHogs: hogs,
      filtered: 'all'
    }
  }

  sortGreased = () => {
    console.log(this.state.allHogs.length)
    this.state.allHogs.length > 10 ? 

    this.setState({
      allHogs : hogs.filter(hog =>  hog.greased)
    }) : 

    this.setState({
      allHogs : hogs
    })
  }

  handleShow = (hogName) => {
      const thisHog = this.state.allHogs.filter( hog => hog.name === hogName)[0]
      console.log(thisHog)
  }

  sortedHogs = () => {

    if (this.state.filtered === 'name'){
      this.setState({
        allHogs : hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
      }) 
      console.log(this.state.allHogs)
    } else if (this.state.filtered === 'weight'){
      this.setState({
        allHogs : hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
      }) 
      console.log(this.state.allHogs)
    }


  } 

  handleFilter = (event) => {

    this.setState({
      filtered: event.target.value
    })
    this.sortedHogs()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter handleFilter={this.handleFilter} sortGreased={this.sortGreased} />
        <HelloWorld />
        <HogContainer allHogs={ this.state.allHogs } handleShow={this.handleShow} />
      </div>
    );
  }
}

export default App;
