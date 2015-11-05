module.exports = function tasks(grunt) {
	//////////// tasks
	// grunt-w3c-validation
	// a11y
	/* grunt.registerTask('html', ['validation', 'accessibility']); //'grunt-html',

	 // grunt-icon
	 grunt.registerTask('assets', []);

	 // javascript
	 grunt.registerTask('scripts', ['jshint', 'uglify']); //'lintjs', 'uglify'

	 // lint less
	 grunt.registerTask('styles', ['less', 'autoprefixer']); //'less','auto-prefixer'

	 // build
	 grunt.registerTask('build', ['html', 'assets', 'scripts', 'styles']);

	 // Default task
	 grunt.registerTask('default', ['build', 'connect', 'watch']);*/

	//Setup
	grunt.registerTask('setup', ['copy']);

	//Develop
	grunt.registerTask('develop', ['setup', 'less', 'autoprefixer', 'concat', 'uglify', 'connect',
	'watch']);

	//Build
	grunt.registerTask('build', ['combine', 'compress', 'imagemin', 'modernizer', 'uncss', 'usemin', 'zopfli']);

	//Default task
	grunt.registerTask('default', ['develop']);
};
