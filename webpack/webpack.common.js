const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  entry: [path.join(CURRENT_WORKING_DIR, 'app/index.js')],
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    alias: {
      app: 'app'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new CopyWebpackPlugin([
      {
        from: 'public'
      }
    ])
  ]
};