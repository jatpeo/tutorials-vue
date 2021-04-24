const path = require('path')
module.exports = {
	entry:'./src/main.js', //入口
	output:{
		path:path.resolve('dist'), //绝对路径，动态获取要导入node（path）
		filename:'bundle.js'
	} //出口
};