const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    optimization: {
        usedExports: true
    },
    output: {
        publicPath: '/',
        filename: "[name]-[hash].js",
        chunkFilename: "[name]-[hash].js"
    },
    devServer: {
        compress: true,
        stats: 'errors-only',
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
});