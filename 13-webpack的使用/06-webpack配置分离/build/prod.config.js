const uglifyJsPlugin= require('uglifyjs-webpack-plugin');//第三方插件 压缩js
const webpackMerge = require('webpack-merge');//引入webpack合并
const baseConfig  =require('./base.config.js');//引入baseConfig文件

module.exports = webpackMerge.merge(baseConfig,{
	/**
	 * 	其它配置在base.config.js 这里只配置prod配置
	 */
	plugins:[
		new uglifyJsPlugin()   //进行js丑化压缩
	]
});

