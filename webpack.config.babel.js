import webpack from 'webpack';
import path from 'path'

export default {
    entry:  path.resolve(__dirname, './src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'client.bundle.js',
      publicPath:'/bin/',
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
              test: /\.(jsx|js)?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options:{
                "presets": [
                  "env",
                  "stage-0",
                  "react"
                ],
                "plugins": [
                  "transform-react-jsx",
                  "transform-decorators-legacy"
                ]
              }
            },
            {
                test: /\.scss$/,
                  use: [
                    "style-loader", // creates style nodes from JS strings,
                    "css-loader", // translates CSS into CommonJS
                    'postcss-loader',
                    "sass-loader", // compiles Sass to CSS
                ],
                exclude:/node_modules/,
            },
            {test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=25000'},
            {test: /\.(woff|ttf|eot|woff2)$/, loader: 'url-loader?limit=100000'},

        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx','.scss','.less']
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by Jerry'),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'true'))
        }),
    ],
    devServer: {
    proxy: {
      '/api':{
        target: 'https://rcs-admin-dev.suixingpay.com',
        pathRewrite: {"^/api" : "/api"},
        secure:false,
        changeOrigin: true
      },
      '/nfs_data':{
        target: 'http://172.16.136.71',
      },
    },
    contentBase: [path.join(__dirname, 'public/html')],//t
    historyApiFallback: true,
    disableHostCheck: true,
    https:true,
  },

}