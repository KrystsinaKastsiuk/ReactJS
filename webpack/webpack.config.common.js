const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'img/', // где будут храниться
          publicPath: '/img/' // чтобы при переходи страницы путь к картинке не менялся
        }
      }
    ],
  },

  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
  ],
};
