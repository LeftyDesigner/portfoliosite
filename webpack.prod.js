const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");
var path = require('path');

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",			
});
