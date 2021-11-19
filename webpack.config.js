// webpack.config.js webpack的配置文件
// 作用：指示webpack做了那些事(當運行webpack指令時，會加載裡面的配置)
// 所有構建工具都是基於nodejs平台運行的-模塊化點認採用commonjs

// resolve用來拼接絕對路徑的方法
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        // 處理less資源
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        // 處理css資源
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        // 處理圖片資源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 關閉es6模塊
          esModule: false
        }
      },
      {
        // 處理HTML中的img資源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 處理其資源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options:{
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  stats: { children: false },
  mode: 'development',
  // mode: 'production'
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }

}