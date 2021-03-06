
// const path = require('path')
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        host: 'localhost',
        // assetsSubDirectory: 'public',
        port: 8080,
        proxy: {
            '/api': {
                target: "https://download.botton.io/botton/",//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
                }
            },
        },
    }
}
