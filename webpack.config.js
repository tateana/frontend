const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'redux'], 
    main: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: 'vendor',
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  module: {
	rules : [
			{
				test : /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader : 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, //kind of style-loader
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        test : /\.cssold$/,
        loader:"css-loader"
      }
    ],
  },
  stats: {
    warnings:false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HTMLWebpackPlugin({
      template: 'template.html',
      filename: path.resolve(__dirname, 'build/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/'
  }
};
