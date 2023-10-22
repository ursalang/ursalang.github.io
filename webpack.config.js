const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default

module.exports = {
    entry: './js/main.js',
    mode: 'development',
    output: {
        path: `${__dirname}/pages`,
        filename: 'bundle.js',
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