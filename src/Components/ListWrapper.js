import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
// import NoteWrapper from "./NoteWrapper.js";
import "./App.css";

class ListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Notes: Array().fill(null),
      showPopup: true
    };
  }

  AddingNote(title, description) {
    let tempArray = this.state.Notes.slice();
    tempArray.push(
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
    this.setState({
      Notes: tempArray,
      showPopup: !this.state.showPopup
    });
  }

  ChangeShowPopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className={"list"}>
        <Button onClick={() => this.ChangeShowPopup()}> press me </Button>

        {this.state.showPopup ? (
          <Popup  AddingNote={this.AddingNote.bind(this)} />
        ) : null}

        {this.state.Notes}
      </div>
    );
  }
}

class Popup extends Component {
  constructor(props) {
    super(props);
    this.cardTitle = "Empty title";
    this.cardDescription = "Empty title";

    //function bindings
    this.handleCardTitle = this.handleCardTitle.bind(this);
    this.handleCardDescription = this.handleCardDescription .bind(this);
  }
  handleCardTitle(event) {
    this.cardTitle = event.target.value;
  }
  handleCardDescription(event) {
    this.cardDescription = event.target.value;
  }
  render() {
    return (
      <div>
        <div className="popup_inner">
            Name:
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Card Title
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={this.handleCardTitle}
                placeholder="Note Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Description
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={this.handleCardDescription}
                placeholder="Note Description"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          <Button
            variant="secondary"
            onClick={() => this.props.AddingNote(this.cardTitle,this.cardDescription)}
          >
            Add Note
          </Button>
        </div>
      </div>
    );
  }
}

export default hot(module)(ListWrapper);
