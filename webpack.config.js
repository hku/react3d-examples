 const webpack = require('webpack');
 
 module.exports = {
       entry: {
          test: ['./src/js/test.jsx'],
          vendor: ["react", "react-dom", "three"],
        },
        output: {path: './dist/', filename: '[name].js'},
        module: {
          loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          }, {
            test: /\.less$/, 
            exclude: /node_modules/,
            loader: "style!css!less"
          }, {
            test: /\.css$/, 
            exclude: /node_modules/,
            loader: "style!css"
          }]
        },
        plugins: [
          new webpack.optimize.CommonsChunkPlugin({
              name: "vendor",
              filename: "vendor.js",
              minChunks: Infinity
          }),
          // new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production") }}),
          // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
        ]
 };