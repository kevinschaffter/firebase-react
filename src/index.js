import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app_root/App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

// potentially wrap everything here?

const render = _ => ReactDOM.render(<App />, rootEl);

// TO DO: maybe add a timeout?
if (module.hot) module.hot.accept(App, _ => render());

render();

serviceWorker.unregister();
