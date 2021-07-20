const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [

    './client/reduxstagram',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'",
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  mode: 'production',
  module: {
    rules: [
    // js
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'client'),
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
};
