const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	
	devServer: {
		host: "0.0.0.0",
		hot: true,
	//	port: PORT,
		disableHostCheck: true,
	//	contentBase: path.join(__dirname, "public/"),
	//	publicPath: "/",
	//	historyApiFallback: true,
		stats: {
			colors: true,
		},	
	},
});
