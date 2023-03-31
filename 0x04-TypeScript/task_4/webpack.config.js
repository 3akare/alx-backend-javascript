const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports ={
    entry: ['./js/subjects/Subject.ts', './js/subjects/Cpp.ts', './js/subjects/React.ts', './js/subjects/Java.ts', './js/subjects/Teacher.ts', './js/main.ts'],
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
       contentBase: "./dist"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: "Development"
        })
      ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}