const path = require('path')

module.exports = {
    entry: {
        //index: './src/anotherEntry.js'
        index: './src/index.js'
    },
    output: {
        filename: 'webpack-numbers.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'webpackNumbers'
    },
    externals: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
    }
}