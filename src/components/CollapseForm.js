import React from "react";
import { Button, Row, Col, Input } from "react-materialize";

class CollapseForm extends React.Component {
  state = {
    showForm: false,
    city: "",
    state: "",
    date: "",
    notes: ""
  };
  toggleForm = () => {
    let formState = this.state.showForm ? false : true;
    this.setState({ showForm: formState });
  };
  addTrip = (event) => {
    event.preventDefault();
    console.log('Submit: this.state: ', this.state);
    this.props.addNewTrip(this.state);
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Col offset="m2" m={8} s={12}>
        <Button
          className="form-toggle blue-grey darken-2 light-blue-text"
          large
          onClick={this.toggleForm}
        >
          Add a Trip
        </Button>
        {this.state.showForm ? (
          <Row className="form-row">
            <form onSubmit={this.addTrip}>
              <Input
                onChange={this.handleChange}
                name="city"
                value={this.state.city}
                placeholder="City"
                s={6}
                label="City"
              />
              <Input
                onChange={this.handleChange}
                name="state"
                value={this.state.state}
                s={6}
                label="State"
              />
              <Input
                onChange={this.handleChange}
                name="date"
                value={this.state.date}
                s={12}
                label="Date"
                placeholder="xx/xx/xxxx"
              />
              <Input
                onChange={this.handleChange}
                name="notes"
                value={this.state.notes}
                type="text"
                label="Notes"
                s={12}
              />
              <Button
                type="submit"
                className="blue-grey darken-4 white-text"
                onClick={this.addTrip}
              >
                Add a Trip
              </Button>
            </form>
          </Row>
        ) : (
          ""
        )}
      </Col>
    );
  }
}

export default CollapseForm;
