import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

/* eslint-disable no-undef */

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  // development = larger but quicker, production = smaller but no sourcemaps
  'mode': 'development',
  'devtool': 'source-map',
  'entry': path.resolve(__dirname, 'src/index.jsx'),
  'target': 'web',
  'output': {
    'path': `${__dirname}/dist`,
    'publicPath': '/',
    'filename': 'bundle.js'
  },
  'devServer': {
    'contentBase': path.resolve(__dirname, 'dist')
  },
  'plugins': [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new UglifyJsPlugin({
      'sourceMap': true
    })
  ],
  'module': {
    'rules': [
      {
        'test': /\.jsx?/,
        'include': path.join(__dirname, 'src'),
        'loaders': ['babel-loader']
      },
      {
        'test': /(\.css)$/,
        // 'loaders': [ExtractTextPlugin.extract('styles'), ExtractTextPlugin.extract('css')]
        'loaders': ['style-loader', 'css-loader']
      },
      { 'test': /\.eot(\?v=\d+\.\d+\.\d+)?$/, 'loader': 'file' }, // bootstrap
      { 'test': /\.(woff|woff2)$/, 'loader': 'url?prefix=font/&limit=5000' }, // bootstrap
      {
        'test': /\.ttf(\?v=\d+\.\d+\.\d+)?$/, // bootstrap
        'loader': 'url?limit=10000&mimetype=application/octet-stream' // bootstrap
      },
      {
        'test': /\.svg(\?v=\d+\.\d+\.\d+)?$/, // bootstrap
        'loader': 'url?limit=10000&mimetype=image/svg+xml' // bootstrap
      }
    ]
  }
};

/* eslint-enable no-undef */
