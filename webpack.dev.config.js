var webpack=require('webpack');
var path=require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var config={};

config.module={
	loaders:[
       	{
	         test: /\.css$/,
	         include: path.resolve(__dirname, './src/static/css'),
	         loader: "style-loader!css-loader"
       	},
	 	{
		 	 test: /\.js[x]?$/,
	         exclude: /node_modules/,
	         loader: 'babel-loader' 
    	},
    	{
	        test: /\.(png|jpg)$/,
	        exclude: /node_modules/,
	        loader: 'url-loader?limit=40000'
  		}
	]
};

config.plugins=[
	//自动打开浏览器
    /*new OpenBrowserPlugin({
    		url: 'http://localhost:3001'
		}),*/
    new webpack.NoEmitOnErrorsPlugin(), //允许错误不打断程序
    new webpack.HotModuleReplacementPlugin(),　　//webpack热替换插件  
    new webpack.NamedModulesPlugin(),// prints more readable module names in the browser console on HMR updates
]


module.exports=config