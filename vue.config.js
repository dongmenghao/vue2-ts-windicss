module.exports = {
  productionSourceMap: false, // 去除vue打包后js目录下生成的.map文件，用于加速生产环境构建
  css: {
    extract: false
  },
  devServer: {
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://api.baidu.com', // 代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        // ws: true, // proxy websockets
        // pathRewrite方法重写url
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  lintOnSave: false,
}
