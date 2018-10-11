var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
    config.set({
        frameworks: ['mocha','sinon-chai','chai-dom','chai',],

        files: [
          {pattern: 'http://minedata.cn/minemapapi/v1.4/minemap.css',type: 'css', watched: false, included: true, served: true, nocache: false},
          {pattern: 'http://minedata.cn/minemapapi/v1.4/minemap.js', watched: false, included: true, served: true, nocache: false},
            'test/**/*.spec.js'
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec','coverage'],

        browsers: ['Chrome'],

      //   customDebugFile: './test/debug.html',
      // customContextFile: './test/context.html'
    })
}
