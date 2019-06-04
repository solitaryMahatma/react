import React, { Component } from 'react'
import './index.css';
import PropTypes from 'prop-types'
import data from './data.js';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
class News extends Component {
	
	constructor(arg) {
		super(arg);
		this.state = {
			newsList: []
		}
	}
	change(text) {
        this.props.changeUserName(text)
    }
	componentDidMount(){
		console.log('componentDidMount')
		this.setState({
			newsList: data
		})
		//this.state.newsList =  data.newsList
		console.log(this.state)
	}
	render(){
		const {lastname,lastage} = this.props;
		console.log(this.state.newsList)
		const vm = this
		
		return (
			<div className="gr">
				<h1>我是新闻组件{lastname}{lastage}</h1>
				<ul>
					{
						data.newsList.map(function(v, k){
							return (<li key={k}><Link to={`/blank/${v.id}`}>{v.title}</Link></li>)
						})
					}
				</ul>
			</div>
		)
	}
	
} 
//export default News

export default connect(
    state => ({
        lastname:state.addName,
        lastage:state.addAge
    })
)(News)