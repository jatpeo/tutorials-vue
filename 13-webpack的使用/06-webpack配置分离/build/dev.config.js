const webpackMerge = require('webpack-merge');//引入webpack合并
const baseConfig  =require('./base.config.js');//引入baseConfig文件
module.exports = webpackMerge.merge(baseConfig,{
	/**
	 * 其它配置 已经在base.config.js 
	 */
	devServer:{  //浏览器自动刷新显示我们修改后的内容，通过webpack-dev-server插件进行本地服务化,配置运行脚本package.json中
		contentBase:'./dist', //服务的文件夹
		inline:true   //页面实时刷新
	}
	
});