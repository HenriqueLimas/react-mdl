module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundler.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};