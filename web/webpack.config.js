var webpack = require('webpack');

module.exports = {
    entry: ['./main.jsx','./style/main.css'],
    output: {
        path: __dirname + '/build/',
		publicPath: '/build/',
        filename: '[name].bundle.js'
    },
	devtool: 'eval',
    module: {
        loaders: [
            { 
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/, 
				loader: 'babel',
				query:{
					presets:['react']
				} 
			},
			{
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
	postcss: function (webpack) {
        return [
			require('autoprefixer')(),
			require('postcss-import')({ addDependencyTo: webpack }),
			require("postcss-url")(),
      		require("postcss-cssnext")()
			//add your plugin here
		];
    }
};