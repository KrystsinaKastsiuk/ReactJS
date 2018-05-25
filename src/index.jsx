import React from 'react';
import ReactDOM from 'react-dom';
import thunk, { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './app/store/reducers/todo';
import App from './app/App';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <Component />
      </App>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);
