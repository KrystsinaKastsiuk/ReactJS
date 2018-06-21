import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Body from './components/body';
import About from './components/about';
import Footer from './footer/footer';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import styles from './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './components/not_found/NotFound';

const App = ({
  Router, location, context, store,
}) => (
    <Provider store={store}>
      <Router location={location} context={context}>
        <div className={styles.App}>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <ErrorBoundary>
              <Body>
                <Switch>
                  <Route path="/" exact />
                  <Route path="/about/:id" component={About} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </Body>
          </ErrorBoundary>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
      </Router>
    </Provider>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
App.defaultProps = {
  location: null,
  context: null,
};

export default App;
