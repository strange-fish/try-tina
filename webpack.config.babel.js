const { resolve } = require('path')
const webpack = require('webpack')
const MinaEntryPlugin = require('@tinajs/mina-entry-webpack-plugin')
const MinaRuntimePlugin = require('@tinajs/mina-runtime-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const loaders = {
  script: 'babel-loader',
  style: {
    loader: 'postcss-loader',
    options: {
      config: {
        path: resolve('./postcss.config.js')
      }
    }
  }
}

const myStyle = [
  loaders.style,
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: resolve(__dirname, './src/styles/index.scss')
    }
  }
]

module.exports = {
  context: resolve('src'),
  entry: './app.vue',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]',
    publicPath: '/',
    globalObject: 'wx'
  },
  stats: {
    assets: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    colors: true
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@tinajs/mina-loader',
            options: {
              loaders,
              languages: {
                scss: myStyle
              }
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
          loader: 'file-loader',
          options: {
            name: 'wxs/[name].[hash:6].[ext]'
          }
        }
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
    new MinaEntryPlugin({
      map: entry => ['es6-promise/dist/es6-promise.auto.js', entry]
    }),
    new MinaRuntimePlugin({
      runtime: './runtime.js'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common.js',
      minChunks: 2,
      minSize: 0
    },
    runtimeChunk: {
      name: 'runtime.js'
    }
  },
  mode: isProduction ? 'production' : 'none'
}
