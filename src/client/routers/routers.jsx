import React from 'react'
import { Provider } from "react-redux";
import  rootReducer from '../reducers';
import store from '../store/store';
import {
    Router,
    Route
} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'


import ArticlesListContianer from '../components/pages/ArticlesList'


const preloadedState = window.__PRELOADED_STATE__


delete window.__PRELOADED_STATE__

export const storage = store()(rootReducer,preloadedState);
export default class Application extends React.Component {
    render () {
        return (
            <Provider store={ storage } >
                <Router history={createBrowserHistory()}>
                <div >
                    <Route path="/"><Route path="/" component={ArticlesListContianer} />
                    </Route>
                </div>
                </Router>
            </Provider>
        )
    }
}