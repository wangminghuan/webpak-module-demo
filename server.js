var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var server = new WebpackDevServer(webpack(config), {
    contentBase: "./",
    hot: true,　　//开启热调试
    inline: true,
    historyApiFallback: true,
    compress: true,
    stats: {
        colors: true
    }
});
server.listen(3001, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('listening at localhost:3001...');
});
