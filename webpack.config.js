var path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    library: 'react-meteor-data-decorator',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, options: { plugins: ['transform-decorators-legacy'] } }
    ]
  }
};