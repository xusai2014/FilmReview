import React from 'react'
import RedirectCom from '../components/modules/RedirectCom';
import {
    Route,
  Switch
} from 'react-router';

import ArticlesListContianer from '../components/pages/ArticlesList';
import Login from '../components/pages/Login';


export default ()=>(
  <div>
    <RedirectCom />
    <Switch >
      <Route exact={true} path="/" component={ArticlesListContianer} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
)