import React , { Component , PropTypes } from 'react'
export default class Gallery extends Component {
	componentWillMount()
	{
		var script = document.createElement( "script" );
		script.src = "https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=72157673024420594&sort=0&by=album&theme=default&scale=fit&skin=default&id=5837e35394fdb";
		script.async = true;
		document.body.appendChild( script );
	}

	render()
	{
		return <div id="flickrembed"></div>
	}
}
