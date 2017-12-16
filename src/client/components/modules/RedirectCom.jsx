import React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class RedirectCom extends React.Component{
  componentWillMount(){
    if($.cookie('token')){
      this.props.history.push('login')
    }
  }
}