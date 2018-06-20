const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          {
            loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]',
            },
          }
        ],
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 25000,
      //     },
      //   },
      // },
      // {
      //   test: /\.(jpg|png)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[path][name].[ext]"
      //     },
      //   },
      // }
    ],
  },
});
