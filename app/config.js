
'use strict'


// Export

module.exports = {

	app: {
		name: 'SOS Ukraine',
	},

	use: {
		templates: '.html',
		scripts: '.js',
		styles: '.scss',
	},

	build: {
		imagemin: [ 'png', 'jpg' ],
		// sourcemaps: [ 'js', 'css' ],
		bundles: ['css', 'js'],
		autoprefixer: [ 'last 3 versions', 'ie 10', 'ie 11' ],
		critical: ['variables.scss', 'fonts.scss', 'preloader.scss', 'app.scss']
	},

	// autoCreate: {
	// 	onlyOnWatch: true,
	// 	files: [ '.scss' ],
	// 	levels: [ 'develop' ],
	// 	ignoreNodes: [ 'symbol', /_no_js/i ],
	// },

	dist: {
		styles: 'styles',
		fonts: 'static/fonts',
		img: 'static/img',
		symbol: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons',
	},

	favicons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false,
	},

	HTMLBeautify: {
		preserve_newlines: false,
	},

}

