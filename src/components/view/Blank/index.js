import React, { Component } from 'react'
import './index.css';

class Blank extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			id: ''
		}
	}
	componentDidMount(){
		console.log(this.props.match.params.id)
		this.setState({
			id: this.props.match.params.id
		})
	}
	render(){
		return (
			<div className="gr">
				<h1>Blank组件id为{this.state.id}</h1>
			</div>
		)
	}
	
} 
export default Blank