const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const HookShellScriptPlugin = require('hook-shell-script-webpack-plugin')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default

module.exports = {
    entry: './js/main.js',
    mode: 'development',
    devServer: {
        static: { directory: `${__dirname}/_site` }
    },
    output: {
        path: `${__dirname}/pages`,
        filename: 'bundle.js',
    },
    plugins: [
        new NodePolyfillPlugin(),
        new HookShellScriptPlugin({
            afterEmit: [{
                command: `${__dirname}/cgi-bin/static-site`,
                args: ['--verbose', '--force', './cgi-bin/web.pl', './_site'],
            }],
        }),
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