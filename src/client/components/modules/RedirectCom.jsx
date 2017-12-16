import React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class RedirectCom extends React.Component{
  componentWillMount(){
    if(typeof $ !== 'undefined' && !$.cookie('token')){
      this.props.history.push('login')
    }
  }
  render(){

    return null;
  }
}