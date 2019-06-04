import React, { Component } from 'react'
import './index.css';
import data from './data.js';
import { Link } from "react-router-dom";

class Goods extends Component {
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
				<h1>我是商品组件</h1>
				<ul>
					{
						data.newsList.map(function(v, k){
							return (<li key={k}><Link to={`/goodsdetail?id=${v.id}`}>{v.title}</Link></li>)
						})
					}
				</ul>
			</div>
		)
	}
	
} 
export default Goods