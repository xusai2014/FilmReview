import React from 'react';
import ReactDom from 'react-dom';
import  RouterAll from './routers';
import { Router,} from 'react-router';
import { Provider } from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory'
import  rootReducer from './reducers';
import store from './store';
import '../../public/scss/main';

const mountApp = document.getElementById('root');
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__
const storage = store()(rootReducer,preloadedState);

ReactDom.render(
  <Provider store={ storage } >
    <Router history={createBrowserHistory()}>
    <RouterAll />
    </Router>
  </Provider>,
    mountApp
);

