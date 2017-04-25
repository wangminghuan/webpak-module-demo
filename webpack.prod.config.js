var webpack=require('webpack');
var path=require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//postcss-loader中autoprefixer插件
var autoprefixer = require('autoprefixer');

var config={};

//忽略下面模块，打包时将不会打入
config.externals={
    /*'react': 'React',
    'react-dom': 'ReactDOM'*/
};
config.module={
	loaders:[
       {
         test: /\.css$/,
         include: path.resolve(__dirname, './src/static/css'),
         //将入口除所有require过来的css抽离成一个文件
         loader: ExtractTextPlugin.extract({
         	fallback: "style-loader",//当css样式没有被抽取的时候可以使用该loader
      		use: "css-loader!postcss-loader"//编译解析的css文件loader
      	})
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
    
    // 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
    new ExtractTextPlugin('./index_min.css'),

    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    
    //压缩css,补全前缀
    new webpack.LoaderOptionsPlugin({
         test: /\.css$/, // optionally pass test, include and exclude, default affects all loaders               // 可以传入 test、include 和 exclude，默认会影响所有的 loader
	     minimize: true,
	     debug: false,
	     options: {        // pass stuff to the loader
	         postcss: [autoprefixer()]
	    }
   }),
   new webpack.NoEmitOnErrorsPlugin(), //允许错误不打断程序
];

module.exports=config;