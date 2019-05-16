import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import AddCardForm from "./AddCardForm"

// import NoteWrapper from "./NoteWrapper.js";
import "./App.css";

class ListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards: Array().fill(null),
      openPopup: false,
      title: "Edit List"
    };
    this.showPopup = this.showPopup.bind(this)
    this.hidePopup = this.hidePopup.bind(this)

  }

  showPopup() {
    if (this.state.openPopup != true) {
      this.setState({ openPopup: true })
    }
  }
  hidePopup() {
    if (this.state.openPopup != false) {
      this.setState({ openPopup: false })
    }
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
      openPopup: false
    });
  }

  handleChange(e, field) {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div className={"list"}>
        <h2 className={"listHeader"} >
          {this.state.title}
        </h2>

        <button className={"addCardBtn"} onClick={this.showPopup}> add card </button>
        <Popup open={this.state.openPopup} modal={true} onClose={this.hidePopup} position="right center">
          <AddCardForm AddingCardFunction={this.AddingCardFunction.bind(this)} />
        </Popup>
        {this.state.Cards}
      </div>
    );
  }
}

export default hot(module)(ListWrapper);
