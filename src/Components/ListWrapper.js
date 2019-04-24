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
    this.NoteName=""
  }
  AddingNote(name){
    var tempArray = this.state.Notes.slice();    
    tempArray.push(<NoteWrapper text={name}/>);   
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
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
    render() {
      return (
        <div className='popup'>
           <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button onClick={this.props.AddingNote(this.state.value)}>close me</button>
        </div>
      );
    }
}

  export default hot(module)(ListWrapper);
