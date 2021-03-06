/***************************************************************************************************************************************************************
 *
 * grunt-concat
 *
 * concatenate files.
 *
 **************************************************************************************************************************************************************/

module.exports = function concat(grunt) {
  var concat = {
    dist: {
      src: ['./dist/src/js/*.js', './dist/participants/**/*.js'],
      dest: './dist/src/js/build/production.js',
    }
  }
  grunt.config.set('concat', concat);
};
