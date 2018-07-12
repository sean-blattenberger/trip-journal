import React from 'react';
import { Modal, Button } from 'react-materialize'
class About extends React.Component {
  render() {
    return (
      <Modal className="blue-grey darken-4 modal" header={<h3 className="red-text text-lighten-2 thin">🚞 TravelJournal 📓</h3>} trigger={<Button className="blue-grey darken-4 light-blue-text ">About Travel Journal</Button>}>
        <p className="white-text thin">TravelJournal is simple CRUD app that allows users to keep record of their travels. TravelJournal was built using HTML, CSS3, Reactjs, React-Materialize, Styled-Components, Nodejs, Express, Postgres, and Knex</p>
      </Modal>
    )
  }
}

export default About;