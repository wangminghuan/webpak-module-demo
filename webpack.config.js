var webpack=require('webpack');
var path=require("path");
//var glob = require('glob');
//node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则的文件。

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var config = process.env.NODE_ENV === 'production' ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js');

config.entry=[ //利用中间件实现热更新，reload=true配置如果热更新失败，强制刷新页面
     'webpack/hot/dev-server',
     'webpack-dev-server/client?http://localhost:3001',
	 APP_PATH+"/index.js"
	];

config.output={
		path: BUILD_PATH,
	    publicPath: '/',
	    filename: 'bundle.js'
	};

module.exports=config;