import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import './Styles/App.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
