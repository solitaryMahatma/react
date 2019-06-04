import React, { Component } from 'react'
import './index.css';

class Home extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			name: 'xiaobai'
		}
	}
	change = () => {
        
    }
	render(){
		
		return (
			<div className="gr">
				<h1>我是home组件</h1>
				<p>{this.props.userName}</p>
				<p>{this.props.userName}</p>
				<button onClick={this.change}>
					click me
				</button>
			</div>
		)
	}
	
} 
export default Home