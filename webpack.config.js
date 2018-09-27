var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack')

module.exports = {
    entry: {
        'index': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'VMineMap',
        libraryTarget: 'umd'
    },
    // devtool: '#source-map',
    devtool: '#eval-source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue']
    },
    mode: 'production',
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        "env": {
                            "test": {
                                "plugins": ["istanbul"]
                            }
                        }
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};


if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ])
}

