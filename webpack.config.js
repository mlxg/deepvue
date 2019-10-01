const path = require('path')
const extract_text_plugin = require("extract-text-webpack-plugin")
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();


module.exports = smp.wrap({
  mode   : 'development',
  entry  : {
    main: './webpackEs6/js/main.js'
  },
  output : {
    path    : path.resolve(__dirname, 'webpackEs6/dist'),
    filename: "index.js",
  },
  module : {
    rules: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        use    : {
          loader : "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.less$/,
        use : extract_text_plugin.extract({
          use     : [
            'css-loader',
            'less-loader'
          ],
          fallback: 'style-loader',
        })

      }
    ]
  },
  plugins: [
    new extract_text_plugin('main.css')
  ]
})

