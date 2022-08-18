const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require('path');

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].[bundle].js',
    },
    plugins: [new CleanWebpackPlugin()]
});