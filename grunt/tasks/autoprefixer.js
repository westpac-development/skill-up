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

		},
		dist: {
			files: {
				'pretty.css': 'pretty.css'
			}
		}
	};

	grunt.config.set('autoprefixer', autoprefixer);

};
