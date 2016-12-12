import ContactPanel from "../ContactPanel/ContactPanel"
import Gallery from "../Gallery/Gallery"
import NavBar from "../NavBar/NavBar"
import { Notify } from "../ContactForm/ContactForm"
import { myMap , initMap } from "../Maps/Maps"
import React , { Component , PropTypes } from 'react'
import './style.scss'
export default class App extends Component {
	state =
	{
		open: false ,
		bstyle: {
			top: 0 ,
			left: 0
		}
	};

	componentWillMount()
	{
		//initMap();
	}

	placePins = () =>
	{
		var rect = this.edge.getBoundingClientRect();
		this.setState( {
			bstyle: {
				top: - 46 ,
				left: rect.width / 2 - 150
			}
		} )
	};

	componentDidMount()
	{
		if( window.attachEvent )
		{
			window.attachEvent( 'onresize' , () => this.placePins() );
		}
		else if( window.addEventListener )
		{
			window.addEventListener( 'resize' , () => this.placePins() , true );
		}
		this.placePins();
	}

	render()
	{
		if( !this.state.open )
		{
			return <div id="page">
				<Notify/>
				<ContactPanel/>
				<div id="verbose">
				</div>
				<div id="verbose_down" ref={(ref)=>this.edge = ref}>
					<div id="bookmark" style={this.state.bstyle}>
						<button
							type="button"
							onClick={() =>
						 {
						 this.setState( { open: true } );
						 setTimeout( () =>
						 {

						 //myMap.destroy();
						 var map = document.getElementById( "map" );
						 map.className += " full";
						 initMap();
						 } , 500 );
						 }
						 }>
							Подробно
						</button >
						<img src="svg/bookmark.svg"/>
					</div>
				</div>
				

			</div>
		} else
		{
			return <div id="page">
				<Notify/>
				<ContactPanel/>
				<div id="verbose">
				</div>
				<div id="content" dangerouslySetInnerHTML={{ __html: require( './snt_desc.jade' )() }}>
				</div>
				<Gallery/>
			</div>
		}
	}
}