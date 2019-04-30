import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Popup from "reactjs-popup";

// import NoteWrapper from "./NoteWrapper.js";
// import "./App.css";

class ListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards: Array().fill(null),
      showPopup: false
    };
  }

  AddingCardFunction(title, description) {
    let tempArray = this.state.Cards.slice();
    tempArray.push(
      <Card className={"card"}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
    this.setState({
      Cards: tempArray,
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
          <Popup trigger={<Button> press me </Button>} modal={true} position="right center">
          <AddCardForm  AddingCardFunction={this.AddingCardFunction.bind(this)} />
          </Popup>

        {this.state.Cards}
      </div>
    );
  }
}

class AddCardForm extends Component {
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
            Name:
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Card Title
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={this.handleCardTitle}
                placeholder="Card Name"
              />
            </InputGroup>

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Description
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={this.handleCardDescription}
                placeholder="Card Description"
              />
            </InputGroup>
          <Button
            variant="secondary"
            onClick={() => this.props.AddingCardFunction(this.cardTitle,this.cardDescription)}
          >
            Add Card
          </Button>
        </div>
    );
  }
}

export default hot(module)(ListWrapper);
