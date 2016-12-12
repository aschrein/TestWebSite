import React , { Component , PropTypes } from 'react'
import './style.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export class Notify extends Component {
	state =
	{
		style: {
			top: -100
		} ,
		msg: ""
	};
	size = 100.0;
	inc = 0;
	phaze = 0.0;
	speed = 0.05;
	anim = ( msg , succ ) =>
	{
		if( msg )
		{
			this.setState( { msg: msg } );
		}
		if( succ != null )
		{
			this.setState( { succ: succ } );
		}
		if( this.inc == 1 )
		{
			if( this.phaze < 4.0 )
			{
				this.phaze += this.speed;
				this.setState( {
					style: {
						top: this.size * ( -2.0 * Math.exp( -this.phaze * 2 ) )
					}
				} );
				setTimeout( () => this.anim() , 20 );
			} else
			{
				this.inc = -1;
				setTimeout( () => this.anim() , 20 );
			}
		} else if( this.inc == -1 )
		{
			if( this.phaze > 0.0 )
			{
				this.phaze -= this.speed * 4;
				this.setState( {
					style: {
						top: this.size * ( -2.0 * Math.exp( -this.phaze ) )
					}
				} );
				setTimeout( () => this.anim() , 20 );
			} else
			{
				this.setState( {
					style: {
						top: -100
					}
				} );
				this.inc = 0;
			}
		} else
		{
			this.inc = 1;
			this.phaze = 0.0;
			setTimeout( () => this.anim() , 20 );
		}
	};

	render()
	{
		window.notifyPopup = this.anim;
		var cl = "";
		if( this.state.succ )
		{
			cl = "success";
		} else
		{
			cl = "fail";
		}
		return <div id="notify" style={this.state.style} className={cl}>
			<div>
				{this.state.msg}
			</div>
		</div>
	}
}
export class ContactForm extends Component {
	state =
	{
		text: "" , name: "" , email: "" , phone: ""
	};

	render()
	{
		var p = this.state;
		var msg = "вы забыли заполнить поле обратной связи или сообщение";
		var btn = "btn btn-danger";
		var success = false;
		if(
			( p.name && p.name != "" )
			&& ( p.text && p.text != "" )
			&& ( p.email && p.email != "" || p.phone && p.phone != "" )
		)
		{
			msg = "мы получили ваше сообщение и вскоре вам ответим";
			btn = "btn btn-success";
			success = true;
		}
		return <div className="callback">
			<h3 className="modal-title">Задайте вопрос</h3>
			<h4 className="modal-title">введите свои контакты</h4>
			<h4 className="modal-title">и мы вам ответим</h4>
			<form className="callback_form">
				<div className="row">
					<img className="elem" src="svg/user-1.svg"/>
					<input className="elem" id="email" type="text" name="name"
						   value={ this.state.name }
						   onChange={(e)=>this.setState( {name: e.target.value })}
						   placeholder="Имя"/>
				</div>
				<div className="row">
					<img className="elem" src="svg/message-1.svg"/>
					<input id="email" type="text" className="elem" name="email"
						   value={ this.state.email }
						   onChange={(e)=>this.setState( {email: e.target.value })}
						   placeholder="Email"/>
				</div>
				<div>
					или
				</div>
				<div className="row">
					<img className="elem" src="svg/phone-call.svg"/>
					<input id="telnumber" type="text" className="elem" name="phone"
						   value={ this.state.phone }
						   onChange={(e)=>this.setState( {phone: e.target.value })}
						   placeholder="номер телефона"/>
				</div>
					<textarea width="500px" name="InputMessage" id="text"
							  required=""
							  value={ this.state.text }
							  onChange={(e)=>this.setState( {text: e.target.value })}
					/>
				<button type="button"
						className="accept row"
						data-toggle="modal"
						onClick={ () =>
									{
										if( success )
										{
											fetch( 'api/msg.php?text=' + this.state.text + '&name=' + this.state.name + '&email=' + this.state.email + '&phone=' + this.state.phone );
											this.setState(
											{
												text: "" , name: "" , email: "" , phone: ""
											}
											);
											window.notifyPopup( "Ваше сообщение принято" , true );
										} else
										{
											window.notifyPopup( "Вы забыли заполнить поле обратной связи или сообщение" , false );
										}
									} }
				>
					<img className="elem" src="svg/mail.svg"/>
					<div className="elem">
						Отправить
					</div>
				</button>
			</form>
		</div>
	}
}
