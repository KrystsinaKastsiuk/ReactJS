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
          {/* <Route path="/meet_the_parents" component={meet_the_parents} />
          <Route path="/me_before_you" component={me_before_you} />
          <Route path="/bonnie_and_clyde" component={bonnie_and_clyde} />
          <Route path="/notebook" component={notebook} />
          <Route path="/book_thief" component={book_thief} /> */}
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
