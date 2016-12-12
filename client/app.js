import { render } from 'react-dom';
import React , { Component , PropTypes } from 'react'
//import './style.css'
import App from './src/components/App/App.js'
/*
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
*/
render(
	<App/> ,
	document.getElementById( 'root' )
);
