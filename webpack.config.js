const webpack = require("webpack");
const path = require("path");

module.exports = {	devtool: "inline-source-map",
	entry: path.join(__dirname, "src/index.coffee"),
	output: {
		path: path.join(__dirname, "public"),
		filename: "build.js"
	},
	resolve: {
		modulesDirectories: ["node_modules", "src"],
		extensions: ["", ".js", ".coffee"]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html?$/,
				loader: "html"
			},
			{
				test: /\.haml$/,
				loader: "haml"
			},
			{
				test: /\.coffee$/,
				loader: "coffee-loader"
			},
			{
				test: /\.(coffee\.md|litcoffee)$/,
				loader: "coffee-loader?literate"
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.scss$/,
				loader: "style!css!sass"
			},
			{
				test: /\.woff2?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg)$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "index.html"
		}
	}
};