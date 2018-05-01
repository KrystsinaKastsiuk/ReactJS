import React from 'react';
import './search.css';

class ReactComponent extends React.Component {
  render() {
    return (
    <div>
      <h1 className="searchTitle">Find your movie</h1>
      <input className="searchField" placeholder="What do you need to find?"/>
    </div>
    );
  } 
}

export default ReactComponent;
