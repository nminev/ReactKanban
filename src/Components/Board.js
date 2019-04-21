import React, { Component } from "react";
import ListWrapper from './ListWrapper'
import "./App.css";
import { hot } from "react-hot-loader";


class Board extends Component{
    render() {
      return <div className={"board"} style={{ borderColor:'red' }}>
      <ListWrapper /><ListWrapper /><ListWrapper /><ListWrapper />
      </div>;
    }
  }

export default hot(module)(Board);
