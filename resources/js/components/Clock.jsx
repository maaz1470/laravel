import React from 'react';
import Button from './Button';
class Clock extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			locale: 'bn-BD'
		}
	}

	componentDidMount(){
		setInterval(()=> this.tik(), 1000)
	}
	tik(){
		this.clockTimer = this.setState({
					date: new Date()
				})
	}
	componentWillUnmound(){
		clearInterval(this.clockTimer)
	}

	something = (locale) => {

		this.setState({
			locale,
		})
	}

	render(){
		console.log('clock component update')
		let {date,locale} = this.state;
		let button;
		if(locale === 'bn-BD'){
			button = (
				<Button change={this.something} locale="en-US" />
			)
		}else{
			button = (
				<Button change={this.something} locale="bn-BD" />
			)
		}
		return (
			<>
				<h1 className="heading">
					<span className="text">{date.toLocaleTimeString(locale)}</span>
				</h1>
				{button}

			</>
		)
	}
}

export default Clock;
