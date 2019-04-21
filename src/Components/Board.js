import React, { Component } from "react";
import ListWrapper from './ListWrapper'
import "./App.css";
import { hot } from "react-hot-loader";
import { throws } from "assert";


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
      return <div className={"board"} style={{ borderColor:'red' }}>
      {this.state.Lists}
      <button onClick={() => this.AddingFunction()}>add List</button>
      </div>;
    }
  }

export default hot(module)(Board);
