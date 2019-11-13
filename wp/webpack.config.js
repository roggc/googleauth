import HtmlWebpackPlugin from 'html-webpack-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'

export default
{
  entry:
  {
    index: './src/index.js'
  },
  output:
  {
    filename:'[name].js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use:
        {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: 'file-loader',
        options:
        {
          name: '[name].[ext]',
        }
      }
    ]
  },
  // node:
  // {
  //   fs:'empty'
  // },
  devServer:
  {
    historyApiFallback: true
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin
    (
      {
        template:'./src/public/index.html'
      }
    )
  ]
}
