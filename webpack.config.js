const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const absolute = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      filename: 'index.html',
      inject: false,
      appMountId: 'app',
      appMountHtmlSnippet: '<div id="root"></div>',
      devServer: 'https://localhost:3000'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          'sass-loader?sourceMap',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                absolute('src/components/utilities/GlobalStylesProvider/styles/resources.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          absolute('src/components/utilities/GlobalStylesProvider/assets/fonts'),
          absolute('public/images'),
        ],
        loaders: [
          {
            loader: 'file-loader',
          }
        ]
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
