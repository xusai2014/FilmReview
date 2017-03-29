import React from 'react';
import ReactDom from 'react-dom';
import  Routers from './routers/routers'

import '../../public/scss/main';


const mountApp = document.getElementById('root');

ReactDom.render(
    <Routers />,
    mountApp
);

