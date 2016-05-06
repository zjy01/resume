var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/react/index'
  ],
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'react-hot-loader!babel-loader?'+JSON.stringify({presets:['react','es2015']}),
      exclude: /node_modules/,
      include: __dirname
    },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css/,
        loader: "style!css"
      },
      {test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192'},
      //{test: /\.svg$/, loader: 'svg-loader' }
    ]
  }
};
