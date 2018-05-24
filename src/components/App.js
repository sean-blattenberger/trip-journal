import React, { Component } from "react";
import "../App.css";
import Header from "./Navbar/Header";
import TravelCards from "./TravelCards";

class App extends Component {
  state = {
    trips: []
  }
  componentDidMount() {
    this.readData();
  }
  readData = () => {
    fetch('https://warm-atoll-11937.herokuapp.com/api/trips').then(res => res.json()).then(trips => {
      this.setState({ trips })
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TravelCards trips={this.state.trips}/>
      </div>
    );
  }
}

export default App;
