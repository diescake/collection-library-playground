const webpack = require('webpack')
const path = require('path')

const DotEnv = require('dotenv-webpack')
const { param, common } = require('./webpack.common.js')

const extConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    https: false,
    host: '0.0.0.0',
    port: 8080,
    watchContentBase: false,
    contentBase: param.distPath,
    historyApiFallback: true,
  },
}

const extPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new DotEnv({
    path: path.resolve(__dirname, `${param.dotEnvPath}/development.env`),
    safe: false,
  }),
]

module.exports = {
  ...common,
  ...extConfig,
  plugins: [...common.plugins, ...extPlugins],
}
