import React from 'react';
import { Row } from 'react-materialize';
import TravelCard from './TravelCard';

class TravelCards extends React.Component {
  render() {
    return (
      <Row>
        {this.props.trips.map((trip, i) => {
          return (<TravelCard key={i} trip={trip} />)
        })}
      </Row>
    );
  }
}

export default TravelCards;