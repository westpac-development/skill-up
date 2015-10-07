/***************************************************************************************************************************************************************
 *
 * Uglify
 *
 * Minify files with UglifyJS
 *
 **************************************************************************************************************************************************************/

module.exports = function uglify(grunt) {
  var uglify = {
    options: {
      compress: {
        drop_console: true
      }
    },
    my_target: {
      files: {
        'dist/js/output.min.js': ['./src/js/*.js']
      }
    }
  };

  grunt.config.set('uglify', uglify);

};
