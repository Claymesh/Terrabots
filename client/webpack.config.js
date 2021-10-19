var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ["./src/index.js"],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                },
              },
              {
                test: /\.(scss)$/,
                use: [
                  {
                    loader: "style-loader",
                  },
                  {
                    loader: "css-loader",
                  },
                  {
                    loader: "sass-loader",
                  },
                ],
              },
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[hash].[ext]',
                },
            },
]
},
resolve: {
    extensions: ['.js', '.jsx'],
  },
mode: 'development',
devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    proxy: { "/api": { target: 'http://localhost:3000', secure: false }
    },
},
plugins: [

    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
]
}