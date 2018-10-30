


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    // optimization: {
    //     minimizer: [new UglifyJsPlugin(
    //         {
    //             test: /\.js(\?.*)?$/i
    //         }
    //     )]
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }
};