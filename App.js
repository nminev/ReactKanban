import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Board from './Board'
import "./App.css";





class App extends Component {
  render() {
    return <div><Board /></div>;
  }
}

export default hot(module)(App);
