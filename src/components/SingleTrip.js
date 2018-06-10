import React from "react";
import { Row, Col, Card, Button, Icon, Input } from "react-materialize";
import Header from "./Navbar/Header";
import { Link } from "react-router-dom";

class SingleTrip extends React.Component {
  state = {
    trip: [],
    updateForm: false
  };
  componentDidMount() {
    this.getSingleTrip();
  }
  toggleForm = () => {
    let formStatus = this.state.updateForm ? false : true;
    this.setState({ updateForm: formStatus });
  };
  getSingleTrip = () => {
    let url = window.location.href.split("/");
    fetch(
      `https://warm-atoll-11937.herokuapp.com/api/trips/${url[url.length - 1]}`
    )
      .then(res => res.json())
      .then(trip => {
        this.setState({ trip });
      });
  };
  updateTrip = event => {
    event.preventDefault();
    fetch(`https://warm-atoll-11937.herokuapp.com/api/trips/${this.state.trip.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state.trip)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ updateForm: false });
      });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Row>
          {this.state.updateForm ? (
            <Col offset="m2" m={8} s={12}>
              <form onSubmit={this.updateTrip}>
                <Input
                  onChange={this.handleChange}
                  name="city"
                  defaultValue={this.state.trip.city}
                  placeholder="City"
                  s={6}
                  label="City"
                />
                <Input
                  onChange={this.handleChange}
                  name="state"
                  defaultValue={this.state.trip.state}
                  s={6}
                  label="State"
                />
                <Input
                  onChange={this.handleChange}
                  name="date"
                  defaultValue={this.state.trip.date.split("T")[0]}
                  s={12}
                  label="Date"
                  placeholder="xx/xx/xxxx"
                />
                <Input
                  onChange={this.handleChange}
                  name="notes"
                  defaultValue={this.state.trip.notes}
                  label="Notes"
                  s={12}
                />
                <Button
                  type="submit"
                  className="blue-grey darken-4 white-text"
                  onClick={this.updateTrip}
                >
                  Update Trip
                </Button>
                <Button className="red white-text" onClick={this.toggleForm}>
                  Cancel
                </Button>
              </form>
            </Col>
          ) : (
            <Col offset="m2" m={8} s={12}>
              <Card
                className="large blue-grey darken-4 white-text"
                textClassName="red-text text-lighten-2"
                title={[
                  <div className="white-text">
                    {`${this.state.trip.city}, ${this.state.trip.state}`}
                  </div>
                ]}
                actions={[
                  <Button
                    className="red white-text"
                    waves="light"
                    onClick={this.deleteTrip}
                  >
                    <Icon right>clear</Icon>
                    Delete Trip
                  </Button>,
                  <Button
                    onClick={this.toggleForm}
                    className="light-blue"
                    waves="light"
                  >
                    <Icon right>create</Icon>
                    Update Trip
                  </Button>
                ]}
              >
                {this.state.trip.date ? this.state.trip.date.split("T")[0] : ""}
                <article>
                  <div className="divider" />
                  <div className="light-blue-text">{this.state.trip.notes}</div>
                </article>
              </Card>
            </Col>
          )}
        </Row>
      </React.Fragment>
    );
  }
}

export default SingleTrip;
