//import '@babel/polyfill';

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    //mode: 'production',
    devServer:{
        port:3000
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.jsx?$/,
                exclude: /node_modules/ //excludes node_modules folder from being transpiled by babel. We do this because it's a waste of resources to do so.
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            sourceMap: false,
                            //importLoaders: 1
                            //localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: './public/index.html',
           filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/site.css',
            chunkFilename: '[id].css' ,
        })
    ],
}