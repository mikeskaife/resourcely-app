import webpack from 'webpack';
import path from 'path';

/* eslint-disable no-undef */

export default {
  // development = larger but quicker, production = smaller but no sourcemaps
  'mode': 'development',
  'devtool': 'inline-source-map',
  'entry': [
    'eventsource-polyfill', // hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // reloads the page if hot module reloading fails
    path.resolve(__dirname, 'src/index.jsx')
  ],
  'target': 'web',
  'output': {
    'path': `${__dirname}/dist`,
    'publicPath': '/',
    'filename': 'bundle.js'
  },
  'devServer': {
    'contentBase': path.resolve(__dirname, 'src')
  },
  'plugins': [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      'debug': true
    })
  ],
  'module': {
    'rules': [
      {
        'test': /\.jsx?/,
        'include': path.join(__dirname, 'src'),
        'loaders': ['babel-loader']
      },
      { 'test': /(\.css)$/, 'loaders': ['style-loader', 'css-loader'] },
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
