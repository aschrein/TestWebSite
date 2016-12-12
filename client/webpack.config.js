module.exports = {
	entry: './app.js' ,
	node: {
		fs: "empty"
	} ,
	output: {
		path: "../public/static" ,
		filename: 'app2.js'
	} ,
	resolve: {
		extensions: [ '' , '.js' , '.jsx' , '.scss' ] ,
		modulesDirectories: [
			'node_modules'
		]
	} ,
	module: {
		loaders: [
			{
				test: /\.js$/ ,
				loader: [ 'babel' ] ,
				query: {
					plugins: [ 'transform-runtime' ] ,
					presets: [ 'es2015' , 'stage-0' , 'react' ]
				} ,
				exclude: /node_modules/
			} ,
			{
				test: /\.s[a|c]ss$/ ,
				loader: 'style!css!sass'
			} ,
			{
				test: /\.(less)$/ ,
				loader: 'style!css!less'
			} ,
			{
				test: /\.(css)$/ ,
				loader: 'style!css'
			} ,
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/ ,
				loader: 'file?name=fonts/[name].[ext]'
			} ,
			{
				test: /\.jade$/ ,
				loader: 'pug'
			}
		]
	} ,
	sassLoader: {
		includePaths: [
			"./node_modules/bootstrap/less/"
		]
	}
}