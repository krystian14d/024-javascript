/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts')
    // publicPath: 'assets/scripts/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname)
    },
    compress: true,
    port: 8080
  },
  devtool: 'cheap-source-map',
  plugins: [
    new cleanPlugin.CleanWebpackPlugin()
  ]
};
