import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//  import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
const App = require('./App').default

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
 //registerServiceWorker();