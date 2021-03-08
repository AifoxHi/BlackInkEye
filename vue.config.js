module.exports = {
  configureWebpack: {
},
  transpileDependencies: [],
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
}