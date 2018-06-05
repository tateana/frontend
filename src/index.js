//import { Router, Route, browserHistory } from 'react-router'
//import { syncHistoryWithStore } from 'react-router-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from './containers/App'
//import configure from './store'

//const store = configure()
//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('container')
);