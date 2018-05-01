import React from 'react';
import SearchComponent from './searchField/search.jsx';
import './images/logo.png';
import './header.css';

class ReactComponent extends React.Component {
  render() {
    return (
      <div>
        <img src='./app/header/images/logo.png' />
        <SearchComponent />
      </div>
    );
  }
}

export default ReactComponent;
