// webpack.config.js webpack的配置文件
// 作用：指示webpack做了那些事(當運行webpack指令時，會加載裡面的配置)
// 所有構建工具都是基於nodejs平台運行的-模塊化點認採用commonjs

// resolve用來拼接絕對路徑的方法
const { resolve } = require('path');

module.exports = {
  // webpack配置
  // 入口起點
  entry: './src/index.js',
  // 輸出
  output: {
    // 輸出文件名
    filename: 'built.js',
    // 輪出路徑
    // __dirname nodejs的變量，代表當前文件的目錄絕對路徑
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
      // 詳細loader配置
      // 不同文件必須配置不同loader處理
      {
        // 匹配那些文件
        test: /\.css$/,
        // 使用那些loader進行處理
        use: [
          // use數組中loader執行順序：從右到左，從下到上，依次執行
          // 建立style標籤，將JS中的樣式資源插入進行，加入到head中生效
          'style-loader',
          // 將css文件變成commonjs模組加載js中，裡面內容是樣式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 
          'css-loader',
          // 將less文件編譯成css文件
          // 需要下載less-loader和less
          'less-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 詳細plugins的配置
  ],
  // 模式
  mode: 'development',
  // mode: 'production'

}