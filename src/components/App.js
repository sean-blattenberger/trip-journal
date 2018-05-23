import React, { Component } from "react";
import "../App.css";
import Header from "./Navbar/Header";
import TravelCards from "./TravelCards";
// const trips = [
//   {
//     id: 1,
//     date: '2013-04-10',
//     destination: {
//       city: 'Pittsburgh',
//       state: "PA",
//     },
//     attractions: ["PNC Park", "Carnegie Museum", "Phipps Conservatory"],
//     restaurants: ["Primanti's", "Smallman Galley", "DiAnoia's"],
//     notes: ""
//   },
//   {
//     id: 2,
//     date: '2012-05-11',
//     destination: {
//       city: 'Denver',
//       state: "CO",
//     },
//     attractions: ["Rocky Mtn National Park", "Pike's Peak", "Mt. Evans"],
//     restaurants: ["Snooze", "Denver Biscuit CO", "Fat Sully's"],
//     notes: ""
//   },
//   {
//     id: 3,
//     date: '2011-06-12',
//     destination: {
//       city: 'Savannah',
//       state: "GA",
//     },
//     attractions: ["Forsyth Park", "River Street", "The Pink House"],
//     restaurants: ["Vinnie Van Go Go's Pizza", "The Pink House", "Wet Willy's"],
//     notes: ""
//   }
// ];
class App extends Component {
  state = {
    trips: []
  }
  componentDidMount() {
    this.readData();
  }
  readData = () => {
    fetch('http://localhost:3000/api/trips').then(res => res.json()).then(trips => {
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
