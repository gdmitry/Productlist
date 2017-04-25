const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "build"), // string
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },

        ]
    },
    plugins: [
        // new UglifyJSPlugin({
        //     compress: true,
        //     sourceMap: true
        // }),
        CopyWebpackPlugin([
            { from: "./index.html" }
        ])
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
}