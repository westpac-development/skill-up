module.exports = function tasks(grunt) {
  //////////// tasks

  // grunt-w3c-validation
  // a11y
  grunt.registerTask('html', ['grunt-html', 'accessibility']);

  // grunt-icon
  grunt.registerTask('assets', []);

  // javascript
  grunt.registerTask('scripts', []); //'lintjs', 'uglify'

  // lint less
  grunt.registerTask('styles', []); //'less'

  // build
  grunt.registerTask('build', ['html', 'assets', 'scripts', 'styles']);

  // Default task
  grunt.registerTask('default', ['build', 'connect', 'watch']);
};
