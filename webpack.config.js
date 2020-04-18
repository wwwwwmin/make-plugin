const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    plugins: [
        //实例化插件
        new CopyrightWebpackPlugin({
            name: 'lee'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}