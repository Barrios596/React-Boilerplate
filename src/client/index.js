import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import ReduxPromise from 'redux-promise';

const store = createStore(
    reducers,
    applyMiddleware(logger,ReduxPromise)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);