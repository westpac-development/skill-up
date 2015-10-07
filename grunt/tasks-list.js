module.exports = function tasks(grunt) {
  //////////// tasks
  // grunt-w3c-validation
  // a11y
  grunt.registerTask('html', ['htmllint', 'accessibility']); //'grunt-html',

  // grunt-icon
  grunt.registerTask('assets', []);

  // javascript
  grunt.registerTask('scripts', ['jshint', 'uglify']); //'lintjs', 'uglify'

  // lint less
  grunt.registerTask('styles', ['less', 'autoprefixer']); //'less','auto-prefixer'

  // build
  grunt.registerTask('build', ['assets', 'scripts', 'styles']);

  // Default task
  grunt.registerTask('default', ['build', 'connect', 'watch']);
};
