const // Optimise CSS
  PurgecssPlugin = require('purgecss-webpack-plugin'),
  // Optimise Assests
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  // Extract CSS to avoud FOUC
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  // Optimise JS
  TerserPlugin = require('terser-webpack-plugin')

exports.DevServer = ({ host, port, proxy, https } = {}) => ({
  devServer: {
    host,
    port,
    proxy,
    https,
    open: true,
    hot: true,
    inline: true,
    liveReload: false,
    watchOptions: { ignored: /node_modules/ },
    disableHostCheck: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    stats: {
      colors: true,
      children: false,
      maxModules: 0,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      errors: false
    },
    overlay: {
      errors: false,
      warnings: false
    },
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
})

// HTML
exports.Html = () => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: false } }]
      }
    ]
  }
})

// JS Scripts
exports.Scripts = ({ include, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include,
        use: [{ loader: 'babel-loader', options }]
      }
    ]
  }
})

// JS Minification
exports.MinifyJS = options => ({
  optimization: {
    minimizer: [new TerserPlugin(options)]
  }
})

// JS Linter
exports.LintJS = ({ include, options }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        enforce: 'pre',
        loader: 'eslint-loader',
        options
      }
    ]
  }
})

exports.Styles = ({ include } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      }
    ]
  }
})

// Production extraction of CSS
exports.ExtractCSS = ({ include, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../' // Account for the static extra folder on prod
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: () => [require('autoprefixer')] }
          },
          { loader: 'resolve-url-loader' },
          'sass-loader'
        ],
        sideEffects: true
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(options)]
})

// Remove unused CSS
exports.PurifyCSS = options => ({
  plugins: [new PurgecssPlugin(options)]
})

// CSS Minification
exports.MinifyCSS = ({ options }) => ({
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: options,
        canPrint: true // false for analyzer
      })
    ]
  }
})

// Images
exports.Images = ({ include, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        include,
        use: [{ loader: 'url-loader', options }]
      }
    ]
  }
})

// Images optimisation
exports.OptimizeImages = ({ include, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        include,
        use: [{ loader: 'image-webpack-loader', options }],
        enforce: 'pre'
      }
    ]
  }
})

// Fonts
exports.Fonts = ({ include, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        include,
        use: [{ loader: 'url-loader', options }]
      }
    ]
  }
})
