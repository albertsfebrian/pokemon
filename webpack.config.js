const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry : path.join(__dirname,'src/index.jsx'),
    output : {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js',
        publicPath: "/"
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader"
                }
            },
            {
                test : /\.(css)$/,
                use : [MiniCssExtractPlugin.loader,"style-loader","css-loader"]
            },
            {
                test : /\.(jpg|jpeg|png|gif|svg)$/,
                loader : "file-loader",
                options : {
                    outputPath: "images"
                }
            }
        ]
    },
    resolve : {
        extensions: ['.jsx', '.js'],
        alias : {
            '@components' : path.join(__dirname, 'src/components/'),
            '@pages' : path.join(__dirname, 'src/pages/'),
            '@utils' : path.join(__dirname, 'src/utils/'),
            '@variables' : path.join(__dirname,'src/variables/'),
            '@graphql' : path.join(__dirname,'src/graphql/'),
            '@queries' : path.join(__dirname,'src/graphql/queries'),
            '@assets' : path.join(__dirname,'src/assets'),
            '@styles' : path.join(__dirname,'src/styles'),
            '@handler' : path.join(__dirname,'src/handler'),
        }
    },
    devServer : {
        host : '192.168.10.55',
        port : 3000,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join(__dirname, 'public/index.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public/favicon.png", to: "favicon.png" },
                { from: "public/manifest.json", to: "manifest.json" },
                { from: "public/robots.txt", to: "robots.txt" },
                // { context:'src/assets' ,from: "*", to: "static/media"}
            ],
        }),
    ]
}