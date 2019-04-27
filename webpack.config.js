const path = require('path');
const postcssModulesValue = require('postcss-modules-values');

module.exports = (env, options) => ({
  devtool: options.mode === 'production' ? 'cheap-source-map' : 'eval-sourcemap',

  entry: './index.html',

  output: {
    filename: 'bandle.js',
    path: path.join(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: '3000',
    open: true,
    overlay: true,
    historyApiFallback: true,
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    }]
  },
  watch: false,
});