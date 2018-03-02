const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' //the first file name changed idk if will work 
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 5000,
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};
