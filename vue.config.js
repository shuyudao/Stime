const CompressionPlugin  = require("compression-webpack-plugin");

module.exports = {
  publicPath:"/usr/themes/stime/",
  pages:{
    index:{
      entry:"./src/main.js",
      template:"./public/index.html",
      filename:"index.php"
    }
  },
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){
      return {
        plugins: [new CompressionPlugin({
          test:/\.js$|\.html$|\.css/,
          threshold:8000,
          deleteOriginalAssets:false
        })]
      }
    }
  }
}