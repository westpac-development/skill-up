/***************************************************************************************************************************************************************
 *
 * autoprefixer
 *
 * parses CSS and adds vendor-prefixed CSS properties using the Can I Use database
 *
 **************************************************************************************************************************************************************/

module.exports = function autoprefixer(grunt) {
	var autoprefixer = {
		options: {
			browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
		},
		main: {
			expand: true,
			flatten: true,
			src: './dist/src/css/*.css',
			dest: './dist/src/css/'
		}
	};

	grunt.config.set('autoprefixer', autoprefixer);

};
