import React, { Component } from 'react';
import Header from './header/header.jsx';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import ErrorBoundary from '../errorBoundary/errorBoundary.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary>
          <Body />
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;