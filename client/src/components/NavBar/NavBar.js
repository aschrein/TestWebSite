import React , { Component , PropTypes } from 'react'
import './style.scss'
export default class NavBar extends Component {
	/*state =
	{
		style:
		{
			top: 0 ,
			left: 0
		}
	};
	handleScroll()
	{
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log( scrollTop );
		this.setState(
			{
				style:
				{
					top: scrollTop ,
					position: "absolute"
				}
			}
		);
	}

	componentDidMount()
	{
		window.addEventListener( 'scroll' , () => this.handleScroll() );
	}
	 style={this.state.style}
	componentWillUnmount()
	{
		window.removeEventListener( 'scroll' , () => this.handleScroll() );
	}*/

	render()
	{
		return <div className="navbar" >
			<button>
				<img className="elem" src="svg/phone-call.svg"/>
				<div>
					позвонить
				</div>
			</button>
		</div>
	}
}
