import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/App/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import routineApp from './redux/reducer.js';

const store = createStore(routineApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
console.log(store);
ReactDOM.render(<Provider store={store}><Router><AppContainer /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
