import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppRouter from './Routes/AppRouter'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
