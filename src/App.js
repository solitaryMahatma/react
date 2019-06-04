import React, { Component } from 'react'
import logo from './assets/images/timg.jpg';
import './assets/css/App.css';
//import Home from './components/view/home';
//import News from './components/view/news';
//import Myform from './components/view/Myform';
import Blank from './components/view/Blank';
import GoodsDetail from './components/view/GoodsDetail';
import Input from './components/Input';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from './route'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : "小黑"
		}
		
	}
	upUserName = (data) => {
	    this.setState({
	        userName: data //把父组件中的parentText替换为子组件传递的值
	    },() =>{
	       console.log(this.state.userName);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
	    });
	 
	}	
	componentWillMount(){
		console.log(this.state)
	}
	componentDidMount(){
		console.log('componentDidMount')
		console.log(this.state)
	}
	valueChang = (value) => {
		console.log(value)
	}
	render(){
		const list = router.route
		return (
		  <Router className="App">
			<ul>
				{
				  list.map((v,k)=> (<li key={k}>
					   <Link to={v.path}>{v.title}</Link>
					  </li>))
				}
			</ul>
			{
				list.map((v,k)=> (<Route key={k} path={v.path} exact={v.path==='/'} component={v.component}/>))
			}
			<Route path='/blank/:id' component={Blank}/>
			<Route path='/goodsdetail' component={GoodsDetail}/>
			{/*<Input value='小白'  onChange={this.valueChang}/>*/}
			{/* <Home userName={this.state.userName} onchange={this.upUserName} ></Home>
			<News></News>
			<Myform></Myform> */}
		  </Router>
		);
	}
  
}

export default App;
