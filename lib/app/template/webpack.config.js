//import '@babel/polyfill';

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const resolve = require('resolve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    devServer:{
        port:3000,
        stats: 'errors-only'
    },
    stats: 'errors-only',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'js/site.[contenthash:8].js',
        chunkFilename: 'js/site.[contenthash:8].chunk.js',
    },
    optimization: {
        minimizer: [
          new TerserPlugin({
            sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
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
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: require.resolve('url-loader'),
                options: {
                  limit: '10000',
                  name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
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
            filename: 'css/site.contenthash:8].css',
            chunkFilename: 'css/site.[contenthash:8].chunk.css' ,
        })
    ],
}