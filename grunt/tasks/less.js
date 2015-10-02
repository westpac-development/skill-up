/***************************************************************************************************************************************************************
*
* less
*
* Compile less to css, minify and generate sourcemap
*
**************************************************************************************************************************************************************/

module.exports = function less(grunt) {
	var less = {
		options: {
			compress: true,
			yuicompress: true,
			optimization: 2,
			sourceMap: true,
			sourceMapFilename: './**/map/css.map', // where file is generated and located
		},
		files: {
			'' : ''
		}
	};

	grunt.config.set('less', less);

};
