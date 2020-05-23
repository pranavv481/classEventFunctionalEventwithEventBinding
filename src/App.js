import React, { Component } from 'react';
import './App.css';
import Greet from "../src/components/Greet";
import Welcome from "../src/components/Welcome"
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
class App extends Component {
  render() {
    return (
      <div className="App">

        <FunctionClick />
        <ClassClick />
        <EventBind />
      </div>
    );
  }
}

export default App;
