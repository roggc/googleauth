import HtmlWebpackPlugin from 'html-webpack-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'

export default
{
  entry:'./src-test/index.js',
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
      }
    ]
  },
  node:
  {
    fs:'empty'
  },
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
        template:'./src-test/public/index.html'
      }
    )
  ]
}
