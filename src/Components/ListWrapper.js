import React, { Component } from "react";
import NoteWrapper from './NoteWrapper.js'
import "./App.css";
import { hot } from "react-hot-loader";

class ListWrapper extends Component{ 
  constructor(props){
    super(props);
    this.state={
      Notes:Array().fill(null),
      showPopup:true,
    }
  }
  AddingNote(){
    var tempArray = this.state.Notes.slice();    
    tempArray.push(<NoteWrapper/>);   
    this.setState({
      Notes:tempArray,
      showPopup:!this.state.showPopup
    })
 }
 ChangeShowPopup() 
 {
  this.setState({
    showPopup:!this.state.showPopup
  })
 }
    render(){
      return  <div className={"list"} style={{ borderColor:'blue' }}>
      <button onClick={() => this.ChangeShowPopup()}> press me </button>
      {this.state.showPopup ? 
          <Popup
            text='Close Me'
            AddingNote={() => this.AddingNote.bind(this)}
          />
          : null
      }
      {this.state.Notes}
      </div>
    }
  }

class Popup extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.AddingNote()}>close me</button>
          </div>
        </div>
      );
    }
}

  export default hot(module)(ListWrapper);
