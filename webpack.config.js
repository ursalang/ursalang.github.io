const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default

module.exports = {
    entry: {
        readme: './js/readme.js',
        tutorial: './js/tutorial.js',
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'pages'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new NodePolyfillPlugin(),
        new WatchExternalFilesPlugin({ files: ['./pages/**/*', './cgi-bin/**/*'] }),
    ],
    resolve: {
        alias: {
            fs: false
        }
    },
    stats: {
        warningsFilter: [
            './node_modules/@ursalang/ursa/lib/ark/interp.js'
        ]
    }
}