import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Board from './Board.js'
import "./App.css";





class App extends Component {
  render() {
    return <div style={{ borderColor:'green' }}><Board /></div>;
  }
}

export default hot(module)(App);
