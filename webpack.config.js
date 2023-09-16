const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const HookShellScriptPlugin = require('hook-shell-script-webpack-plugin')

module.exports = {
    entry: './src/js/app.js',
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
        new HookShellScriptPlugin({ afterEmit: [`${__dirname}/update-site`] })
    ]
}