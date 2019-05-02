import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import React, { Component } from 'react';

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

export default hot(module)(AddCardForm);
