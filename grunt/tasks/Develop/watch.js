/***************************************************************************************************************************************************************
 *
 * watch files
 *
 * Watch js, less, assets and html files
 *
 **************************************************************************************************************************************************************/

module.exports = function watch(grunt) {
	var watch = {
		LESS: {
			files: './src/css/*.less',
			tasks: ['styles'],
			options: {
				livereload: true
			}
		},
		JS: {
			files: './src/js/*.js',
			tasks: ['scripts'],
			options: {
				livereload: true,
			}
		},
		HTML: {
			files: './**/*.html',
			tasks: ['html'],
			options: {
				livereload: true,
			}
		}
	};

	grunt.config.set('watch', watch);
};
