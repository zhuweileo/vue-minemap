var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
    config.set({
        frameworks: ['mocha','sinon-chai','chai-dom','chai',],

        files: [
            'test/**/*.spec.js'
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec','coverage'],

        browsers: ['Chrome']
    })
}
