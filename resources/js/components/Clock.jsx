import React from 'react'

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

	something(){
		this.setState({
			locale: 'en-US',
		})
	}

	render(){
		let {date,locale} = this.state;
		return (
			<>
				<h1 className="heading">
					<span className="text">{date.toLocaleTimeString(locale)}</span>
				</h1>

				<button type="button" onClick={this.something.bind(this)}>Click Me</button>

				<h1>Hello World</h1>
				<h2>This is Hello World 2</h2>

				<h1>This is sojib khan</h1>
			</>
		)
	}
}

export default Clock;
