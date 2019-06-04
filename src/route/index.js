import Home from '../components/view/home';
import News from '../components/view/news';
import Myform from '../components/view/Myform';
import Goods from '../components/view/Goods';
import AddName from '../components/view/AddName';
export default {
 route: [
	{
		title: '首页',
		path: '/',
		component: Home
	},
	{
		title: '新闻',
		path: '/new',
		component: News
	},
	{
		title: '表单',
		path: '/form',
		component: Myform
	},
	{
		title: '商品',
		path: '/goods',
		component: Goods
	},
	{
		title: '状态管理',
		path: '/addname',
		component: AddName
	}
 ]
}