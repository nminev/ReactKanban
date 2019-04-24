import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";


class NoteWrapper extends Component{
    render(){
      return <div style={{ borderColor:'yellow' }} >{this.props.text}</div>
    }
  }
  
  export default hot(module)(NoteWrapper);
