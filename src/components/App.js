import React, { Component } from "react";
import "../App.css";
import { Row } from "react-materialize";
import Header from "./Navbar/Header";
import CollapseForm from "./CollapseForm";
import TravelCards from "./TravelCards";
import About from "./About";


class App extends Component {
  state = {
    trips: []
  };
  componentDidMount() {
    this.readData();
  }
  readData = () => {
    fetch("https://warm-atoll-11937.herokuapp.com/api/trips")
      .then(res => res.json())
      .then(trips => {
        this.setState({ trips });
      });
  };
  addNewTrip = newTrip => {
    let trip = {
      city: newTrip.city,
      state: newTrip.state,
      date: newTrip.date,
      notes: newTrip.notes
    };
    return fetch("https://warm-atoll-11937.herokuapp.com/api/trips", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(trip)
    })
      .then(res => res.json())
      .then(data => {
        console.log("success");
      });
  };
  updateCurrentTrip = tripToUpdate => {
    console.log(tripToUpdate);
  };
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="card-container">
          <About/>
        </div>
        <div className="card-container">
          <TravelCards
            className="travel-cards"
            updateCurrentTrip={this.updateCurrentTrip}
            trips={this.state.trips}
          />
        </div>
        <Row>
          <CollapseForm readData={this.readData} addNewTrip={this.addNewTrip} />
        </Row>
      </div>
    );
  }
}

export default App;
