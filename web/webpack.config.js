var webpack = require('webpack');

module.exports = {
    entry: ['./main.jsx'],
    output: {
        path: __dirname + '/build/',
		publicPath: '/build/',
        filename: '[name].bundle.js'
    },
	devtool: 'eval',
	externals: {
        "jquery": "jQuery"
    },
    module: {
        loaders: [
            { 
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/, 
				loader: 'babel',
				query:{
					presets:['react']
				} 
			}
        ]
    },
	
};