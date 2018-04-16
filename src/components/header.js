import React from 'react';
import './methods.css';

class ReactCreateElement extends React.Component {
    render() {
      return (
        React.createElement('div', { class: 'logo' }, React.createElement('p', null, 'Netflixroulette'))
      );
    }
  }
  
  export default ReactCreateElement;