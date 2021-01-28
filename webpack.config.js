const path = require('path');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-first-webpack.bundle.js'
    },
    plugins: [
        new HtmlWebpackPartialsPlugin()
    ],
    devServer: {
        port: 8000,
        historyApiFallback: true,
        hot: true,
    },
};
