import React, { Component } from "react";
import "../App.css";
import { Row } from "react-materialize";
import Header from "./Navbar/Header";
import CollapseForm from "./CollapseForm";
import TravelCards from "./TravelCards";

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
  // deleteSingleTrip = () => {
  //   fetch(`https://warm-atoll-11937.herokuapp.com/api/trips/${id}`, {
  //     method: "DELETE"
  //   }).then(data => {
  //     console.log(data);
  //   });
  // };
  addNewTrip = newTrip => {
    console.log(newTrip);
    let trip = {
      city: newTrip.city,
      state: newTrip.state,
      date: newTrip.date,
      notes: newTrip.notes
    };
    fetch("https://warm-atoll-11937.herokuapp.com/api/trips", {
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
        <Header />
        <TravelCards updateCurrentTrip={this.updateCurrentTrip} trips={this.state.trips} />
        <Row>
          <CollapseForm addNewTrip={this.addNewTrip} />
        </Row>
      </div>
    );
  }
}

export default App;
