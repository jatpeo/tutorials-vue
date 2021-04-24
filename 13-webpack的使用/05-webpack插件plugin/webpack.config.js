const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入插件 第三方 将index.html打入dist中
const uglifyJsPlugin= require('uglifyjs-webpack-plugin');//第三方插件 压缩js
module.exports = {
	entry:'./src/main.js', //入口
	output:{
		path:path.resolve('dist'), //绝对路径，动态获取要导入node（path）
		filename:'bundle.js',
		//publicPath: 'dist/'   //webpack打包将图片等打在dist文件夹中，这样写目的是告诉去dist文件夹去找资源，一版会在url路径中拼接dist/
	}, //出口
	module:{
		 rules: [
		      { test: /\.css$/,
			    //css-loader 只负责将css加载 ,正则表达式
			    use: ['style-loader','css-loader'],  //使用多个loader,从右向左
			  },
			  {
				test: /\.less$/,
				use:['style-loader','css-loader','less-loader'] 
			  },
			  {
				test: /\.(png|jpg|gif|jpeg)$/,
				use:[
					{
						loader: 'url-loader',
						options: {
							limit: 13000  ,//当加载图片小于limit会将图片编译成base64;加载图片大于limit需要使用file-loade模块进行加载
							name:'img/[name].[hash:8].[ext]' //文件要打包到的文件夹,获取图片原来的名字，放在该位置,8为hash，使用图片原来的扩展名
					    }
					}
				]
			  },
			  {
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['es2015']    //将es6转为es5
				  }
				}
			  },
			  {
				  test:/\.vue$/,
				  use:['vue-loader']
			  }
			  
		    ],
	},
	resolve:{
		extensions:['.js','css','.vue'], //可以省略扩展名
		alias:{
			'vue$':'vue/dist/vue.esm.js'
		}
	},
	plugins:[
		new webpack.BannerPlugin('最终版权归小贾'), //dundle.js添加版权信息
		new HtmlWebpackPlugin({
			template:'index.html'
		}),  //将index.html打包入dist文件夹
		new uglifyJsPlugin()   //进行js丑化压缩
	],
	devServer:{  //浏览器自动刷新显示我们修改后的内容，通过webpack-dev-server插件进行本地服务化,配置运行脚本package.json中
		contentBase:'./dist', //服务的文件夹
		inline:true   //页面实时刷新
	}
}
