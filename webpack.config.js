const path = require('path')
// const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const sassExtrass = require('sass-extract')

module.exports = {
    entry: {
        bundle: './src/App.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash:8].js',
        // publicPath: '/assets/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        ['import', {
                            libraryName: "antd",
                            style: true,
                        }],
                    ]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: /node_modules/,
                use: [{
                    // loader: 'file-loader',
                    loader: 'url-loader',
                    options: {
                        limit: 1024*4,
                        name: '[name].[hash:5].[ext]',
                        outputPath: '/assets/',
                        useRelativePath: true,
                    },
                }]
            },{
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    devServer: {
        open: true,
        hot: true,
        port: 3001,
        progress: true,
        inline: true,
        // compress: true,
        // contentBase: path.resolve(__dirname, 'build'),
        proxy: {
            "/api": "http://localhost:3000"
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // new ExtractTextPlugin("styles.css"),
        // sassExtrass
    ]
}