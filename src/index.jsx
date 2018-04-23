import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as AppContainer from 'react-hot-loader';
import './index.css';
import { App } from './App';
import * as App  from './App';

ReactDOM.render (
        <AppContainer>
            <App />,
        </AppContainer>, 
        document.getElementById('root')
    )

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
