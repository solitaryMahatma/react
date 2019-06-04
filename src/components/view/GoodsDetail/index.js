import React, { Component } from 'react'
import './index.css';
import url from '../../../model/url'
class GoodsDetail extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			id: ''
		}
	}
	componentDidMount(){
		//console.log(url.get(this.props.location.search))
		this.setState({
			id: url.get(this.props.location.search).id
		})
	}
	render(){
		return (
			<div className="gr">
				<h1>GoodsDetail组件id为{this.state.id}</h1>
			</div>
		)
	}
	
} 
export default GoodsDetail