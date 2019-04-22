import React, { Component } from "react";
import NoteWrapper from './NoteWrapper.js'
import "./App.css";
import { hot } from "react-hot-loader";



class ListHeader extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <h4>List Header</h4>
      <button onClick={() => this.props.ChangeShowPopup()}> press me </button>
    </div>);
  }
}

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
      <ListHeader  ChangeShowPopup={() => this.ChangeShowPopup()} /> 
      {this.state.showPopup ? 
          <Popup
            text='Close Me'
            AddingNote={() => this.AddingNote()}
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
          <button onClick={this.props.AddingNote}>close me</button>
          </div>
        </div>
      );
    }
}

  export default hot(module)(ListWrapper);
