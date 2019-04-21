import React, { Component } from "react";
import NoteWrapper from './NoteWrapper.js'
import "./App.css";
import { hot } from "react-hot-loader";


class ListWrapper extends Component{ 
    render(){
      return  <div className={"list"} style={{ borderColor:'blue' }}> this is List <NoteWrapper /></div>
    }
  }

  export default hot(module)(ListWrapper);
