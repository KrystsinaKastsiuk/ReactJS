import React, { Component } from 'react';
import Header from './header/header';
import Body from './components/body/body';
import About from './components/about/about';
import Footer from './footer/footer';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/not_found/NotFound';

const App = () => (
  <div className="App">
    <Router>
      <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
          <Body>
            <Switch>
              <Route path="/" exact />
              <Route path="/about/:name" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Body>
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      </div>
    </Router>
  </div>
);

export default App;
