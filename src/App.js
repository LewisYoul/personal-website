import React, { Component } from 'react';
import './App.css';
import MessageView from './messages/message-view.js';

export default class App extends React.Component {
  heads() {
    return Math.random() < 0.5
  }

  render() {
    return (
      // console.log(this.heads)
      <h1>{ this.heads() ? 'HEADS' : 'TAILS' }</h1>
    )
  }
}
