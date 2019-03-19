const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/static/bundles/',
        path: path.resolve('../server/assets/bundles/'),
        filename: "[name]-[hash].js",
        chunkFilename: "[name]-[hash].js"
    },
    plugins: [
        new LodashModuleReplacementPlugin,
        new CleanWebpackPlugin(),
        new BundleTracker({ filename: '../server/webpack-stats.json' }),
        new BundleAnalyzerPlugin()
    ]
});