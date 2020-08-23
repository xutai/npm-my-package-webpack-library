const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        // Exposing the library as a variable called webpackNumbers.
        library: 'webpackNumbers',
        libraryTarget: 'var'
    },
    // Using externals to avoid bundling lodash, so the consumer is required to load it.
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}