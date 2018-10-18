import { resolve } from 'path'
import webpack from 'webpack'
import MinaEntryPlugin from '@tinajs/mina-entry-webpack-plugin'
import MinaRuntimePlugin from '@tinajs/mina-runtime-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

// 旧版本，先不升级，反正功能也没多多少
const isProduction = process.env.NODE_ENV === 'production'

const loaders = {
  script: ['babel-loader'],
  style: {
    loader: 'postcss-loader',
    options: {
      config: {
        path: resolve('./postcss.config.js')
      }
    }
  }
}

export default {
  context: resolve('src'),
  stats: {
    assets: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    colors: true
  },
  entry: './app.vue',
  output: {
    path: resolve('dist'),
    filename: '[name]',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@tinajs/mina-loader',
            options: {
              loaders
            }
          }
        ]
      },
      {
        test: /\.mina$/,
        include: /node_modules/,
        use: '@tinajs/mina-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: loaders.script
      },
      {
        test: /\.(css|wxss)$/,
        exclude: /node_modules/,
        use: loaders.style
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /\.wxs$/,
        use: {
          loader: 'relative-file-loader',
          options: {
            name: 'wxs/[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /\.wxml$/,
        use: [{
          loader: 'relative-file-loader',
          options: {
            name: 'wxml/[name].[hash:6].[ext]'
          }
        }, 'wxml-loader']
      }
    ]
  },
  resolve: {
    symlinks: true
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }),
    new MinaEntryPlugin(),
    new MinaRuntimePlugin({
      runtime: './common.js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common.js',
      minChunks: 2
    }),
    isProduction && new UglifyJsPlugin()
  ].filter(Boolean)
}
