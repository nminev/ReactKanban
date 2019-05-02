import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import AddCardForm from "./AddCardForm"

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

export default hot(module)(ListWrapper);
