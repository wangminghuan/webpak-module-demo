## webpack 构建项目说明

### 1 开始
安装依赖  

	npm install

开启express服务（webpack-dev-server自带），浏览器自动跳转到http://localhost:3001

    npm run start
支持热更新(css)+自动刷新(js)
### 2 构建
运行

    npm run build

自动在build目录生成压缩后的js文件和css文件。css默认补全前缀。不需要打包的文件，如JQ，请自行在`webpack.prod.config.js`中添加

### 3 项目结构
待补充

### 4 其他说明

1. 基于`webpack-dev-server`实现的自动刷新和热更新。
2. 待继续优化~
