// const webpack = require('webpack');
const {
    VueLoaderPlugin
} = require('vue-loader')
const path = require('path')

module.exports = function (name) {
    return {
        mode: 'production',
        output: {
            filename: `${ name }.js`,
            path: path.resolve(__dirname, 'public/app')
        },
        entry: `./src-fe/${ name }/index.js`,
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
        plugins: [
            new VueLoaderPlugin({
                // compiler
                // productionMode: true,
                // optimizeSSR: true
            })
        ]
    }
}