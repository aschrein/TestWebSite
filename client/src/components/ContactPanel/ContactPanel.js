import React , { Component , PropTypes } from 'react'
import { ContactForm } from "../ContactForm/ContactForm"
import './style.scss'
class Sheet extends Component {
	state =
	{
		pin_style: {
			top: 0 ,
			left: 0
		}
	};
	oldrect = {top:0,left:0}
	placePins = () =>
	{
		console.log("resize")
		if( !this.elem_ref )
		{
			return;
		}
		var rect = this.elem_ref.getBoundingClientRect();
		if( this.oldrect.left != rect.left ||
		this.oldrect.top != rect.top )
		{
			this.setState( {
				pin_style: {
					top: -5,//rect.top - 5 ,
					left:  rect.width - 32
				}
			} );
			this.oldrect.left = rect.left;
			this.oldrect.top = rect.top;
		}
	}

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
		/*if( this.elem_ref )
		{
			var rect = this.elem_ref.getBoundingClientRect();
				this.state.pin_style = {
					top: rect.top - 5 ,
					left: rect.right - 32
				};
		}*/
		return <div className={this.props.class ? "col " + this.props.class : "col" }
					ref={(input) => { this.elem_ref = input; }}>
			<img className="pin" src="svg/pin.svg" style={this.state.pin_style}/>
			{this.props.children}
		</div>
	}
}
export default class ContactPanel extends Component {
	render()
	{
		return <div className="contacts">
			<Sheet>
				<div dangerouslySetInnerHTML={{__html:require( './brief.jade' )()}}>
				</div>
			</Sheet>
			<Sheet>
				<div dangerouslySetInnerHTML={{__html:require( './contacts.jade' )()}}>
				</div>
			</Sheet>
			<Sheet>
				<div dangerouslySetInnerHTML={{__html:require( './place.jade' )()}}>
				</div>
			</Sheet>
			<Sheet class="col_r">
				<ContactForm/>
			</Sheet>

		</div>
	}
}
