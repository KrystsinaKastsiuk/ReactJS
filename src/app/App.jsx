import React, { Component } from 'react';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import './App.css';

const App = () => (
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

export default App;
