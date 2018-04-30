import React, { Component } from 'react';
import ReactCreateElement from './components/header.jsx';
import ReactComponent from './components/body.jsx';
import FunctionalComponents from './components/footer.jsx';
import ReactPureComponent from './components/legalFooter.jsx';
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