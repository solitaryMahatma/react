import url from 'url'

export default {
	get: (path)=> url.parse(path, true).query,
	set: ()=> '尚未需求'
}