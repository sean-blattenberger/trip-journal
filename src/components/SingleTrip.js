import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Icon,
  Input,
  Collection,
  CollectionItem
} from "react-materialize";
import Header from "./Navbar/Header";
const baseUrl = `https://warm-atoll-11937.herokuapp.com/api/`;
class SingleTrip extends React.Component {
  state = {
    trip: {
      id: "",
      city: "",
      state: "",
      notes: [
        {
          id: "",
          name: "",
          type: "",
          note: ""
        }
      ]
    },
    updateForm: false,
    noteForm: false,
    newNote: {
      id: "",
      name: "",
      type: "",
      note: ""
    }
  };
  componentDidMount() {
    this.getSingleTrip();
  }
  toggleForm = () => {
    let formStatus = this.state.updateForm ? false : true;
    this.setState({ updateForm: formStatus });
  };
  loadNoteForm = () => {
    this.setState({ noteForm: true })
  }
  getSingleTrip = () => {
    let url = window.location.href.split("/");
    fetch(`${baseUrl}trips/${url[url.length - 1]}`)
      .then(res => res.json())
      .then(trip => {
        this.setState({ trip });
      });
  };
  deleteTrip = () => {
    fetch(`${baseUrl}${this.state.trip.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        console.log("Success:", response);
        window.location =
          "http://localhost:3000/" || "https://warm-atoll-11937.herokuapp.com/";
      });
  };
  updateTrip = event => {
    event.preventDefault();
    console.log(this.state.trip);
    fetch(`${baseUrl}${this.state.trip.id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.trip),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        this.setState({ updateForm: false });
      });
  };
  handleChange = event => {
    let newTrip = { ...this.state.trip };
    newTrip[event.target.name] = event.target.value;
    this.setState({ trip: newTrip });
  };
  deleteNote = (id) => {
    return fetch(`${baseUrl}notes/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        console.log("Success:", response);
        this.getSingleTrip();
      });
  }
  handleNote = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  postNote = (e) => {
    e.preventDefault();
    let note = {
      trip_id: this.state.trip.id,
      type: this.state.newNote.type,
      name: this.state.newNote.name,
      note: this.state.newNote.note
    };
    return fetch("https://warm-atoll-11937.herokuapp.com/api/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(note)
    })
      .then(res => res.json())
      .then(data => {
        console.log("success");
      });
  }
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
                  defaultValue={this.state.trip.notes.map(note => " " + note.note)}
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
                className="blue-grey darken-4 white-text"
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
                </article>
                <Collection className="trip-notes">
                  {this.state.trip.notes.map(singleNote => {
                    return (
                      <CollectionItem className="blue-grey darken-4">
                        <div className="light-blue-text thin note-header">{`${
                          singleNote.type
                        }:  ${singleNote.name}`}</div>
                        <p className="white-text thin">{singleNote.note}</p>
                        <div className="right" onClick={() => this.deleteNote(singleNote.id)} style={{"margin-top": "-40px"}}>
                          <Icon right>delete</Icon>
                        </div>
                      </CollectionItem>
                    );
                  })}
                  </Collection>
                  {
                    this.state.noteForm
                    ?
                    <Row>
                        <Input name="type" defaultValue={this.state.newNote.type} placeholder="ex. Restaurant" s={6} label="Type" />
                        <Input name="name" defaultValue={this.state.newNote.name} s={6} label="Place Name" />
                        <Input s={12} defaultValue={this.state.newNote.note} name="note" label="Enter place note here" />
                        <Button floating className='red lighten-2 light-blue-text' waves='light' icon='add' onClick={this.postNote}/>
                    </Row>
                    :
                    <Button floating onClick={this.loadNoteForm} className='red lighten-2 light-blue-text' waves='light' icon='add' />
                  }
              </Card>
            </Col>
          )}
        </Row>
      </React.Fragment>
    );
  }
}

export default SingleTrip;
