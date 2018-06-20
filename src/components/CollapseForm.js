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
    this.props.addNewTrip(this.state)
    .then(this.props.readData);
    document.getElementById("collapse-form").reset();
    this.setState({ showForm: false });
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
            <form id="collapse-form" onSubmit={this.addTrip}>
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
              <Button
                type="submit"
                className="blue-grey darken-4 white-text"
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
