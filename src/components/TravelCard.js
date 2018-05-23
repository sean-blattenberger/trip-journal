import React from "react";
import { Card, Col } from "react-materialize";

class TravelCard extends React.Component {
  render() {
    return (
      <Col m={6} s={12}>
        <Card
          className="blue-grey darken-4 white-text"
          textClassName="red-text text-lighten-2"
          title={
            <div className="white-text">
              {`${this.props.trip.destination.city}, ${
                this.props.trip.destination.state
                }`}
            </div>
          }
          actions={[
            <a key={this.props.trip.id} className="light-blue-text" href={`/trips/${this.props.trip.id}`}>
              View your trip journal
            </a>
          ]}
        >
          {this.props.trip.date}
        </Card>
      </Col>
    );
  }
}

export default TravelCard;
