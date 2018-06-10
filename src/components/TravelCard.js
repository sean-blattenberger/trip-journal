import React from "react";
import { Card, Col } from "react-materialize";
import { Link } from 'react-router-dom';

class TravelCard extends React.Component {
  render() {
    return (
      <Col m={6} s={12}>
        <Card
          className="blue-grey darken-4 white-text"
          textClassName="red-text text-lighten-2"
          title={[
            <div className="white-text">
              {`${this.props.trip.city}, ${
                this.props.trip.state
                }`}
            </div>
          ]}
          actions={[
              <Link key={this.props.trip.id} className="light-blue-text" to={`/trips/${this.props.trip.id}`}>
                View your trip journal
              </Link>
          ]}
        >
          {this.props.trip.date.toString().split("T")[0]}
        </Card>
      </Col>
    );
  }
}

export default TravelCard;
