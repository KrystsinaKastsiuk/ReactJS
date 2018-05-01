import React, { Component } from 'react';
import Header from './header/header.jsx';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;