import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactCreateElement from './components/header.js';
import ReactComponent from './components/body.js';
import FunctionalComponents from './components/footer.js';
import ReactPureComponent from './components/legalFooter.js';
import './components/methods.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactCreateElement />
        <ReactComponent />
        <FunctionalComponents />
        <ReactPureComponent />
      </div>
    );
  }
}

export default App;