import React, { Component } from 'react'
import './index.css';

class Myform extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			value: '56',
			isShow: false
		}
	}
	changeValue = (e) => {
		this.setState({
			value: e.target.value,
			isShow: true
		})
	}
	render(){
		let measage;
		if(this.state.isShow){
			measage = (<h1>Myform组件</h1>)
		}else{
			measage = ''
		}
		return (
			<div className="gr">
				{measage}
				<p>双向数据绑定</p>
				<input type="text" value={this.state.value} onChange={this.changeValue}/>
				{this.state.value}
			</div>
		)
	}
	
} 
export default Myform