import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './index.css';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}
	valueChange = (e) => {
		this.setState({
			value: e.target.value
		})
		this.props.onChange(e.target.value) // 通知父组件值改变
	}
	render(){
		
		return (
			<div className="gr">
				<input type={this.props.type} id="root" value={this.state.value} placeholder={this.props.placeholder} onChange={this.valueChange} />
			</div>
		)
	}
	
} 
Input.defaultProps = {
	type: "text",
	placeholder: "请输入..."
}
Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string
}
export default Input