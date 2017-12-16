import React from 'react'
import RedirectCom from '../components/modules/RedirectCom';
import {
    Route,
  Switch
} from 'react-router';

import ArticlesListContianer from '../components/pages/ArticlesList'


export default ()=>(
  <div>
    <RedirectCom />
    <Switch >
      <Route path="/" component={ArticlesListContianer} />
    </Switch>
  </div>
)