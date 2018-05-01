import React from 'react';
import './footer.css';

class ReactPureComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <p className="legalFooter">© 2018 Show Inc. and Showtime Digital Inc. All rights reserved. THE MOVIE CHANNEL and related marks are registered trademarks.</p>
      </div>
    );
  }
};

export default ReactPureComponent;

