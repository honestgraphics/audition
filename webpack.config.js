const path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const filename = 'bundle'
const entry = [
  './client/src/index.js'
]
const { NODE_ENV, WEBPACK_ENV } = process.env
const DEVELOPMENT_ENV = 'development'
const PRODUCTION_ENV = 'production'
const resolve = dir => path.resolve(__dirname, dir)
const outputPath = resolve('client/assets')
const extractTextPlugin = new ExtractTextPlugin('style.css')

const config = {
  entry,
  externals: {
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react'
  },
  output: {
    path: outputPath,
    filename,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /(\.js$)/,
        include: resolve('client/src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: { plugins: [autoprefixer()] }
            }
          ]
        })
      }, {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.(gif|jpe?g|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'client/assets/images/[name].[ext]'
          }
        }
      }, {
        test: /\.(eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'client/assets/fonts/[name].[ext]'
          }
        }
      }, {
        test: /\.(aac|flac|mkv|mp3|mp4|ogg|wma|wmv)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'client/assets/media/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Audition',
      template: 'client/assets/template.html'
    }),
    extractTextPlugin,
  ]
}

if (WEBPACK_ENV == PRODUCTION_ENV || NODE_ENV == PRODUCTION_ENV) {
  const { UglifyJsPlugin } = webpack.optimize

  config.plugins.push(new UglifyJsPlugin({ minimize: true }))
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(PRODUCTION_ENV)
    }
  }))

  config.devtool = 'source-map'
  config.output.filename += '.min.js'
} else {
  config.entry.unshift('webpack-hot-middleware/client?reload=truepath=//localhost:3000/__webpack_hmr')
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(DEVELOPMENT_ENV)
    }
  }))
  config.devtool = 'cheap-module-eval-sourcemap'
  config.output.filename += '.js'
}

module.exports = config