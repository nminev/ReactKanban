import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { Component } from "react";
import ListWrapper from './ListWrapper'
import "./App.css";
import { hot } from "react-hot-loader";


class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            Lists:Array().fill(null),
        }
    }
    AddingFunction(){
        var tempArray = this.state.Lists.slice();    
        tempArray.push(<ListWrapper/>);   
        this.setState({Lists:tempArray})
     }
    render() {
      return <div className={"board"}>
      <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href="#features">Features</Nav.Link>
           <Nav.Link href="#pricing">Pricing</Nav.Link>
         </Nav>
       </Navbar>

      {this.state.Lists}
      <button onClick={() => this.AddingFunction()}>add List</button>
      </div>;
    }
  }

export default hot(module)(Board);
