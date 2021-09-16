import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app.jsx';

import './style.scss';

function main(){
  ReactDom.render(<App/>, document.getElementById("root"));
}

document.addEventListener("DOMContentLoaded", main);