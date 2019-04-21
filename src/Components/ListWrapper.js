import React, { Component } from "react";
import NoteWrapper from './NoteWrapper.js'
import "./App.css";
import { hot } from "react-hot-loader";


function ListHeader(props){
    return <div><h4>List Name Here</h4></div>
}

class ListWrapper extends Component{ 
    render(){
      return  <div className={"list"} style={{ borderColor:'blue' }}> <ListHeader/ > <NoteWrapper /></div>
    }
  }

  export default hot(module)(ListWrapper);
